import WindowBloc from "../Box";
import Terminal from "../Terminal";
import { Reveal } from "../test";
import FortyTwoSVG from "../assets/42paris.svg";
import arrow from "../assets/arrow.svg";
import pixelmoha from "../assets/gamil_pix.png";
import "./intro.css";
import RandomDiv from "./RandomDiv";
import { animation, newanimation, normal, getRandomNumber } from "./IntroVars";

function Intro() {
  return (
    <>
      {/*  BLOC NOIR 1    */}
      <div id="blackBloc">
        <Reveal
          animation={newanimation}
          transition={{
            duration: getRandomNumber(1),
            delay: getRandomNumber(1),
          }}
        >
          <WindowBloc
            zIndex={10}
            theme="black"
            button={"Click moi"}
            title={"PROFILE"}
          >
            <>
              <p>Hello world !!!</p>
              <p>Comment ca va ?</p>
            </>
          </WindowBloc>
        </Reveal>
      </div>

      {/*  BLOC BLEU 2    */}
      <RandomDiv />
      {/*  CV BLANC    */}
      <div id="CV">
        <Reveal
          animation={animation}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
          <WindowBloc
            zIndex={30}
            theme="white"
            button={"READ"}
            title={"CV"}
            action={() => alert("coucou")}
          >
            <>
              <p>CURRICULUM VITAE</p>
            </>
          </WindowBloc>
        </Reveal>
      </div>

      {/*  MOHA PIXEL    */}
      <div id="PixelMoha">
        <Reveal animation={{
		hidden: { opacity: 0, x: 0},
		visible: { opacity: 0.8, x: 0},
		}} transition={{ duration: 3, delay: 0.2 }}>
          <WindowBloc zIndex={10} theme="blue" pad={"p-4"} title={"MGAMIL"}>
            <>
              <img src={pixelmoha} alt="moha" />
            </>
          </WindowBloc>
        </Reveal>
      </div>

      {/*  MOHAMED    */}
      <div id="Mohamed">
        <Reveal
          animation={normal}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
        >
          <WindowBloc
            zIndex={10}
            pad={false}
            theme="black"
            title={"MY NAME IS"}
          >
            <>
              <p
                className="text-9xl"
                style={{ transform: "translate(0 , -7px)" }}
              >
                MOHAMED
              </p>
            </>
          </WindowBloc>
        </Reveal>
      </div>

      {/*  TERMINAL */}
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

      {/*  GAMIL    */}
      <div id="Gamilx">
        <Reveal
          animation={animation}
          transition={{
            duration: 0.4,
            delay: 1.2,
          }}
        >
          <div>
            <h1
              id="Gamil"
              className="text-white"
              style={{ fontSize: "15rem", zIndex: 30 }}
            >
              GAMIL
            </h1>
          </div>
        </Reveal>
      </div>

      {/*  42    */}
      <div id="FortyTwo">
        <Reveal animation={animation} transition={{ duration: 2, delay: 0 }}>
          <WindowBloc theme="black" pad={"p-4"} title={"MY SCHOOL"}>
            <>
              <p>Student at </p>
              <img width={"600px"} height="600px" src={FortyTwoSVG} alt="42" />
            </>
          </WindowBloc>
        </Reveal>
      </div>

      {/*  ARROW    */}
      <div id="Arrow">
        <img src={arrow} alt="arrow" />
      </div>
    </>
  );
}
export default Intro;
