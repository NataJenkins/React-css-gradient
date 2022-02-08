import "./App.css";
import { useState } from "react";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
  const [color1, setColor1] = useState("#9900EF");
  const [color2, setColor2] = useState("#2F95BC");
  return (
    <div className="App">
      <Sidebar
        color1={color1}
        setColor1={setColor1}
        color2={color2}
        setColor2={setColor2}
      />
      <Content color1={color1} color2={color2} />
    </div>
  );
}

export default App;
