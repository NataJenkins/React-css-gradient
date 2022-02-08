import React from "react";
import Button from "../Button/Button";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <h1>CSS GRADIENT GENERATOR</h1>
      <Button />
      <Button />
      <Button />
      <footer>
        <p>Gradient Generator for Linear and Radial Css Color Gradients</p>
        <p>
          © 2021 CSS-GRADIENT.COM <br></br> Terms & Privacy - Contact
        </p>
      </footer>
    </div>
  );
}
