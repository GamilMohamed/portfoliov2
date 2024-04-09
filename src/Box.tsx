import React from "react";
import { useState } from "react";
import styled from "styled-components";

const BigBloc = styled.div<{
  $main: string;
  $destroy: boolean;
}>`
  background-color: ${(props) => props.$main};
  transition: all 0.5s;
  transform: rotate(90deg, 0);
  display: ${(props) => (props.$destroy ? "none" : "")};
`;

const TitleBloc = styled.div<{ $main: string; $second: string }>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.$second};
  color: ${(props) => props.$main};
  border-bottom-width: 8px;
  border-color: ${(props) => props.$second};
`;

const DataBloc = styled.div<{
  $main: string;
  $second: string;
  $buttonvisible: boolean;
}>`
  background-color: ${(props) => props.$main};
  color: ${(props) => props.$second};
  border-bottom-width: 8px;
  border-left-width: 8px;
  border-right-width: 8px;
  border-color: ${(props) => props.$second};
  display: ${(props) => (props.$buttonvisible ? "flex" : "none")};
  flex-direction: column;
`;
export const ButtonBloc = styled.button<{ $main: string; $secondary: string }>`
  background-color: ${(props) => props.$main};
  color: ${(props) => props.$secondary};
  border: 4px solid ${(props) => props.$secondary};
  margin: auto;
  transform: translate(0, 10px);
`;

// const myWhite = "rgb(249, 246, 238)";
// const myWhite = "green";
export const themes = {
  blue: {
    main: "rgb(29 78 216)",
    second: "rgb(249, 246, 238)",
  },
  white: {
    main: "rgb(249, 246, 238)",
    second: "black",
  },
  black: {
    main: "black",
    second: "rgb(249, 246, 238)",
  },
  red: {
    main: "red",
    second: "rgb(249, 246, 238)",
  },
};

interface SquareRectangleProps {
  theme: "blue" | "white" | "black" | "red";
  width?: number;
  title: string;
  button?: string;
  action?: () => void | undefined | any;
  children?: React.ReactNode;
  zIndex?: number;
  close?: boolean | null;
  pad?: boolean | string;
  href?: string | undefined;
}

const WindowBloc: React.FC<SquareRectangleProps> = ({
  theme,
  button,
  title,
  children,
  action,
  close = false,
  pad = "p-6",
  href,
}) => {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [visible, setVisible] = useState(true);

  const handleButtonClick = () => {
    if (close) {
      setVisible(!visible);
    } else setButtonVisible(!buttonVisible);
  };

  const { main, second } = themes[theme];

  return (
    <BigBloc
      $main={main}
      $destroy={!visible}
      // $width={width + "vw"}
      id="MargoBox"
      className="p-2"
    >
      <TitleBloc
        $main={main}
        $second={second}
        className={`text-3xl px-2`}
        id="khalid"
      >
        {title}
        {close != null && (
          <svg
            width="35px"
            style={{ transform: "translate(0 , 2px)" }}
            height="35px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            fill="none"
            stroke={main}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            onClick={handleButtonClick}
          >
            {/* MINUS */}
            {buttonVisible && !close && (
              <line x1="5" y1="8" x2="15" y2="8" stroke={main} />
            )}
            {/* CROSS */}
            {buttonVisible && close && (
              <>
                <line x1="5" y1="3" x2="15" y2="13" stroke={main} />
                <line x1="5" y1="13" x2="15" y2="3" stroke={main} />
              </>
            )}
            {/* RECTANGLE */}
            {!buttonVisible && !close && (
              <rect height="10" width="10" y="3" x="5" />
            )}
          </svg>
        )}
      </TitleBloc>
      <DataBloc
        $main={main}
        $second={second}
        $buttonvisible={buttonVisible}
        className={`${pad} text-2xl`}
        id="lol"
      >
        {children}
        {button && (
          <ButtonBloc
            $main={main}
            $secondary={second}
            onClick={action}
            className="py-2 px-6"
          >
            <a href={href} target="_blank" rel="noreferrer">
              <p>{button}</p>
            </a>
          </ButtonBloc>
        )}
      </DataBloc>
    </BigBloc>
  );
};

export default WindowBloc;

// white F4F4F4
// black 000000
