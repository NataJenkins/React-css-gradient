import React, { useState } from "react";
import Button from "../Button/Button";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";

import "./sidebar.css";

function cssCopied(css) {
  navigator.clipboard.writeText(css);
  setTimeout(function () {
    alert("Copied to clipbord");
  }, 100);
}

export default function Sidebar({
  color1,
  color2,
  setColor1,
  setColor2,
  radial,
  changeStyle,
  changeDirection,
  direction,
}) {
  const dirStyle = radial ? "radial" : "linear";
  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [showColorPicker2, setShowColorPicker2] = useState(false);
  let css;

  const gradDirStyle = () => {
    switch (direction) {
      case "up":
        css = `background:  ${color1};
        background: -webkit-${dirStyle}-gradient(top, ${color1}, ${color2});
        background: -moz-${dirStyle}-gradient(top, ${color1}, ${color2});
        background: ${dirStyle}-gradient(to bottom, ${color1}, ${color2});`;
        break;
      case "dwn":
        css = `background: ${color1},
          background: -webkit-${dirStyle}-gradient(bottom, ${color1}, ${color2});
          background: -moz-${dirStyle}-gradient(bottom, ${color1}, ${color2});
          background: ${dirStyle}-gradient(to top, ${color1}, ${color2});`;
        break;
      case "lft":
        css = `background: ${color1};
          background: -webkit-${dirStyle}-gradient(left, ${color1}, ${color2});
          background: -moz-${dirStyle}-gradient(left, ${color1}, ${color2});
          background: ${dirStyle}-gradient(to right, ${color1}, ${color2});`;
        break;
      case "rig":
        css = `background: ${color1};
          background: -webkit-${dirStyle}-gradient(right, ${color1}, ${color2});
          background: -moz-${dirStyle}-gradient(right, ${color1}, ${color2});
          background: ${dirStyle}-gradient(to left, ${color1}, ${color2});`;
        break;
      case "rad":
        css = `background: ${color1}
          background: -webkit-radial-gradient(center, ${color1}, ${color2});
          background: -moz-radial-gradient(center, ${color1}, ${color2});
          background: radial-gradient(ellipse at center, ${color1}, ${color2});`;
        break;
      case "tl":
        css = `background: ${color1}
          background: -webkit-${dirStyle}-gradient(top left, ${color1}, ${color2});
          background: -moz-${dirStyle}-gradient(top left, ${color1}, ${color2});
          background: ${dirStyle}-gradient(to bottom right, ${color1}, ${color2});`;
        break;
      case "tr":
        css = `background: ${color1}
          background: -webkit-${dirStyle}-gradient(top right, ${color1}, ${color2});
          background: -moz-${dirStyle}-gradient(top right, ${color1}, ${color2});
          background: ${dirStyle}-gradient(to bottom left, ${color1}, ${color2});`;
        break;
      case "bl":
        css = `background: ${color1}
          background: -webkit-${dirStyle}-gradient(bottom left, ${color1}, ${color2});
          background: -moz-${dirStyle}-gradient(bottom left, ${color1}, ${color2});
          background: ${dirStyle}-gradient(to top right, ${color1}, ${color2});`;
        break;
      case "br":
        css = `background: ${color1}
          background: -webkit-${dirStyle}-gradient(bottom right, ${color1}, ${color2});
          background: -moz-${dirStyle}-gradient(bottom right, ${color1}, ${color2});
          background: ${dirStyle}-gradient(to top left, ${color1}, ${color2});`;
        break;
      default:
        console.log("error");
    }
  };

  gradDirStyle();

  return (
    <div className="sideBar">
      <header>
        <h1>CSS GRADIENT GENERATOR</h1>
      </header>
      <div className="options">
        <p className="lbl">
          <label>Style</label>
        </p>
        <div className="d-flex">
          <Button txt="Linear" onClick={() => changeStyle(false)} />
          <Button txt="Radial" onClick={() => changeStyle(true)} />
        </div>

        <p className="lbl">
          <label>Direction</label>
        </p>
        <div className="d-flex">
          <Button
            onClick={() => changeDirection("tl")}
            icn={
              <FontAwesomeIcon className="diagonal" icon={faLongArrowAltLeft} />
            }
          />
          <Button
            onClick={() => changeDirection("up")}
            icn={<FontAwesomeIcon icon={faLongArrowAltUp} />}
          />
          <Button
            onClick={() => changeDirection("tr")}
            icn={
              <FontAwesomeIcon className="diagonal" icon={faLongArrowAltUp} />
            }
          />
        </div>
        <div className="d-flex">
          <Button
            onClick={() => changeDirection("lft")}
            icn={<FontAwesomeIcon icon={faLongArrowAltLeft} />}
          />
          <Button
            onClick={() => changeDirection("rad")}
            icn={<FontAwesomeIcon icon={farCircle} />}
            hidden={!radial ? true : undefined}
          />
          <Button
            onClick={() => changeDirection("rig")}
            icn={<FontAwesomeIcon icon={faLongArrowAltRight} />}
          />
        </div>
        <div className="d-flex">
          <Button
            onClick={() => changeDirection("bl")}
            icn={
              <FontAwesomeIcon className="diagonal" icon={faLongArrowAltDown} />
            }
          />
          <Button
            onClick={() => changeDirection("dwn")}
            icn={<FontAwesomeIcon icon={faLongArrowAltDown} />}
          />
          <Button
            onClick={() => changeDirection("br")}
            icn={
              <FontAwesomeIcon
                className="diagonal"
                icon={faLongArrowAltRight}
              />
            }
          />
        </div>

        <p className="lbl">
          <label>Colors</label>
        </p>
        <div className="d-flex">
          <div className="d-block">
            <button
              className="colorPicker"
              onClick={() =>
                setShowColorPicker1((showColorPicker1) => !showColorPicker1)
              }
              style={{ backgroundColor: color1 }}
            ></button>
            {showColorPicker1 && (
              <ChromePicker
                name="colorPicker"
                color={color1}
                onChange={(updatedColor1) => {
                  setColor1(updatedColor1.hex);
                }}
              />
            )}
          </div>
          <div className="d-block">
            <button
              className="colorPicker"
              onClick={() =>
                setShowColorPicker2((showColorPicker2) => !showColorPicker2)
              }
              style={{ backgroundColor: color2 }}
            ></button>
            {showColorPicker2 && (
              <ChromePicker
                name="colorPicker"
                color={color2}
                onChange={(updatedColor2) => setColor2(updatedColor2.hex)}
              />
            )}
          </div>
        </div>

        <p className="lbl">
          <label>Output format</label>
        </p>
        <div className="d-flex">
          <Button txt="Hex" />
          <Button txt="Rgba" />
        </div>

        <Button onClick={() => cssCopied(css)} txt="Get css" big />
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
