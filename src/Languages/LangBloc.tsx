import styled from "styled-components";
import { Reveal } from "../test";

const Logo = styled.div<{ $bg: string}>`
  background-color: ${(props) => props.$bg};
`;

const namesntype: { [key: string]: string } = {
  react: "lib",
  python: "lang",
  docker: "infra",
  c: "lang",
  bash: "infra",
  nestjs: "lib",
  git: "infra",
  django: "lib",
  typescript: "lang",
  postgresql: "infra",
  vscode: "infra",
};

const keysToLoop: string[] = Object.keys(namesntype);

const colorsfromtype: { [key: string]: string } = {
  lang: "#9d44b5",
  lib: "#b5446e",
  infra: "#177e89",
};

function LangBloc() {

  return (
    <div>
      <div id="LangBloc">
        {keysToLoop.map((name, index) => (
          <Reveal
            animation={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            transition={{ duration: 1, delay: index/10 }}
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
