import { useRef } from "react";
import Intro from "./Intro/Intro";
import Languages from "./Languages/Languages";
// import GridSystem from "./GridSystem/GridSystem";
export const scrollToElement = (divRef: any) => {
  const { current } = divRef;
  console.log(current);
  if (current !== null && current !== undefined) {
    (current as HTMLDivElement).scrollIntoView({ behavior: "smooth" });
  }
};

function App() {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div id="Intro">
        <Intro refx={divRef}
        />
      </div>
      <div
      ref={divRef}
      >
        <Languages />
      </div>
      <button onClick={() => scrollToElement(divRef)}>Scroll to Intro</button>
    </>
  );
}
export default App;
