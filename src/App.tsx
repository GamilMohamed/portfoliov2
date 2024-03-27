import moha from "./assets/testgamil.png"
import moha180 from "./assets/testgamil180.png"
import gamil from "./assets/gamiltest.png"
import { useEffect, useState } from 'react'
import Box from "./Box"
import "./App.css"

function App() {
  const [show, setShow] = useState(0)

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShow(1);
      const timeout2 = setTimeout(() => {
        setShow(2);
      }, 250);
      return () => clearTimeout(timeout2);
    }, 250);

    return () => clearTimeout(timeout1);
  }, []);

  return (
    <Box primary="white" secondary="black" />
    // <div style={{ position: 'relative' }}>
    //   <img src={moha} style={{ position: 'absolute', top: '10px', right: '10px', zIndex:2, display: show >= 2 ? 'block' : 'none' }} alt="Image 1" />
    //   <img src={moha} style={{ position: 'absolute', top: '20px', right: '20px', zIndex:1, display: show >= 1 ? 'block' : 'none' }} alt="Image 2" />
    //   <img src={moha} style={{ position: 'absolute', top: '30px', right: '30px', zIndex:0, display: show >= 0 ? 'block' : 'none' }} alt="Image 3" />
    // </div>
  );
}
export default App
