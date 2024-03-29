import WindowBloc from "./Box";
import { Anim, Reveal } from "./test";
import welcome from "./assets/welcome_to.png";
import cub3d from "./assets/cub3d.mp4";
import pixelmoha from "./assets/gamil_pix.png";
import Terminal from "./Terminal";

function getRandomNumber(max: GLfloat | number): GLfloat {
  // console.log("max is", max, "got", Math.random() * max);
  return Math.random() * max;
}

const animation: Anim = {
  hidden: { opacity: 0, x: getRandomNumber(30), rotateX: getRandomNumber(90) },
  visible: { opacity: 1, x: 0, rotateX: 0 },
};

const newanimation = {
  hidden: {
    opacity: 0,
    y: getRandomNumber(60),
    x: getRandomNumber(60),
    rotateX: 92,
  },
  visible: { opacity: 1, y: 0, x: 0, rotateX: 0 },
};
// const fast = { duration: getRandomNumber(1), delay: getRandomNumber(1) };
const classanimation = {
  hidden: { opacity: 0, x: 0, rotateX: 90 },
  visible: { opacity: 1, x: 0, rotateX: 0 },
};

const normal = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: { opacity: 1, rotateX: 0 },
};
import { useState, ReactNode } from "react";
function App() {
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
          // top={t.toString() + "vh"}
          // right={r.toString() + "vw"}
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
    <>
      {/*  BLOC NOIR 1    */}
      <div
        id="blackBloc"
        style={{
          position: "absolute",
          top: "10vh",
          right: "20vw",
          width: "20vw",
        }}
      >
        <Reveal
          // top="10vh"
          // right="20vw"
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
            width={20}
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
      <div
        id="Welcome"
        style={{
          position: "absolute",
          top: "18vh",
          right: "5vw",
          width: "23vw",
        }}
      >
        <Reveal
          animation={animation}
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

      {/*  CV BLANC    */}
      <div
        id="CV"
        style={{
          position: "absolute",
          top: "5vh",
          left: "27vw",
          // width: "20vw",
        }}
      >
        <Reveal
          animation={animation}
          transition={{
            duration: getRandomNumber(1),
            delay: getRandomNumber(1),
          }}
        >
          <WindowBloc
            zIndex={30}
            theme="white"
            button={"READ"}
            width={20}
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
      <Reveal
        top="23vh"
        left="13vw"
        animation={newanimation}
        transition={{ duration: 2, delay: 0 }}
      >
        <WindowBloc
          zIndex={10}
          theme="blue"
          width={20}
          pad={false}
          title={"MGAMIL"}
        >
          <>
            <img src={pixelmoha} alt="moha" />
          </>
        </WindowBloc>
      </Reveal>

      {/*  MOHAMED    */}
      <div
        style={{
          position: "absolute",
          top: "40vh",
          left: "26vw",
          width: "20vw",
          zIndex: 60,
        }}
      >
        <Reveal
          animation={normal}
          transition={{
            duration: 1.1,
            delay: 0,
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

      {/*  TERMINAL 42    */}
      <div
        id="Terminal"
        style={{
          position: "absolute",
          top: "60vh",
          right: "2vw",
          width: "35vw",
        }}
      >
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
      <div
      style={{
        position: "absolute",
        top: "50vh",
        left: "26vw",
        width: "20vw",
        zIndex: 60,
      }}
      >
      <Reveal
        animation={animation}
        transition={{ duration: getRandomNumber(1), delay: getRandomNumber(2) }}
        >
        <div>
          <h1 id="Gamil" className="text-white" style={{ fontSize: "15rem", zIndex: 30 }}>
            GAMIL</h1>
        </div>
      </Reveal>
        </div>

      {/*  42    */}
      <Reveal
        bottom="2vh"
        left="6vw"
        animation={animation}
        transition={{ duration: 2, delay: 0 }}
      >
        <WindowBloc zIndex={10} theme="black" pad={false} title={"MGAMIL"}>
          <>
            {/* <p>sQDSQD</p> */}
            <svg
              width="200px"
              version="1.1"
              viewBox="0 -200 960 960"
              fill="white"
              // enable-background="new 0 -200 960 960"
            >
              <polygon
                id="polygon5"
                points="32,412.6 362.1,412.6 362.1,578 526.8,578 526.8,279.1 197.3,279.1 526.8,-51.1 362.1,-51.1 
	32,279.1 "
              />
              <polygon
                id="polygon7"
                points="597.9,114.2 762.7,-51.1 597.9,-51.1 "
              />
              <polygon
                id="polygon9"
                points="762.7,114.2 597.9,279.1 597.9,443.9 762.7,443.9 762.7,279.1 928,114.2 928,-51.1 762.7,-51.1 "
              />
              <polygon
                id="polygon11"
                points="928,279.1 762.7,443.9 928,443.9 "
              />
            </svg>
          </>
        </WindowBloc>
      </Reveal>
      <div 
      style={{
        position: "absolute",
        // bottom: "1vh",
        // margin: "auto",
        // left: "50vw",
        left: "50%",
        top: "92%",
        transform: "translate(-50%, -50%)",
        // transform: "translate(50%, 50%)",
        zIndex: 60,
      }}
      >
      <svg width="128px" height="128px" viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="3.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.28"></g><g id="SVGRepo_iconCarrier"><polyline points="48 32 32 48 16 32"></polyline><polyline points="48 16 32 32 16 16"></polyline></g></svg>

      </div>
    </>
  );
}
export default App;

// <Reveal top="40vh" left="30vw" animation={newanimation}
//     transition={fast}
// >
//   <WindowBloc theme="black" width={40} title={"MGAMIL"}>
//     <>
// <p>I'm Mohamed Gamil, 24 years old and student at 42 Paris.</p>
// <p>I'm a passionate about programming and I'm always looking for new challenges. I'm pretty good in C, C++ and TypeScript.</p>
// <p>I'm currently looking for an internship in Paris in backend or embedded systems.</p>
//     </>
//   </WindowBloc>
// </Reveal>
