import React, { useRef } from "react";
import { useState } from "react";
import { themes } from "./Box";
interface TerminalProps {
  theme: "blue" | "white" | "black";
  width: number;
  title: string;
}

const commands: any = {
ls: "list files",
clear: "clear screen",
echo: "print text",
touch: "create file",
rm: "remove file",
mv: "move file",
cp: "copy file",
cat: "print file",
pwd: "print working directory",
cd: "change directory",
mkdir: "make directory",
rmdir: "remove directory",
};

const Terminal: React.FC<TerminalProps> = ({ theme, width, title }) => {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [history, setHistory] = useState<string[]>([]);
  const [myCommands, setCommands] = useState<string[]>([]);
  const [count, setCount] = useState<number>(1);
  const [myFiles, setFiles] = useState<string[]>([]);

  const handleHistory = (input: string) => {
    if (!input || input === "") {
      setHistory((prev) => [...prev, "Shell> "].slice(-5));
      return;
    }
    setHistory((prev) => [...prev, "Shell> " + input].slice(-5));
    const cmd = input.trim().split(" ")[0];
    setCommands((prev) => [...prev, cmd].slice(-5));
    const args = input.trim().split(" ").slice(1);

    switch (cmd) {
      case "ls":
        setHistory((prev) =>
          [
            ...prev,
            "Shell> " + myFiles.map((file) => " " + file).join(" "),
          ].slice(-5)
        );
        break;
      case "clear":
        setHistory([]);
        break;
      case "echo":
        setHistory((prev) => [...prev, "Shell> " + args.join(" ")].slice(-5));
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
      case "mv":
        setFiles((prev) =>
          prev.map((file) => (file === args[0] ? args[1] : file))
        );
        break;
      case "cp":
        setFiles((prev) => [...prev, args[1]]);
        break;
      case "cat":
        setHistory((prev) =>
          [...prev, "Shell> " + myFiles.find((file) => file === args[0])].slice(
            -5
          )
        );
        break;
      case "pwd":
        setHistory((prev) => [...prev, "Shell> " + "/Moha"].slice(-5));
        break;
      case "cd":
        setHistory((prev) => [...prev, "Shell> " + "Moha"].slice(-5));
        break;
      case "mkdir":
        setFiles((prev) => [...prev, args[0]]);
        break;
      case "rmdir":
        setFiles((prev) => prev.filter((file) => file !== args[0]));
        break;
      case "help":
        setHistory((prev) =>
          [
            ...prev,
            "Shell> " +
              "ls: list files, clear: clear screen, echo: print text, touch: create file, rm: remove file, mv: move file, cp: copy file, cat: print file, pwd: print working directory, cd: change directory, mkdir: make directory, rmdir: remove directory",
          ].slice(-5)
        );
        break;
	case "man":
		setHistory((prev) =>
		  [
			...prev,
			"Shell> " + commands[args[0]] || "no man page",
		  ].slice(-5)
		);
		break;
      default:
        setHistory((prev) =>
          [...prev, "Shell> " + cmd + ": command not found"].slice(-5)
        );
    }

    console.log(history);
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  console.log("theme", theme);
  const { primary, bg, bgs, border, secondary, svgcolor } = themes[theme];
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      id="MargoBox"
      className={`${bg} p-2`}
      style={{
        width: `${width}vw`,
        transition: "all 0.5s",
        transform: "rotate(90deg, 0)",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className={`text-3xl px-2 ${bgs} ${primary} border ${border} border-b-8 `}
        onClick={() => setButtonVisible(!buttonVisible)}
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
        >
          {/* MINUS */}
          {(buttonVisible && (
            <line x1="5" y1="8" x2="15" y2="8" stroke={svgcolor} />
          )) || <rect height="10" width="10" y="3" x="5" />}
        </svg>
      </div>
      <div
        style={{
          flexDirection: "column",
          position: "relative",
          display: buttonVisible ? "flex" : "none",
          justifyContent: "flex-end",
        }}
        className={`${bg} ${secondary} border ${border} border-b-8 border-l-8 border-r-8 text-2xl`}
      >
        <>
          {Array.from({ length: 5 - history.length }).map((_, index) => (
            <br key={index} />
          ))}
          {history.map((command, index) => (
            <p key={index}>{command}</p>
          ))}
          <span
            style={{
              color: "white",
            }}
          >
            Shell&gt;
          </span>
          <input
            id="link"
            prefix="Moha> "
            value={inputValue}
            onChange={handleInputChange}
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
            className="bg-black text-white w-full"
            style={{
              position: "absolute",
              left: "68px",
              width: "calc(100% - 68px)",
              outline: "none",
              border: "none",
              textDecoration: "none",
            }}
          />
        </>
      </div>
    </div>
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
