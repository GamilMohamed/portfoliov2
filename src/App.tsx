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
// const slow = { duration: 0.5, delay: 1.45 };

const classanimation = {
  hidden: { opacity: 0, x: 0, rotateX: 90 },
  visible: { opacity: 1, x: 0, rotateX: 0 },
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
      <Reveal
        top={t.toString() + "vw"}
        right={r.toString() + "vw"}
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
      </Reveal>,
    ]);
  };

  return (
    <>
      {/*  BLOC NOIR 1    */}
      <div
      id="blackBloc"
      >

      <Reveal
        top="10vw"
        right="20vw"
        animation={newanimation}
        transition={{ duration: getRandomNumber(1), delay: getRandomNumber(1) }}
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
      >
      <Reveal
        top="18vw"
        right="5vw"
        animation={animation}
        transition={{ duration: getRandomNumber(1), delay: getRandomNumber(1) }}
        >
        <WindowBloc
          zIndex={20}
          theme="blue"
          button={"Click me"}
          width={23}
          title={"WELCOME"}
          action={() => handleNewDiv(18, 5)}
          >
          <>
            <p>Welcome to my Portfolio !</p>
          </>
        </WindowBloc>
      </Reveal>
      {divList.map((div, index) => (
        <div key={index}>{div}</div>
      ))}
      </div>

      {/*  CV BLANC    */}
      <Reveal
        top="5vw"
        left="27vw"
        animation={animation}
        transition={{ duration: getRandomNumber(1), delay: getRandomNumber(1) }}
      >
        <WindowBloc
          zIndex={30}
          theme="white"
          button={"LIRE LE CV"}
          width={20}
          title={"CV"}
          action={() => alert("coucou")}
        >
          <>
            <p>CURRICULUM VITAE</p>
          </>
        </WindowBloc>
      </Reveal>
      {/*  CV BLANC    */}

      {/*  MOHA PIXEL    */}
      <Reveal
        top="23vh"
        left="13vw"
        animation={newanimation}
        transition={{ duration: getRandomNumber(1), delay: getRandomNumber(1) }}
      >
        <WindowBloc zIndex={10} theme="blue" width={20} title={"MGAMIL"}>
          <>
            <img src={pixelmoha} alt="moha" />
          </>
        </WindowBloc>
      </Reveal>

      {/*  MOHAMED    */}
      <Reveal
        top="40vh"
        left="26vw"
        animation={animation}
        transition={{
          duration: getRandomNumber(0.5),
          delay: getRandomNumber(2),
        }}
      >
        <img
          style={{ height: "17vh", zIndex: 30 }}
          src={welcome}
          alt="welcome"
        />
      </Reveal>

      {/*  TERMINAL 42    */}
      <div
      id="Terminal"
      >
        
      <Reveal
        top="70vh"
        right="9vw"
        animation={newanimation}
        transition={{ duration: getRandomNumber(1), delay: getRandomNumber(1) }}
        >
        <Terminal theme="black" width={35} title={"TERMINAL"}></Terminal>
      </Reveal>
      </div>

      {/*  GAMIL    */}
      <Reveal
        top="50vh"
        left="26vw"
        animation={animation}
        transition={{ duration: getRandomNumber(1), delay: getRandomNumber(2) }}
      >
        <div>
          <h1 className="text-white" style={{ fontSize: "15rem", zIndex: 30 }}>
            Gamil
          </h1>
        </div>
      </Reveal>

      {/*  CHEVRON    */}
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
