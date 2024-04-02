import styled from "styled-components";
import { Reveal } from "../test";
import { motion } from "framer-motion";

const nametoicon: { [key: string]: string } = { 
  "react":"react-plain",
  "django":"django-plain",
  "nestjs":"nestjs-plain",
  "c":"c-plain",
  "python":"python-plain",
  "typescript":"typescript-plain",
  "postgresql":"postgresql-plain",
  "git":"git-plain",
  "bash":"bash-plain",
  "express":"express-original",
  "docker":"docker-plain",
  "vscode":"vscode-plain",
  "nodejs":"nodejs-plain",
};

const Logo = styled.div<{ $bg: string }>`
  background-color: ${(props) => props.$bg};
`;

const namesntype: { [key: string]: string } = {
  "react": "lib",
  "django": "lib",
  "nestjs": "lib",
  "c": "lang",
  "python": "lang",
  "typescript": "lang",
  "postgresql": "infra",
  "git": "infra",
  "bash": "infra",
  "express": "lib",
  "docker": "infra",
  "vscode": "infra",
  "nodejs": "lib",
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
              <i className={`devicon-${nametoicon[name]}`}></i>
              <p>{name}</p>
            </Logo>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default LangBloc;
