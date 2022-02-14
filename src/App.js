import { useState } from "react";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/SidebarMainView.jsx";
import { directions } from "./components/utils";

function App() {
  const [color1, setColor1] = useState("#9900EF");
  const [color2, setColor2] = useState("#2F95BC");
  const [direction, setDirection] = useState(directions.top);
  const [useRadialStyle, setUseRadialStyle] = useState(true);

  return (
    <div className="App">
      <Sidebar
        color1={color1}
        setColor1={setColor1}
        color2={color2}
        setColor2={setColor2}
        direction={direction}
        useRadialStyle={useRadialStyle}
        setUseRadialStyle={(booleanValue) => setUseRadialStyle(booleanValue)}
        changeDirection={(dir) => setDirection(dir)}
      />
      <Content
        color1={color1}
        color2={color2}
        direction={direction}
        useRadialStyle={useRadialStyle}
      />
    </div>
  );
}

export default App;
