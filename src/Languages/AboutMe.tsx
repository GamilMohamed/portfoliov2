import WindowBloc from "../Box";
import { newanimation, getRandomNumber } from "../Intro/IntroVars";
import Terminal from "../Terminal";
import { Reveal } from "../test";

function AboutMe() {
  return (
	<div 
    id="AboutMe" >
		<div id="Terminal">
        <Reveal
          animation={newanimation}
          transition={{
            duration: getRandomNumber(1),
            delay: getRandomNumber(1),
          }}
        >
          <Terminal theme="black" width={35} title={"TERMINAL"}></Terminal>
        </Reveal>
      </div>
	  <div 
	 id="ProfilePic" >
        {/* <Reveal
          animation={{
			hidden: { rotateZ: 360 },
			visible: { rotateZ: 0 },
		  
		  }}
          transition={{
            duration: getRandomNumber(1),
            delay: getRandomNumber(1),
          }}
        > */}
		<WindowBloc theme="black" pad={"p-4"} title={"MY PICTURE"}>
			<>
				<img src="https://cdn.intra.42.fr/users/3aed91771be50eea96087d8d49c58d40/mgamil.jpg" alt="42" />
			</>
		</WindowBloc>
        {/* </Reveal> */}

	  </div>
	</div>
  );
}
export default AboutMe;