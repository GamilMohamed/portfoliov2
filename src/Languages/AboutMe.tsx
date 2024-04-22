import WindowBloc from "../Box";
import { newanimation, getRandomNumber, animation } from "../Intro/IntroVars";
import Terminal from "../Terminal";
import { Reveal } from "../test";
import "./aboutme_phone.css";

function AboutMe() {
  return (
    <>
      <div id="AboutMe" style={{ position: "relative" }}>
        <h1 className="section-title text-center text-white putain absolute top-0">
          About Me
        </h1>
        {/* <h1 style={{position: "relative", top: "0", left: "50%", margin: "auto", color: "red"}}>About Me</h1> */}
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
                // action={() => (location.href = "src/assets/resume.pdf")}
                href="assets/resume.pdf"
              >
                <>
                  <p className="textbigscreen">Click to see my CV</p>
                </>
              </WindowBloc>
            </Reveal>
          </div>
        <div id="Me">
          <p>
            I am a Full Stack Developer with a focus on Front End Development.
          </p>
          <p>
            I am passionate about creating beautiful, user-friendly websites and
          </p>
          <p>
            applications. I have experience with HTML, CSS, JavaScript, React,
          </p>
          <p>
            Node.js, Express, MongoDB, and more. I am always looking for new
          </p>
          <p>challenges and opportunities to grow as a developer.</p>
        </div>
      </div>
        </div>
    </>
  );
}
export default AboutMe;
