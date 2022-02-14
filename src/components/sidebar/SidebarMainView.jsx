import React, { useEffect, useState } from "react";
import hexToRgba from "hex-to-rgba";
import "./sidebar.css";
import { SidebarStyle } from "./SidebarStyle";
import { SidebarDirection } from "./SidebarDirection";
import { SidebarColors } from "./SidebarColors";
import { SidebarHex } from "./SidebarHex";
import { gradientDirectionFullStyleBuilder } from "../utils";

export default function Sidebar({
  color1,
  color2,
  setColor1,
  setColor2,
  useRadialStyle,
  setUseRadialStyle,
  changeDirection,
  direction,
}) {
  const [styles, setStyles] = useState(undefined);
  const [useHex, setUseHex] = useState(true);

  const isRadialStyle = useRadialStyle ? "radial" : "linear";
  useEffect(() => {
    // When direction changes run this and get styles.
    setStyles(
      gradientDirectionFullStyleBuilder(
        direction,
        isRadialStyle,
        useHex ? color1 : hexToRgba(color1),
        useHex ? color2 : hexToRgba(color2)
      )
    );
  }, [direction]);

  return (
    <div className="sideBar">
      <header>
        <h1>CSS GRADIENT GENERATOR</h1>
      </header>
      <div className="options">
        <SidebarStyle setUseRadialStyle={setUseRadialStyle} />
        <SidebarDirection
          useRadialStyle={useRadialStyle}
          changeDirection={changeDirection}
        />
        <SidebarColors
          color1={color1}
          color2={color2}
          setColor1={setColor1}
          setColor2={setColor2}
        />
        <SidebarHex setUseHex={setUseHex} styles={styles} />
      </div>

      <footer>
        <p>Gradient Generator for Linear and Radial Css Color Gradients</p>
        <p>
          © 2021 CSS-GRADIENT.COM <br></br> Terms & Privacy - Contact
        </p>
      </footer>
    </div>
  );
}
