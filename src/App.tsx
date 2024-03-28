// import { useState } from "react";
import WindowBloc from "./Box";
// import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import { Anim, Reveal } from "./test";
import welcome from "./assets/welcome_to.png";

import pixelmoha from "./assets/gamil_pix.png";

function getRandomNumber(max: GLfloat | number): GLfloat {
  console.log("max is",max, "got", Math.random() * max);
  return (Math.random() * max);
}

const animation: Anim = {
  hidden: { opacity: 0, x: getRandomNumber(30), rotateX: getRandomNumber(90) },
  visible: { opacity: 1, x: 0, rotateX: 0 },
};

const newanimation = {
  hidden: { opacity: 0, y: getRandomNumber(60), x:getRandomNumber(60), rotateX: 92 },
  visible: { opacity: 1, y: 0, x: 0, rotateX: 0 },
};



const fast = { duration: getRandomNumber(1), delay: getRandomNumber(1) };
const slow = { duration: 0.5, delay: 1.45 };

// export const Ball=
// ()=>
// {
//   let offsetX,offsetY
//   const move=e=>
//   {
//     const el=e.target
//     el.style.left = `${e.pageX-offsetX}px`
//     el.style.top = `${e.pageY-offsetY}px`
//   }
//   const add=e=>
//   {
//     const el=e.target
//     offsetX=e.clientX-el.getBoundingClientRect().left
//     offsetY=e.clientY-el.getBoundingClientRect().top
//     el.addEventListener('mousemove',move)
//   }
//   const remove=e=>{
//     const el=e.target
//     el.removeEventListener('mousemove',move)
//   }
//   const Wrapper=styled.div`
//   width: 50px;
//   height: 50px;
//   border-radius: 29px;
//   box-shadow: 0 0 6px;
//   position: absolute;
//   top: 40px;
//   left: 227px;
//   background-color: rgb(0,0,0,0.5);
//   cursor:pointer;
//   `
//   return (
//     <Wrapper onMouseDown={add} onMouseUp={remove}/>
//   )
// }

function App() {
  return (
    <>
      {/*  BLOC NOIR 1    */}
      <Reveal top="10vw" right="20vw" animation={newanimation} transition={{duration:getRandomNumber(1), delay:getRandomNumber(1)}}>
        <WindowBloc
         zIndex={10}
          theme="black"
          button={"Click me"}
          width={20}
          title={"PROFILE"}
        >
          <>
            <p>Hello world !!!</p>
            <p>Comment ca va ?</p>
          </>
        </WindowBloc>
      </Reveal>

      {/*  BLOC BLEU 2    */}
      <Reveal top="18vw" right="5vw" animation={animation} transition={{duration:getRandomNumber(1), delay:getRandomNumber(1)}}>
        <WindowBloc
         zIndex={20}
          theme="blue"
          button={"Click me"}
          width={23}
          title={"WELCOME"}
        >
          <>
            <p>Hello world !!!</p>
            <p>Welcome to my Portfolio !</p>
          </>
        </WindowBloc>
      </Reveal>

      {/*  CV BLANC    */}
      <Reveal top="5vw" left="27vw" animation={animation} transition={{duration:getRandomNumber(1), delay:getRandomNumber(1)}}>
        <WindowBloc  zIndex={30} theme="white" button={"LIRE"} width={20} title={"CV"}>
          <>
            <p>CURRICULUM VITAE</p>
          </>
        </WindowBloc>
      </Reveal>

      {/*  MOHA PIXEL    */}
      <Reveal top="23vh" left="13vw" animation={newanimation} transition={{duration:getRandomNumber(1), delay:getRandomNumber(1)}}>
        <WindowBloc  zIndex={10} theme="blue" width={20} title={"MGAMIL"}>
          <>
            <img src={pixelmoha} alt="moha" />
          </>
        </WindowBloc>
      </Reveal>


      {/*  MOHAMED    */}
      <Reveal top="40vh" left="26vw" animation={animation} transition={{duration:getRandomNumber(0.5), delay:getRandomNumber(2)}}>
        {/* <WindowBloc theme="black" width={40} title={"MY NAME IS"}>
          <>
            <h1 className="text-8xl">MOHAMED</h1>
          </>
        </WindowBloc> */}
        <img style={{height:'17vh', zIndex: 30}}  src={welcome} alt="welcome" />
      </Reveal>

      {/*  JUNIOR 42    */}
      <Reveal bottom="7vh" right="11vw" animation={newanimation} transition={{duration:getRandomNumber(1), delay:getRandomNumber(1)}}>
        <WindowBloc  zIndex={10} theme="white" width={22} title={"MGAMIL"}>
          <>
          <p>DEVELOPPEUR JUNIOR</p>
          <p>ECOLE 42</p>
          {/* <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          </div> */}
          </>
        </WindowBloc>
      </Reveal>
    
      {/*  GAMIL    */}
      <Reveal top="50vh" left="26vw" animation={animation} transition={{duration:getRandomNumber(1), delay:getRandomNumber(2)}}>
      <div>
        <h1 className="text-white" style={{fontSize:"15rem", zIndex:30}}>GAMIL</h1>
      </div>
      </Reveal>

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
