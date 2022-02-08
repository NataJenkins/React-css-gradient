import React from "react";
import Button from "../Button/Button";
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
  return (
    <div className="sideBar">
      <h1>CSS GRADIENT GENERATOR</h1>
      <div className="options">
        <label>Style</label>
        <Button txt="Linear" />
        <Button txt="Radial" />
        <label>Direction</label>
        <Button
          icn={
            <FontAwesomeIcon className="diagonal" icon={faLongArrowAltLeft} />
          }
        />
        <Button icn={<FontAwesomeIcon icon={faLongArrowAltUp} />} />
        <Button
          icn={<FontAwesomeIcon className="diagonal" icon={faLongArrowAltUp} />}
        />
        <Button icn={<FontAwesomeIcon icon={faLongArrowAltLeft} />} />
        <Button icn={<FontAwesomeIcon icon={farCircle} />} />
        <Button icn={<FontAwesomeIcon icon={faLongArrowAltRight} />} />
        <Button
          icn={
            <FontAwesomeIcon className="diagonal" icon={faLongArrowAltDown} />
          }
        />
        <Button icn={<FontAwesomeIcon icon={faLongArrowAltDown} />} />
        <Button
          icn={
            <FontAwesomeIcon className="diagonal" icon={faLongArrowAltRight} />
          }
        />
      </div>
      <label>Colors</label>
      <Button style="background-color: rgb(124, 150, 55);" />
      <Button />
      <label>Output format</label>
      <Button txt="Hex" />
      <Button txt="Rgba" />
      {/*    <footer>
        <p>Gradient Generator for Linear and Radial Css Color Gradients</p>
        <p>
          © 2021 CSS-GRADIENT.COM <br></br> Terms & Privacy - Contact
        </p>
</footer>*/}
    </div>
  );
}
