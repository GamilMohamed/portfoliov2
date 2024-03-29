import React, { useRef } from "react";
import { useState } from "react";
import { themes } from "./Box";
const commands = ["ls", "clear", "echo"];

interface TerminalProps {
  theme: "blue" | "white" | "black";
  width: number;
  title: string;
}

const Terminal: React.FC<TerminalProps> = ({ theme, width, title }) => {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [history, setHistory] = useState<string[]>([]);

  const handleHistory = (input: string) => {
    setHistory((prev) => [...prev, input]);
    const cmd = input.slice(6).trim().split(" ")[0];
    const args = input.slice(6).trim().split(" ").slice(1);

    if (!commands.includes(cmd))
      setHistory((prev) => [...prev, "Shell> " + cmd + ": command not found"]);
    switch (cmd) {
      case "ls":
        setHistory((prev) => [...prev, "Shell> " + "README.md"]);
        break;
      case "clear":
        setHistory([]);
        break;
      case "echo":
        setHistory((prev) => [...prev, "Shell> " + args.join(" ")]);
        break;
    }

    console.log(history);
  };

  const [inputValue, setInputValue] = useState("Shell> ");

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
		{Array.from({ length: 7 - history.length }).map((_, index) => (
  			<br key={index} />
		))}
          {history.map((command, index) => (
            <p
              key={index}
            >
              {command}
            </p>
          ))}
          <input
            id="link"
            prefix="Moha> "
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                handleHistory(inputValue);
                setInputValue("Shell> ");
              }
            }}
            className="bg-black text-white w-full"
            style={{
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
