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

export default function Sidebar() {
  const [color1, setColor1] = useState("#9900EF");
  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [color2, setColor2] = useState("#2F95BC");
  const [showColorPicker2, setShowColorPicker2] = useState(false);
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
          <Button txt="Linear" />
          <Button txt="Radial" />
        </div>

        <p className="lbl">
          <label>Direction</label>
        </p>
        <div className="d-flex">
          <Button
            icn={
              <FontAwesomeIcon className="diagonal" icon={faLongArrowAltLeft} />
            }
          />
          <Button icn={<FontAwesomeIcon icon={faLongArrowAltUp} />} />
          <Button
            icn={
              <FontAwesomeIcon className="diagonal" icon={faLongArrowAltUp} />
            }
          />
        </div>
        <div className="d-flex">
          <Button icn={<FontAwesomeIcon icon={faLongArrowAltLeft} />} />
          <Button icn={<FontAwesomeIcon icon={farCircle} />} />
          <Button icn={<FontAwesomeIcon icon={faLongArrowAltRight} />} />
        </div>
        <div className="d-flex">
          <Button
            icn={
              <FontAwesomeIcon className="diagonal" icon={faLongArrowAltDown} />
            }
          />
          <Button icn={<FontAwesomeIcon icon={faLongArrowAltDown} />} />
          <Button
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

        <Button txt="Get CSS" big />
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
