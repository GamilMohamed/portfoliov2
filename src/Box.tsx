import { useState } from "react";

const themes = {
  blue: {
    primary: "text-blue-700",
    bg: "bg-blue-700",
    bgs: "bg-white",
    border: "border-white",
    secondary: "text-white",
    svgcolor: "rgb(29 78 216)"
  },
  white: {
    primary: "text-white",
    bg: "bg-white",
    bgs: "bg-black",
    border: "border-black",
    secondary: "text-black",
    svgcolor: "white"
  },
  black: {
    primary: "text-black",
    bg: "bg-black",
    bgs: "bg-white",
    border: "border-white",
    secondary: "text-white",
    svgcolor: "black"
  }
};


function Box() {
  return (
    <>
      <SquareRectangleBlack
        theme="black"
        button={"Click me"}
        width={20}
        title={"PROFIL"}
      >
        <>
        <img src="https://cdn.intra.42.fr/users/3aed91771be50eea96087d8d49c58d40/mgamil.jpg" alt="moha" />
        <p>Hello world !!!</p>
        </>
        </SquareRectangleBlack>
      {/* <br />
      <SquareRectangleBlack
        theme="blue"
        width={30}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam necpurus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices	aliquam."
        }
        button={"Click me"}
        photo={"https://cdn.intra.42.fr/users/3aed91771be50eea96087d8d49c58d40/mgamil.jpg"}
      />
      <br />
      <SquareRectangleBlack
        theme="black"
        width={40}
        button={"Ok"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam necpurus ac libero ultrices aliquam. Nullam nec purus ac libero ultricesaliquam."
        }
      />
      <br />
      <SquareRectangleBlack
        theme="black"
        width={10}
        button={"Ok"}
        text={"world hello"}
      />
      <br />
      <SquareRectangleBlack
        theme="white"
        width={10}
        button={"Ok"}
        text={"hello world"}
      />
      <br /> */}
      {/* </div> */}
    </>
  );
}

interface SquareRectangleProps {
  theme: "blue" | "white" | "black";
  width: number;
  title: string;
  button?: string;
  action?: () => void;
  children?: React.ReactNode;
}

const SquareRectangleBlack: React.FC<SquareRectangleProps> = ({
  theme,
  width,
  button,
  title,
  children,
  action,
}) => {
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setButtonVisible(false);
  };

  const { primary, bg, bgs, border, secondary, svgcolor } = themes[theme];
  return (
    <div
      id="Pixer"
      className={`${bg} p-2`}
      style={{
        maxWidth: `${width}vw`,
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className={`text-3xl px-2 ${bgs} ${primary} border ${border} border-b-8 `}
        onClick={() => setButtonVisible(!buttonVisible)}
      >
        {title}
        <svg
          onClick={handleButtonClick}
          style={{ transform: "translate(0 , 5px)" }}
          fill={svgcolor}
          height="30px"
          width="30px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 490 490"
        >
          <polygon
            points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
          />
        </svg>
      </div>
      <div
        style={{
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          display: buttonVisible ? "flex" : "none",
        }}
        className={`${bg} ${secondary} p-10 border ${border} border-b-8 border-l-8 border-r-8 text-2xl`}
      >
        {children}
        {button && (
          <div
            style={{
              color: primary,
              margin: "auto",
              transform: "translate(0, 10px)",
            }}
            onClick={action}
            className={`${bgs} ${primary} py-2 px-6`}
          >
            <p>{button}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box;

// white F4F4F4
// black 000000
