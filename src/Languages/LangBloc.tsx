import styled from "styled-components";
import { Reveal } from "../test";

const Logo = styled.div<{ $bg: string }>`
  background-color: ${(props) => props.$bg};
  // font-size: 20vw;
  // border-radius: 25%;
  // width: 20%;
`;

const colors = ["#2edaaa", "#f3a248", "#1e35ef", "#f3a248"];
const names = [
  "react",
  "python",
  "docker",
  "typescript",
  "c",
  "nestjs",
  "git",
  "linux",
];


function LangBloc() {
  return (
    <div
      style={
        {
          // maxWidth: "fit-content",
          // marginLeft: "auto",
          // marginRight: "auto",
        }
      }
    >
      <div id="LangBloc">
        {names.map((name, index) => (
            <Reveal animation={{
            hidden: { scale: 0},
            visible: {  scale: 1},
            }} transition={{ duration: 1, delay: index / 4 }}>
          <Logo id="myman" $bg={colors[index % 4]}>
            <i className={`devicon-${name}-plain`}></i>
          </Logo>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default LangBloc;
