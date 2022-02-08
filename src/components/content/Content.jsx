import React from "react";
import "./content.css";

export default function Content({ color1, color2 }) {
  return (
    <div className="content">
      <div
        className="gradient"
        style={{
          background: `-webkit-linear-gradient(top left, ${color1}, ${color2})`,
          background: `-moz-linear-gradient(top left, ${color1}, ${color2})`,
          background: `linear-gradient(to bottom right, ${color1}, ${color2})`,
        }}
      ></div>
      <div className="info">
        <section className="about">
          <h2>About CSS Gradients</h2>
          <p>
            The CSS Gradient online generator tool is a nice and simple to use
            utility to quickly generate linear and radial color gradients. You
            can create the gradients and export the CSS code with colors in HEX
            or RGB format.
          </p>
          <p>
            Keep reading below to learn more about <span>Linear Gradients</span>
            , <span>Radial Gradients</span> or <span>Text Gradients</span>.
          </p>
          <p>
            Or, get inspired and discover more gradient backgrounds by color:{" "}
            <span>Red Gradient backgrounds</span>{" "}
            <span>Orange Gradient backgrounds</span>{" "}
            <span>Yellow Gradient backgrounds</span>{" "}
            <span>Green Gradient backgrounds</span>
            <span>Azure Gradient backgrounds</span>
            <span>Blue Gradient backgrounds</span>
            <span>Purple Gradient backgrounds</span>
            <span>Pink Gradient backgrounds</span> or
            <span>Monochrome Gradient backgrounds</span>
          </p>
        </section>
      </div>
    </div>
  );
}
