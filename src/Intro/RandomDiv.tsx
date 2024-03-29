import { useState, ReactNode } from "react";
import WindowBloc from "../Box";
import { Reveal } from "../test";
import { classanimation, getRandomNumber } from "./IntroVars";
  
function RandomDiv() {
	const [divList, setDivList] = useState<ReactNode[]>([]);
	const dumbmsgs = [
	  "You clicked me",
	  "I'm a div",
	  "I'm a window",
	  "I'm a bloc",
	  "I'm a box",
	  "I'm not a square",
	  "I'm a rectangle",
	];
	const handleNewDiv = (t: number, r: number) => {
		const val = [-1, 1];
		t += val[Math.floor(Math.random() * 2)];
		r += val[Math.floor(Math.random() * 2)];
		console.log("t is", t, "r is", r);
		setDivList((prevList) => [
		  ...prevList,
		  <div
			id="Golmon"
			style={{
			  position: "absolute",
			  top: val[Math.floor(Math.random() * 2)].toString() + "vh",
			  right: val[Math.floor(Math.random() * 2)].toString() + "vw",
			  width: "23vw",
			}}
		  >
			<Reveal
			  animation={classanimation}
			  transition={{ duration: 0.35, delay: 0 }}
			>
			  <WindowBloc
				zIndex={10}
				theme="blue"
				button={"Don't click me"}
				width={20 + val[Math.floor(Math.random() * 2)]}
				title={"PROFILE"}
				action={() => handleNewDiv(t, r)}
				key={divList.length}
				close={true}
			  >
				{dumbmsgs[Math.floor(Math.random() * dumbmsgs.length)]}
			  </WindowBloc>
			</Reveal>
		  </div>,
		]);
	  };

	return (
		<div id="Welcome">
		<Reveal
		  animation={classanimation}
		  transition={{
			duration: getRandomNumber(1),
			delay: getRandomNumber(1),
		  }}
		>
		  <WindowBloc
			zIndex={20}
			theme="blue"
			button={"OK"}
			width={23}
			title={"WELCOME"}
			action={() => handleNewDiv(18, 5)}
		  >
			<>
			  <p>Welcome to my portfolio !</p>
			  <p>Scroll to see my job!</p>
			</>
		  </WindowBloc>
		</Reveal>
		{divList.map((div, index) => (
		  <div key={index}>{div}</div>
		))}
	  </div>
	);
}

export default RandomDiv;