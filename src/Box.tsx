import { useState } from "react";
import styled from "styled-components";
import cross from "./assets/cross3.svg";
// import moha from "./gamiltest.jpg";

const Test = styled.div<{ moha?: boolean }>`
  display: ${(props) => (props.moha ? `` : `none`)};
`;
function Box() {
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignContent: "center",
        }}
      > */}
      {/* <SquareRectangle /> */}
      <SquareRectangleBlack
        primary={"white"}
        secondary="black"
        width={20}
        height={590}
        button={"Click me"}
        svgcolor={"white"}
        photo={
          "https://cdn.intra.42.fr/users/3aed91771be50eea96087d8d49c58d40/mgamil.jpg"
        }
      />
      <br />
      <SquareRectangleBlack
        primary="blue-700"
        secondary="white"
        svgcolor="rgb(29 78 216)"
        width={30}
        height={29}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam necpurus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices	aliquam."
        }
      />
      <br />
      <SquareRectangleBlack
        primary={"white"}
        secondary={"black"}
        width={40}
        height={420}
        svgcolor={"white"}
        button={"Ok"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam necpurus ac libero ultrices aliquam. Nullam nec purus ac libero ultricesaliquam."
        }
      />
      <br />
      <SquareRectangleBlack
        primary={"black"}
        secondary={"white"}
        svgcolor={"black"}
        width={10}
        height={325}
        button={"Ok"}
        text={"world hello"}
      />
      <br />
      <SquareRectangleBlack
        primary={"white"}
        secondary={"black"}
        svgcolor={"white"}
        width={10}
        height={325}
        button={"Ok"}
        text={"hello world"}
      />
      <br />
      {/* </div> */}
    </>
  );
}

// function SquareRectangle() {
// 	return (
// <div className="bg-white p-1">
//   <div className="bg-black text-white p-1">
//     PROFIL
//   </div>
//   <div className="bg-white text-black p-10 border border-black border-8"> {/* Added border class here */}
//     Text
//   </div>
// </div>
// 	);
//   }

interface SquareRectangleProps {
  primary: string;
  secondary: string;
  width: number | string;
  height: number | string;
  button?: string;
  text?: string;
  photo?: string;
  svgcolor?: string;
}
let i = 0;
const SquareRectangleBlack: React.FC<SquareRectangleProps> = ({
  primary,
  secondary,
  width,
  height,
  button,
  photo,
  text,
  svgcolor,
}) => {
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setButtonVisible(false);
  };

  // if (window.innerWidth < 1200) {
  // 	return <></>
  // }
  //   console.log(
  //     i++,
  //     "primary",
  //     primary,
  //     "secondary",
  //     secondary,
  //     "width",
  //     width,
  //     "height",
  //     height,
  //     "button",
  //     button,
  //     "photo",
  //     photo,
  //     "text",
  //     text,
  //     "svgcolor",
  //     svgcolor
  //   );
  return (
    <div
      id="Pixer"
      className={`bg-${primary} p-2`}
      style={{
        maxWidth: `${width}vw`,
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className={`text-3xl px-2 bg-${secondary} text-${primary} border border-${secondary} border-b-8 `}
        onClick={() => setButtonVisible(!buttonVisible)}
      >
        PROFIL
        <svg
          onClick={handleButtonClick}
          style={{ transform: "translate(0 , 5px)" }}
          fill={svgcolor}
          height="30px"
          width="30px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          //   xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 490 490"
          //   xml:space="preserve"
        >
          <polygon
            points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
          />
        </svg>
      </div>
      {/* <button onClick={() => alert("secondary ["+ secondary +"]")} >clic</button> */}
      <div
        style={{
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          display: buttonVisible ? "flex" : "none",
        }}
        className={`bg-${primary} text-white p-10 border border-${secondary} border-b-8 border-l-8 border-r-8 text-2xl`}
      >
        {/* {text && <h6 className={"text-" + "red-700"}>{text}</h6>} */}
        {text && <h6 className={`text-${secondary}`}>{text}</h6>}
        {/* {console.log("secondary [" + secondary + "]")} */}
        {photo && (
          <div>
            <img src={photo} alt="moha" />
          </div>
        )}
        {button && (
          <div
            style={{
              color: primary,
              margin: "auto",
              transform: "translate(0, 10px)",
            }}
            className={`bg-${secondary} text-${primary} py-2 px-6`}
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
