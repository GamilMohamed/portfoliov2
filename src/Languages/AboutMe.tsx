import WindowBloc from "../Box";
import { newanimation, getRandomNumber, animation } from "../Intro/IntroVars";
import Terminal from "../Terminal";
import { Reveal } from "../test";

function AboutMe() {
  return (
    <div id="AboutMe">
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
      <div id="ProfileNcv">
        <div id="ProfilePic">
          <WindowBloc theme="black" pad={"p-4"} title={"MY PICTURE"}>
            <>
              <img
                src="https://cdn.intra.42.fr/users/3aed91771be50eea96087d8d49c58d40/mgamil.jpg"
                alt="42"
              />
            </>
          </WindowBloc>
        </div>
          <div id="CV">
            <Reveal
              animation={animation}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <WindowBloc
                pad={"p-10"}
                theme="white"
                button={"READ"}
                title={"CV"}
                action={() => (location.href = "src/assets/resume.pdf")}
              >
                <>
                  <p className="textbigscreen">Click to see my CV</p>
                </>
              </WindowBloc>
            </Reveal>
          </div>
      </div>
    </div>
  );
}
export default AboutMe;
