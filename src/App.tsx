import { useRef } from "react";
import Intro from "./Intro/Intro";
import Languages from "./Languages/Languages";
import Projets from "./Languages/Projets";
import Footer from "./Footer/Footer";

export const scrollToElement = (divRef: any) => {
  const { current } = divRef;
  console.log(current);
  if (current !== null && current !== undefined) {
    (current as HTMLDivElement).scrollIntoView({ behavior: "smooth" });
  }
};

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div id="Intro" ref={headRef}>
        <Intro refx={divRef} />
      </div>
      {/* <div style={{height:"10vh"}}></div> */}
      <div ref={divRef}>
        <h1 className="section-title text-center text-white putain">About Me</h1>
        <Languages />
      </div>
      <section id="projects">
        <div className="container mx-auto sm:px-4">
          <div className="project-wrapper">
            <h1 className="section-title text-center ">Projects</h1>
            <Projets />
          </div>
        </div>
      </section>
      <div id="Footer">
        <Footer to={headRef} />
      </div>
    </>
  );
}
export default App;
