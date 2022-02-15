import React, { useEffect, useState } from "react";
import hexToRgba from "hex-to-rgba";
import "./sidebar.css";
import { SidebarStyle } from "./SidebarStyle";
import { SidebarDirection } from "./SidebarDirection";
import { SidebarColors } from "./SidebarColors";
import { SidebarHex } from "./SidebarHex";
import { directions, gradientDirectionFullStyleBuilder } from "../utils";
import { SidebarCopyClipboard } from "./SidebarCopyClipboard";

export default function Sidebar({ gradientStyles, setGradientStyles }) {
  const [useRadialStyle, setUseRadialStyle] = useState(true);
  const isRadialStyle = useRadialStyle ? "radial" : "linear";
  const [direction, setDirection] = useState(directions.top);
  const [color1, setColor1] = useState("#9900EF");
  const [color2, setColor2] = useState("#2F95BC");
  const [useHex, setUseHex] = useState(true);

  useEffect(() => {
    setGradientStyles(
      gradientDirectionFullStyleBuilder(
        direction,
        isRadialStyle,
        useHex ? color1 : hexToRgba(color1),
        useHex ? color2 : hexToRgba(color2)
      )
    );
  }, [useRadialStyle, direction, color1, color2, useHex]);

  return (
    <div className="sideBar">
      <header>
        <h1>CSS GRADIENT GENERATOR</h1>
      </header>
      <div className="options">
        <SidebarStyle setUseRadialStyle={setUseRadialStyle} />
        <SidebarDirection
          useRadialStyle={useRadialStyle}
          setDirection={setDirection}
        />
        <SidebarColors
          color1={color1}
          color2={color2}
          setColor1={setColor1}
          setColor2={setColor2}
        />
        <SidebarHex setUseHex={setUseHex} />
        <SidebarCopyClipboard gradientStyles={gradientStyles} />
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
