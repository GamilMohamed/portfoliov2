import styled from "styled-components";
import { Reveal } from "../test";

const Logo = styled.div<{ $bg: string }>`
  background-color: ${(props) => props.$bg};
`;

const namesntype: { [key: string]: string } = {
  react: "lib",
  django: "lib",
  nestjs: "lib",
  c: "lang",
  python: "lang",
  typescript: "lang",
  postgresql: "infra",
  git: "infra",
  bash: "infra",
  docker: "infra",
  vscode: "infra",
};

const keysToLoop: string[] = Object.keys(namesntype);

const colorsfromtype: { [key: string]: string } = {
  lang: "#2edaaa",
  lib: "#f3a248",
  infra: "#1e35ef",
};

function LangBloc() {
  return (
    <div>
      <div id="LangBloc">
        {keysToLoop.map((name, index) => (
          <Reveal
            key={index}
            animation={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            transition={{ duration: 1, delay: index / 10 }}
          >
            <Logo id="myman" $bg={colorsfromtype[namesntype[name]]}>
              <i className={`devicon-${name}-plain`}></i>
              <p>{name}</p>
            </Logo>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default LangBloc;
