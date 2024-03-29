import React, { useRef } from "react";
import { useState } from "react";

export const themes = {
  blue: {
    primary: "text-blue-700",
    bg: "bg-blue-700",
    bgs: "bg-white",
    border: "border-white",
    secondary: "text-white",
    svgcolor: "rgb(29 78 216)",

    main: "blue",
    second: "white"
  },
  white: {
    primary: "text-white",
    bg: "bg-white",
    bgs: "bg-black",
    border: "border-black",
    secondary: "text-black",
    svgcolor: "white",

    main: "white",
    second: "black"
  },
  black: {
    primary: "text-black",
    bg: "bg-black",
    bgs: "bg-white",
    border: "border-white",
    secondary: "text-white",
    svgcolor: "black",

    main: "black",
    second: "white"
  },
};

interface SquareRectangleProps {
  theme: "blue" | "white" | "black";
  width?: number;
  title: string;
  button?: string;
  action?: () => void | undefined;
  children?: React.ReactNode;
  zIndex?: number;
  close?: boolean;
  pad?: boolean | string;
}

const WindowBloc: React.FC<SquareRectangleProps> = ({
  theme,
  width = "max-content",
  button,
  title,
  children,
  action,
  zIndex,
  close,
  pad = "p-10",
}) => {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [visible, setVisible] = useState(true);

  const handleButtonClick = () => {
    if (close) {
      setVisible(!visible);
    } else setButtonVisible(!buttonVisible);
  };

  console.log("theme", theme);
  const { primary, bg, bgs, border, secondary, svgcolor } = themes[theme];
  console.log(
    "primary",
    primary,
    "bg",
    bg,
    "bgs",
    bgs,
    "border",
    border,
    "secondary",
    secondary,
    "svgcolor",
    svgcolor
  );
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      id="MargoBox"
      className={`${bg} p-2`}
      style={{
        zIndex: zIndex,
        width: `${width}vw`,
        transition: "all 0.5s",
        transform: "rotate(90deg, 0)",
        display: visible ? "" : "none",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className={`text-3xl px-2 ${bgs} ${primary} border ${border} border-b-8 `}
        // onClick={handleButtonClick}
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
          strokeWidth="1"
          onClick={handleButtonClick}
        >
          {/*
              RECTANGLE 
                <rect height="10" width="10" y="3" x="5" />
                LINE
                <line x1="5" y1="8" x2="15" y2="8" stroke={svgcolor} />
                CROSS
                <line x1="5" y1="3" x2="15" y2="13" stroke={svgcolor} />
                <line x1="5" y1="13" x2="15" y2="3" stroke={svgcolor} />
                
              */}
          {/* MINUS */}
          {buttonVisible && !close && (
            <line x1="5" y1="8" x2="15" y2="8" stroke={svgcolor} />
          )}
          {/* CROSS */}
          {buttonVisible && close && (
            <>
              <line x1="5" y1="3" x2="15" y2="13" stroke={svgcolor} />
              <line x1="5" y1="13" x2="15" y2="3" stroke={svgcolor} />
            </>
          )}
          {/* RECTANGLE */}
          {!buttonVisible && !close && (
            <rect height="10" width="10" y="3" x="5" />
          )}
        </svg>
      </div>
      <div
        style={{
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          display: buttonVisible ? "flex" : "none",
          // padding: "10px",
        }}
        className={`${bg} ${secondary}  ${pad} border ${border} border-b-8 border-l-8 border-r-8 text-2xl`}
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
            className={`${border} border-4 py-2 px-6 button`}
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
