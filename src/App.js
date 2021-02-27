
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Particles from "react-particles-js";

function App() {
  return (
    <>
      <Particles
        params ={{
          particles : {
            number : {
              value :30,
              density : {
                enable : true,
                volume_area : 900,
              }
            },
            shape : {
              type : "star",
              stroke : {
                width : 6,
                color : "#f9ab00",
              }
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
      <h1> portfolio</h1>
    </>
  );
}

export default App;
