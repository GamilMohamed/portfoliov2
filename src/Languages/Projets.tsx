import "./projets.css";
import cub3d from "../assets/projects/cub3d.mp4";
import minishell from "../assets/projects/shell.gif";
import push_swap from "../assets/projects/pushswap.gif";
import ps42 from "../assets/projects/ps42.mp4";
import styled from "styled-components";
import { Reveal, Reveal2 } from "../test";
import { motion } from "framer-motion";
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
  constructor(
    name: string,
    description:  string[],
    image: string | undefined,
    video: string | undefined,
    code: string[]
  ) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.video = video;
    this.code = code;
  }
}

const projets: Projet[] = [
  new Projet(
    "Drawing Game",
    ["Drawing Game is a project that aims to create a simple drawing game using websockets.", "This project was created using React, NodeJS, and websockets.", "The game allows multiple users to draw on the same canvas in real-time."],
    undefined,
    ps42,
    ["express", "javascript", "react", "typescript", "vscode", "git"]
  ),

  new Projet(
    "Minishell",
    ["Minishell is a project that aims to create a simple shell."],
    minishell,
    undefined,
    ["c", "vscode", "bash"]
  ),

  new Projet(
    "PS42",
    ["PS42 is a project that aims to create a 42 school project management tool."],
    undefined,
    ps42,
    ["react", "typescript", "vscode", "docker", "postgresql", "nestjs", "git"]
  ),

  new Projet(
    "Cub3D",
    ["Cub3d is a project that aims to create a 3D game engine from scratch using raycasting."],
    undefined,
    cub3d,
    ["c", "vscode"]
  ),

  new Projet(
    "Push Swap",
    ["Push_swap is a project that aims to sort a list of integers using two stacks."],
    push_swap,
    undefined,
    ["c", "vscode"]
  ),
];
const fourrandomcolors = ["rgb(187, 216, 179, 0.5)", "rgb(243, 182, 31, 0.5)", "rgb(162, 159, 21, 0.5)", "rgb(81, 13, 10, 0.5)"];


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

const Description = styled.div<{ $align: string }>`
  text-align: ${(props) => props.$align};
`;

const Row = styled.div<{ $index: number }>`
  flex-direction: ${(props) => (props.$index % 2 ? "row-reverse" : "row")};
  // background-color: ${(props) => fourrandomcolors[props.$index % 4]};
`;

function Projets() {

  return (
    <>
      <div className="projets">
        {projets.map((projet, index) => {
          return (
            <Reveal2
              key={index}
              bgcolor={fourrandomcolors[index % 4]}
              left={index % 2 ? true : false}
              animation={{
                hidden: { x: -100 * (index % 2 - 1 + index % 2), opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }} transition={{
                duration: 1,
                delay: 0.1
              
              }}>

            <Row key={index} className="projet" $index={index}>
              <Description
                className="description"
                $align={index % 2 ? "end" : "start"}
              >
                <motion.h2
                  initial={{ x: -100 * (index % 2 - 1 + index % 2), opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  {projet.name}
                </motion.h2>
                  {/* <p>{projet.description}</p> */}
                {projet.description && typeof projet.description === "string" ? (
                  <p>{projet.description}</p>
                ) : (
                  projet.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))
                )}
              {projet.code && (
                  <div
                    className="code"
                    style={{ flexDirection: index % 2 ? "row-reverse" : "row" }}
                  >
                    {projet.code.map((name, index) => (
                      <Reveal
                        key={index}
                        animation={{
                          hidden: { scale: 0 },
                          visible: { scale: 1 },
                        }}
                        transition={{ duration: 1, delay: index / 10 }}
                      >
                        <Logo
                          id="mywoman"
                          $bg={colorsfromtype[namesntype[name]]}
                        >
                          <i className={`devicon-${nametoicon[name]}`}></i>
                        </Logo>
                      </Reveal>
                    ))}
                  </div>
                )}

                <div className="flex justify-around mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ border: "none" }}
                  >
                  <button>See live</button >
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ border: "none" }}
                  >
                  <button>Source Code</button >
                </motion.button>
                </div>
              </Description>
              <div className="media">
                {projet.video ? (
                  <video autoPlay  controls>
                    <source  src={projet.video} type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <img src={projet.image} alt={projet.name} />
                  </>
                )}
              </div>
              {/* </motion.div> */}
            </Row>
            </Reveal2>
          );
        })}
      </div>
    </>
  );
}
export default Projets;
