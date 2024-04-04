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
      <div id="Intro" ref={headRef} >
        <Intro refx={divRef} />
      </div>
      <div ref={divRef}>
        <Languages />
      </div>
      <div id="Project">
        <Projets />
      </div>
      <div id="Footer">
        <Footer to={headRef}/>
      </div>
    </>
  );
}
export default App;
