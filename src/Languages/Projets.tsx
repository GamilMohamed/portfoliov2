// import "./projets.css";
import "./test.css";
import cub3d from "../assets/projects/cub3d.mp4";
import minishell from "../assets/projects/shell.gif";
import push_swap from "../assets/projects/pushswap.gif";
import ps42 from "../assets/projects/ps42.mp4";
import styled from "styled-components";
import { Reveal, Reveal2 } from "../test";
import { motion } from "framer-motion";
import WindowBloc from "../Box";
// import { useEffect } from "react";

const nametoicon: { [key: string]: string } = {
  react: "react-plain",
  django: "django-plain",
  nestjs: "nestjs-plain",
  c: "c-plain",
  python: "python-plain",
  typescript: "typescript-plain",
  postgresql: "postgresql-plain",
  git: "git-plain",
  bash: "bash-plain",
  express: "express-original",
  docker: "docker-plain",
  vscode: "vscode-plain",
  nodejs: "nodejs-plain",
  javascript: "javascript-plain",
  socketio: "socketio-original",
};

class Projet {
  name: string;
  description: string[];
  image: string | undefined;
  video: string | undefined;
  code: string[];
  color: "white" | "red" | "blue" | "black";
  constructor(
    name: string,
    description: string[],
    image: string | undefined,
    video: string | undefined,
    code: string[],
    color: "white" | "red" | "blue" | "black"
  ) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.video = video;
    this.code = code;
    this.color = color;
  }
}

const projets: Projet[] = [
  new Projet(
    "Drawing Game",
    [
      "Drawing Game is a   that aims to create a simple drawing game using websockets.",
      "This project was created using React, NodeJS, and websockets.",
      "The game allows multiple users to draw on the same canvas in real-time.",
    ],
    undefined,
    ps42,
    ["express", "javascript", "react", "typescript", "vscode", "git"],
    "black"
  ),

  new Projet(
    "Minishell",
    ["Minishell is a project that aims to create a simple shell."],
    minishell,
    undefined,
    ["c", "vscode", "bash"],
    "black"
  ),

  new Projet(
    "PS42",
    [
      "PS42 is a project that aims to create a 42 school project management tool.",
    ],
    undefined,
    ps42,
    ["react", "typescript", "vscode", "docker", "postgresql", "nestjs", "git"],
    "blue"
  ),

  new Projet(
    "Cub3D",
    [
      "Cub3d is a project that aims to create a 3D game engine from scratch using raycasting.",
    ],
    undefined,
    cub3d,
    ["c", "vscode"],
    "red"
  ),

  new Projet(
    "Push Swap",
    [
      "Push_swap is a project that aims to sort a list of integers using two stacks.",
    ],
    push_swap,
    undefined,
    ["c", "vscode"],
    "black"
  ),
];
const fourrandomcolors = [
  "rgb(187, 216, 179, 0.5)",
  "rgb(243, 182, 31, 0.5)",
  "rgb(162, 159, 21, 0.5)",
  "rgb(81, 13, 10, 0.5)",
];

const colorsfromtype: { [key: string]: string } = {
  lang: "#2edaaa",
  lib: "#f3a248",
  infra: "#1e35ef",
};

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
  express: "lib",
  docker: "infra",
  vscode: "infra",
  nodejs: "lib",
  javascript: "lang",
  socketio: "lib",
};

// const Description = styled.div<{ $align: string }>`
// text-align: ${(props) => props.$align};
const Description = styled.div`
  text-align: left;
  // width: 50%;
  p {
    font-family: "Roboto", sans-serif;
  }
`;

const Row = styled.div<{ $index: number }>`
  &:hover {
    // transition: background-color 2s ease-in-out;
    // background-color: ${(props) => fourrandomcolors[props.$index % 4]};
  }
  display: flex;
  justify-content: space-between;
  // background-color: white;
  // flex-direction: ${(props) => (props.$index % 2 ? "row-reverse" : "row")};
`;

//   <Reveal2
//   key={index}
//   bgcolor={fourrandomcolors[index % 4]}
//   // left={index % 2 ? true : false}
//   animation={{
//     hidden: {
//       x: -100 * ((index % 2) - 1 + (index % 2)),
//       opacity: 0,
//     },
//     visible: { x: 0, opacity: 1 },
//   }}
//   transition={{
//     duration: 1,
//     delay: 0.1,
//   }}
// >
function Projets() {
  return (
    <>
      {projets.map((projet, index) => (
        // {/* WHOLE PROJECT */}
        <div
          className="flex flex-wrap mt-6"
          style={{ backgroundColor: fourrandomcolors[index % 4] }}
        >
          {/* DESCRIPTION */}
          <div className=" lg:w-1/3 lg:pr-4 lg:pl-4 sm:w-full sm:pr-4 sm:pl-4">
            <div className="project-wrapper__text load-hidden">
              <h3 className="project-wrapper__text-title">{projet.name}</h3>
              <div>
                <p className="mb-4">
                  {projet.description.map((desc) => (
                    <>{desc}</>
                  ))}
                </p>
              </div>
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn cta-btn--hero"
                href="#!"
              >
                See Live
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn text-color-main"
                href="#!"
              >
                Source Code
              </a>
            </div>
          </div>
          {/* VIDEO / PHOTO */}
          <div className=" lg:w-2/3 lg:pr-4 lg:pl-4 sm:w-full sm:pr-4 sm:pl-4">
            <div className="project-wrapper__image load-hidden">
              <a rel="noreferrer" href="#!" target="_blank">
                <div
                  data-tilt
                  data-tilt-max="4"
                  data-tilt-glare="true"
                  data-tilt-max-glare="0.5"
                  className="thumbnail rounded js-tilt"
                >
                  {projet.video ? (
                    <video autoPlay loop muted playsInline>
                      <source src={projet.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      alt="Project Image"
                      className="max-w-full h-auto"
                      src={projet.image}
                    />
                  )}
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
// {/* </Reveal2> */}
export default Projets;
