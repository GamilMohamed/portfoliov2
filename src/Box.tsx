import React from "react";
import { useState } from "react";

const themes = {
  blue: {
    primary: "text-blue-700",
    bg: "bg-blue-700",
    bgs: "bg-white",
    border: "border-white",
    secondary: "text-white",
    svgcolor: "rgb(29 78 216)",
  },
  white: {
    primary: "text-white",
    bg: "bg-white",
    bgs: "bg-black",
    border: "border-black",
    secondary: "text-black",
    svgcolor: "white",
  },
  black: {
    primary: "text-black",
    bg: "bg-black",
    bgs: "bg-white",
    border: "border-white",
    secondary: "text-white",
    svgcolor: "black",
  },
};

// function Box() {
//   return (
//     <>
//       <WindowBloc
//         theme="black"
//         button={"Click me"}
//         width={20}
//         title={"PROFIL"}
//       >
//         <>
//         <img src="https://cdn.intra.42.fr/users/3aed91771be50eea96087d8d49c58d40/mgamil.jpg" alt="moha" />
//         <p>Hello world !!!</p>
//         </>
//         </WindowBloc>
//     </>
//   );
// }

interface SquareRectangleProps {
  theme: "blue" | "white" | "black";
  width: number;
  title: string;
  button?: string;
  action?: () => void;
  children?: React.ReactNode;
  zIndex?: number;
}

const WindowBloc: React.FC<SquareRectangleProps> = ({
  theme,
  width,
  button,
  title,
  children,
  action,
  zIndex,
}) => {
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setButtonVisible(false);
  };

  const { primary, bg, bgs, border, secondary, svgcolor } = themes[theme];
  return (
    <div
      id="MargoBox"
      className={`${bg} p-2`}
      style={{
        zIndex: zIndex,
        width: `${width}vw`,
        transition: "all 0.5s",
        transform: "rotate(90deg, 0)",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className={`text-3xl px-2 ${bgs} ${primary} border ${border} border-b-8 `}
        onClick={() => setButtonVisible(!buttonVisible)}
      >
        {title}
          <svg
            width="35px"

            style={{ transform: "translate(0 , 2px)" }}
            height="35px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            fill="none"
            stroke={svgcolor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            {buttonVisible ? 
            <>
          (<line x1="5" y1="3" x2="15" y2="13" stroke={svgcolor} />
          <line x1="5" y1="13" x2="15" y2="3" stroke={svgcolor} />)
          </>
            : 
            <rect height="10" width="10" y="3" x="5" />
          }
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
              color: secondary,
              margin: "auto",
              transform: "translate(0, 10px)",
            }}
            onClick={action}
            className={`${border} border-4 py-2 px-6`}
          >
            <p>{button}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WindowBloc;

// white F4F4F4
// black 000000
