import React from "react";
import { useState } from "react";
import { themes } from "./Box";
import styled from "styled-components";
interface TerminalProps {
  theme: "blue" | "white" | "black";
  width: number;
  title: string;
}

const BigBloc = styled.div<{ $width: string; $primary: string }>`
  background-color: ${(props) => props.$primary};
  width: ${(props) => props.$width};
  transition: all 0.5s;
  transform: rotate(90deg, 0);
`;

const TitleBloc = styled.div<{ $primary: string; $secondary: string }>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.$secondary};
  color: ${(props) => props.$primary};
  border-bottom-width: 8px;
  border-color: ${(props) => props.$secondary};
`;

const DataBloc = styled.div<{ $primary: string; $secondary: string }>`
  background-color: ${(props) => props.$primary};
  color: ${(props) => props.$secondary};
  border-bottom-width: 8px;
  border-left-width: 8px;
  border-right-width: 8px;
  border-color: ${(props) => props.$secondary};
`;

const commands: { [key: string]: string } = {
  ls: "list files",
  clear: "clear screen",
  echo: "print text",
  touch: "create file",
  rm: "remove file",
  help: "get help",
  whoami: "get user",
  man: "get manual page",
};

const presentation: string[] = [
  ">>> Hi ! I'm Moha, a fullstack developer.",
  ">>> I'm a student at 42 Paris and searching for an internship.",
  ">>> I'm a daily coder of TypeScript and love to automate things using Python.",
  ">>> AI, Web, Mobile, I'm ready to work on any project because I love to take on new challenges.",
  ">>> Scroll down to see my projects and contact me.",
  ">>> ",
];

const prompt = "Shell> ";

const Terminal: React.FC<TerminalProps> = ({ theme, width, title }) => {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [history, setHistory] = useState<string[]>(presentation);
  const [myCommands, setCommands] = useState<string[]>([]);
  const [count, setCount] = useState<number>(1);
  const [myFiles, setFiles] = useState<string[]>([]);

  const handleHistory = (input: string) => {
    if (!input || input === "") {
      setHistory((prev) => [...prev, prompt]);
      return;
    }
    setHistory((prev) => [...prev, prompt + input]);
    const cmd = input.trim().split(" ")[0];
    setCommands((prev) => [...prev, cmd]);
    const args = input.trim().split(" ").slice(1);

    switch (cmd) {
      case "ls":
        setHistory((prev) => [
          ...prev,
          myFiles.map((file) => " " + file).join(" "),
        ]);
        break;
      case "clear":
        setHistory([]);
        break;
      case "echo":
        setHistory((prev) => [...prev, args.join(" ")]);
        break;
      case "touch":
        setFiles((prev) => [
          ...prev,
          ...args.filter((file) => !prev.includes(file)),
        ]);
        break;
      case "rm":
        setFiles((prev) => prev.filter((file) => file !== args[0]));
        break;
      case "help":
        setHistory((prev) => [
          ...prev,
          prompt + "ls, clear, whoami, echo, touch, rm, man",
        ]);
        break;
      case "whoami":
        setHistory(presentation);
        break;
      case "man":
        setHistory((prev) => [
          ...prev,
          prompt + commands[args[0]] || "no man page",
        ]);
        break;
      default:
        setHistory((prev) => [...prev, prompt + cmd + ": command not found"]);
    }
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const { main, second } = themes[theme];
  // if (bh) return (
  //   );
  return (
    <>
      <BigBloc
        $primary={main}
        $width={width + "vw"}
        id="MargoBox"
        className={`p-2`}
      >
        <TitleBloc
          $primary={main}
          $secondary={second}
          className={`text-3xl px-2`}
          onClick={() => setButtonVisible(!buttonVisible)}
        >
          {title}
          <svg
            width="35px"
            style={{ transform: "translate(0 , 2px)" }}
            height="35px"
            viewBox="0 0 16 16"
            fill="none"
            stroke={main}
            strokeWidth="1"
          >
            {/* MINUS */}
            {(buttonVisible && (
              <line x1="5" y1="8" x2="15" y2="8" stroke={main} />
            )) || <rect height="10" width="10" y="3" x="5" />}
          </svg>
        </TitleBloc>
        <DataBloc
          $primary={main}
          $secondary={second}
          style={{
            flexDirection: "column",
            position: "relative",
            display: buttonVisible ? "flex" : "none",
            justifyContent: "flex-end",
            // maxHeight: "8vh",
            height: "20rem",
            overflowX: "hidden",
          }}
          className={`text-2xl`}
        >
          <>
            {history.map((command, index) => (
              <p key={index}>{command}</p>
            ))}
            <span
              style={{
                backgroundColor: main,
              }}
            >
              Shell&gt;
            </span>
            <input
              id="link"
              value={inputValue}
              onChange={handleInputChange}
              className={`w-full`}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter") {
                  handleHistory(inputValue);
                  setInputValue("");
                  setCount(1);
                }
                if (e.key === "ArrowUp" && history.length > 0) {
                  setCount(count + 1);
                  setInputValue(myCommands[myCommands.length - count]);
                }
                if (e.key === "ArrowDown" && history.length > 0) {
                  setCount(count - 1);
                  setInputValue(myCommands[myCommands.length - count - 1]);
                }
              }}
              style={{
                height: "2rem",
                position: "absolute",
                left: "68px",
                width: "calc(100% - 68px)",
                outline: "none",
                border: "none",
                textDecoration: "none",
                color: second,
                backgroundColor: main,
              }}
            />
          </>
        </DataBloc>
      </BigBloc>
    </>
  );
};

export default Terminal;

// white F4F4F4
// black 000000

/*

5 ABC
4 DEF
3 GHI
2 JKL
1 MNO


*/
