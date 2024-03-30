import Intro from "./Intro/Intro";
import Languages from "./Languages/Languages";

function App() {
  return (
    <>
    <div
    id="Intro"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      // flexDirection: "column",
      color: "white",
      height: "100vh",
      width: "100vw",
    }}>
      <Intro />
      </div>
  <div style={{
    backgroundColor: "red",
      color: "white",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
    <Languages />
     </div>
  <div style={{
    backgroundColor: "blue",
      color: "white",
      height: "30vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h1>PROJECTSSSSSSSSSSSSSSSSSsssssssss</h1>
    {/* <Languages /> */}
     </div>
    </>
  );
}
export default App;
