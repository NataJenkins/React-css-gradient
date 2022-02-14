import { useState } from "react";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/SidebarMainView.jsx";

function App() {
  const [gradientStyles, setGradientStyles] = useState(undefined);

  return (
    <div className="App">
      <Sidebar
        gradientStyles={gradientStyles}
        setGradientStyles={setGradientStyles}
      />
      <Content gradientStyles={gradientStyles} />
    </div>
  );
}

export default App;
