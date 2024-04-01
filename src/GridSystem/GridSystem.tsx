import "./gridsystem.css";

import WindowBloc from "../Box";
import { Reveal } from "../test";
import FortyTwoSVG from "../assets/42paris.svg";
import arrow from "../assets/arrow.svg";
import pixelmoha from "../assets/gamil_pix.png";
// import "../Intro/intro.css";
import RandomDiv from "../Intro/RandomDiv";
import { animation, newanimation, getRandomNumber } from "../Intro/IntroVars";

function GridSystem() {
  return (
    <>
      <div
        id="bigboite"
        className="
        lg:grid lg:grid-cols-7 lg:grid-rows-5
        md:grid md:grid-cols-3 md:grid-rows-5
        "
      >
        <div
          id="boite"
          style={{ backgroundColor: "pink" }}
          className=" one
          col-start-3
          "
        >
          <div id="CV">
            <Reveal
              animation={animation}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <WindowBloc
                pad={"p-4"}
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
        <div
          id="boite"
          className="
          two
          col-span-2 row-span-2 col-start-4 lg:bg-cyan-400 md:bg-red-500"
        >
          <div id="FortyTwo">
            <Reveal
              animation={animation}
              transition={{ duration: 2, delay: 0 }}
            >
              <WindowBloc theme="black" pad={"p-4"} title={"MY SCHOOL"}>
                <>
                  <p>Student at</p>
                  <img
                    width={"600px"}
                    height="600px"
                    src={FortyTwoSVG}
                    alt="42"
                  />
                </>
              </WindowBloc>
            </Reveal>
          </div>
        </div>
        <div
          id="boite"
          style={{ backgroundColor: "green" }}
          className="col-span-3 row-span-2 col-start-3 row-start-3"
        >
          <div id="Gamilx">
            <Reveal
              animation={animation}
              transition={{
                duration: 0.4,
                delay: 1.2,
              }}
            >
              <div>
                <h1 id="Gamil">GAMIL</h1>
              </div>
            </Reveal>
          </div>
          <div id="Mohamed">
            <Reveal
              animation={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{
                duration: 0.3,
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
                    id="MohamedText"
                    className="px-6"
                    style={{ transform: "translate(0 , -7px)" }}
                  >
                    Mohamed
                  </p>
                </>
              </WindowBloc>
            </Reveal>
          </div>
        </div>
        <div
          id="boite"
          style={{ backgroundColor: "magenta" }}
          className="row-span-2 col-start-2 row-start-3"
        >
          <div id="PixelMoha">
            <Reveal
              animation={{
                hidden: { opacity: 0, x: 0 },
                visible: { opacity: 0.8, x: 0 },
              }}
              transition={{ duration: 3, delay: 0.2 }}
            >
              <WindowBloc zIndex={10} theme="blue" pad={"p-4"} title={"MOI"}>
                <>
                  <img src={pixelmoha} alt="moha" />
                </>
              </WindowBloc>
            </Reveal>
          </div>
        </div>
        <div
          id="boite"
          style={{ backgroundColor: "yellow" }}
          className="col-span-2 col-start-6 row-start-5"
        >
          <div id="ProfilePic">
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
                <img
                  src="https://cdn.intra.42.fr/users/3aed91771be50eea96087d8d49c58d40/mgamil.jpg"
                  alt="42"
                />
              </>
            </WindowBloc>
            {/* </Reveal> */}
          </div>
        </div>
        <div
          id="boite"
          style={{ backgroundColor: "white" }}
          className="col-span-2 col-start-6 row-start-2"
        >
          <RandomDiv />
        </div>
        <div
          id="boite"
          style={{ backgroundColor: "brown" }}
          className="col-start-1 row-start-5"
        >
          <div id="blackBloc">
            <Reveal
              animation={newanimation}
              transition={{
                duration: getRandomNumber(1),
                delay: getRandomNumber(1),
              }}
            >
              <WindowBloc
                theme="white"
                button={"Click moi"}
                title={"PROFILE"}
                // action={() => alert("coucou")}
              >
                <>
                  <p>Hello world !!!</p>
                  <p>Comment ca va ?</p>
                </>
              </WindowBloc>
            </Reveal>
          </div>
        </div>
        <div
          id="boite"
          style={{ backgroundColor: "orange" }}
          className="col-start-4 row-start-5"
        >
          <div id="Arrow">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </>



);
}


{/* <div style={{height:"100vh", width:"100vw"}} className="grid grid-cols-10 grid-rows-8 gap-0">
    <div  style={{backgroundColor: "red"}} className="col-span-2 col-start-4 row-start-2">1</div>
    <div  style={{backgroundColor: "blue"}} className="col-span-2 row-span-3 col-start-7 row-start-1">2</div>
    <div  style={{backgroundColor: "green"}} className="col-span-3 row-span-3 col-start-2 row-start-3">3</div>
    <div  style={{backgroundColor: "pink"}} className="col-span-2 row-span-2 row-start-6">4</div>
    <div  style={{backgroundColor: "cyan"}} className="col-span-2 row-span-2 col-start-8 row-start-7">5</div>
</div> */}
export default GridSystem;

// {/* <div id="boite" className="grid grid-cols-subgrid gap-4 col-span-3">
//   <div id="boite" className="col-start-2 bg-yellow-700">
// 	07
//   </div>
// </div> */}
