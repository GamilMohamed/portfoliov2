// import "./projets.css";
import "./test.css";
import cub3d from "../assets/projects/cub3d.mp4";
import minishell from "../assets/projects/shell.gif";
import push_swap from "../assets/projects/pushswap.gif";
import ps42 from "../assets/projects/ps42.mp4";
import { Reveal } from "../test";
import styled from "styled-components";
import { ButtonBloc } from "../Box";
import WindowBloc from "../Box";
// import styled from "styled-components";
// import { Reveal, Reveal2 } from "../test";
// import { motion } from "framer-motion";
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
  oracle: "oracle-original",
};

class Projet {
  name: string;
  description: string[];
  image: string | undefined;
  video: string | undefined;
  code: string[];
  color: "white" | "red" | "blue" | "black";
  render: boolean | undefined;
  constructor(
    name: string,
    description: string[],
    image: string | undefined,
    video: string | undefined,
    code: string[],
    color: "white" | "red" | "blue" | "black",
    render?: boolean
  ) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.video = video;
    this.code = code;
    this.color = color;
    this.render = render;
  }
}

const projets: Projet[] = [
  // new Projet(
  //   "Drawing Game",
  //   [
  //     "Drawing Game is a   that aims to create a simple drawing game using websockets.",
  //     "This project was created using React, NodeJS, and websockets.",
  //     "The game allows multiple users to draw on the same canvas in real-time.",
  //   ],
  //   undefined,
  //   ps42,
  //   ["express", "javascript", "react", "typescript", "vscode", "git"],
  //   "black"
  // ),

  new Projet(
    "PS42",
    [
      "PS42 is a project that aims to create a simple website with an <mark>authentication</mark> system, a <mark>chat</mark> system, <mark>games</mark> and <mark>friends</mark> system.",
    ],
    undefined,
    ps42,
    ["react", "typescript", "vscode", "docker", "postgresql", "nestjs", "git"],
    "black"
  ),
  new Projet(
    "Drawing Game",
    [
      "Drawing Game is a game where someones draws a word and the others have to guess it.",
      "<mark>Websockets</mark> are used to communicate between the <mark>players</mark>. Server is coded in <mark>NodeJS</mark> with <mark>ExpressJS</mark> and the client in <mark>React</mark>.",
    ],
    undefined,
    undefined,
    ["react", "typescript", "vscode", "oracle", "express", "nodejs", "git"],
    "blue"
  ),
  new Projet(
    "Shell Interpreter",
    [
      "The objective of this project is for you to create a simple <mark>shell</mark>. Learnt a lot about <mark>file descriptors</mark>, process and bash. Coded in C.",
    ],
    minishell,
    undefined,
    ["c", "vscode", "bash"],
    "black"
  ),

  new Projet(
    "First Player Viewer",
    [
      "Interesting project where I learnt how <mark>raycasting</mark> works and how to render a <mark>3D</mark> environment with a 2D map. Coded in <mark>C</mark> with the <mark>minilibx</mark> library.",
    ],
    undefined,
    cub3d,
    ["c", "vscode"],
    "black"
  ),

  new Projet(
    "Sorting Algorithm",
    [
      "A sorting algorithm that operates on two stacks with limited operations with a visualizer to see how it works. Coded in C with the Ncurse library.",
    ],
    push_swap,
    undefined,
    ["c", "vscode"],
    "black"
  ),
];
// const fourrandomcolors = [
//   "rgb(187, 216, 179, 0.5)",
//   "rgb(243, 182, 31, 0.5)",
//   "rgb(162, 159, 21, 0.5)",
//   "rgb(81, 13, 10, 0.5)",
// ];

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
  oracle: "infra",
};

// const Description = styled.div<{ $align: string }>`
// text-align: ${(props) => props.$align};
// const Description = styled.div`
//   text-align: left;
//   // width: 50%;
//   p {
//     font-family: "Roboto", sans-serif;
//   }
// `;

// const Row = styled.div<{ $index: number }>`
//   &:hover {
//     // transition: background-color 2s ease-in-out;
//     // background-color: ${(props) => fourrandomcolors[props.$index % 4]};
//   }
//   display: flex;
//   justify-content: space-between;
//   // background-color: white;
//   // flex-direction: ${(props) => (props.$index % 2 ? "row-reverse" : "row")};
// `;

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

// import { Tilt } from 'react-tilt'
import { Tilt } from "@jdion/tilt-react";
import { useState } from "react";


// import WindowBloc from "../Box";

// const defaultOptions = {
// 	// reverse:        false,  // reverse the tilt direction
// 	// max:            15,     // max tilt rotation (degrees)
// 	// perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
// 	// scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
// 	// speed:          1000,   // Speed of the enter/exit transition
// 	// transition:     true,   // Set a transition on enter/exit.
// 	// axis:           null,   // What axis should be disabled. Can be X or Y.
// 	// reset:          true,    // If the tilt effect has to be reset on exit.
// 	// easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
// }

function Projets() {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const showMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 4);
  };

  return (
    <>
      {projets.slice(0, visibleProjects).map((projet, index) => (
        // {/* WHOLE PROJECT */}
        <div
          key={index}
          className="flex flex-wrap mt-6 row"
          // style={{ backgroundColor: fourrandomcolors[index % 4] }}
        >
          {/* DESCRIPTION */}
          <div className=" lg:w-1/3 lg:pr-4 lg:pl-4 sm:w-full sm:pr-4 sm:pl-4">
            <div className="project-wrapper__text load-hidden">
              <h3 className="project-wrapper__text-title">{projet.name}</h3>
              <div>
                <span className="mb-4">
                  {projet.description.map((desc, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{ __html: desc }}
                    ></p>
                  ))}
                </span>
              </div>
              {/* CODE */}
              <div className="code">
                {projet.code.map((name, index) => (
                  <Reveal
                    key={index}
                    animation={{
                      hidden: { scale: 0 },
                      visible: { scale: 1 },
                    }}
                    width="fit-content"
                    transition={{ duration: 1, delay: index / 10 }}
                  >
                    <Logo id="mywoman" $bg={colorsfromtype[namesntype[name]]}>
                      <i className={`devicon-${nametoicon[name]}`}></i>
                    </Logo>
                  </Reveal>
                ))}
              </div>
              {/* <a
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
              </a> */}
            </div>
          </div>
          {/* VIDEO / PHOTO */}
          <div className=" lg:w-2/3 lg:pr-4 lg:pl-4 sm:w-full sm:pr-4 sm:pl-4">
            <div className="project-wrapper__image">
              <a rel="noreferrer" href="#!" target="_blank">
                <Tilt>
                  <div
                    data-tilt
                    data-tilt-max="4"
                    data-tilt-glare="true"
                    data-tilt-max-glare="0.5"
                    className="thumbnail rounded js-tilt"
                  >
                    <WindowBloc
                      title={projet.name}
                      theme={projet.color}
                      pad={"p-1"}
                    >
                      {(projet.video && (
                        <video autoPlay loop muted playsInline>
                          <source src={projet.video} type="video/mp4" />
                        </video>
                      )) ||
                        (projet.image && (
                          <img
                            alt="Project Image"
                            className="max-w-full h-auto"
                            src={projet.image}
                          />
                        )) || (
                          <div
                            className="flex justify-center items-center text-2xl"
                            id="videx"
                          >
                            <h1>NO RENDER YET, COMING SOON ENOUGH</h1>
                          </div>
                        )}
                    </WindowBloc>
                  </div>
                </Tilt>
              </a>
            </div>
          </div>
        </div>
      ))}
      {projets.length > visibleProjects && (

        <div className="showMore">
        <ButtonBloc
          $main={"rgb(249, 246, 238)"}
          $secondary={"#131417"}
          onClick={showMoreProjects}
          className="py-2 px-6"
        >
          Show More
        </ButtonBloc>
          {/* // <button onClick={showMoreProjects}>Show More</button> */}
        </div>
      )}
    </>
  );
}
// {/* </Reveal2> */}
export default Projets;
