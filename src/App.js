import "./App.css";
import { useState } from "react";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
  const [color1, setColor1] = useState("#9900EF");
  const [color2, setColor2] = useState("#2F95BC");
  const [direction, setDirection] = useState("up");
  const [radial, setRadial] = useState(true);

  return (
    <div className="App">
      <Sidebar
        color1={color1}
        setColor1={setColor1}
        color2={color2}
        setColor2={setColor2}
        direction={direction}
        radial={radial}
        changeStyle={(rad) => setRadial(rad)}
        changeDirection={(dir) => setDirection(dir)}
      />
      <Content
        color1={color1}
        color2={color2}
        direction={direction}
        radial={radial}
      />
    </div>
  );
}

export default App;
