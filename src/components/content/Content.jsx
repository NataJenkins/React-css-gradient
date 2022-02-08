import React from "react";
import "./content.css";

export default function Content({ color1, color2, radial, direction }) {
  const dirStyle = radial ? "radial" : "linear";
  let gradStyle = {
    background: `-webkit-${dirStyle}-gradient(top, ${color1}, ${color2})`,
  };
  let css;
  const gradDirStyle = () => {
    switch (direction) {
      case "up":
        gradStyle = {
          background: `-webkit-${dirStyle}-gradient(top, ${color1}, ${color2})`,
        };
        css = {
          background: color1,
          background: `-webkit-${dirStyle}-gradient(top, ${color1}, ${color2})`,
          background: `-moz-${dirStyle}-gradient(top, ${color1}, ${color2})`,
          background: `${dirStyle}-gradient(to bottom, ${color1}, ${color2})`,
        };
        break;
      case "dwn":
        gradStyle = {
          background: `-webkit-${dirStyle}-gradient(bottom, ${color1}, ${color2})`,
        };
        css = {
          background: color1,
          background: `-webkit-${dirStyle}-gradient(bottom, ${color1}, ${color2})`,
          background: `-moz-${dirStyle}-gradient(bottom, ${color1}, ${color2})`,
          background: `${dirStyle}-gradient(to top, ${color1}, ${color2})`,
        };
        break;
      case "lft":
        gradStyle = {
          background: `-webkit-${dirStyle}-gradient(left, ${color1}, ${color2})`,
        };
        css = {
          background: color1,
          background: `-webkit-${dirStyle}-gradient(left, ${color1}, ${color2})`,
          background: `-moz-${dirStyle}-gradient(left, ${color1}, ${color2})`,
          background: `${dirStyle}-gradient(to right, ${color1}, ${color2})`,
        };
        break;
      case "rig":
        gradStyle = {
          background: `-webkit-${dirStyle}-gradient(right, ${color1}, ${color2})`,
        };
        css = {
          background: color1,
          background: `-webkit-${dirStyle}-gradient(right, ${color1}, ${color2})`,
          background: `-moz-${dirStyle}-gradient(right, ${color1}, ${color2})`,
          background: `${dirStyle}-gradient(to left, ${color1}, ${color2})`,
        };
        break;
      case "rad":
        gradStyle = {
          background: `-webkit-radial-gradient(center, ${color1}, ${color2})`,
        };
        css = {
          background: color1,
          background: `-webkit-radial-gradient(center, ${color1}, ${color2})`,
          background: `-moz-radial-gradient(center, ${color1}, ${color2})`,
          background: `radial-gradient(ellipse at center, ${color1}, ${color2})`,
        };
        break;
      case "tl":
        gradStyle = {
          background: `-webkit-${dirStyle}-gradient(top left, ${color1}, ${color2})`,
        };
        css = {
          background: color1,
          background: `-webkit-${dirStyle}-gradient(top left, ${color1}, ${color2})`,
          background: `-moz-${dirStyle}-gradient(top left, ${color1}, ${color2})`,
          background: `${dirStyle}-gradient(to bottom right, ${color1}, ${color2})`,
        };
        break;
      case "tr":
        gradStyle = {
          background: `-webkit-${dirStyle}-gradient(top right, ${color1}, ${color2})`,
        };
        css = {
          background: color1,
          background: `-webkit-${dirStyle}-gradient(top right, ${color1}, ${color2})`,
          background: `-moz-${dirStyle}-gradient(top right, ${color1}, ${color2})`,
          background: `${dirStyle}-gradient(to bottom left, ${color1}, ${color2})`,
        };
        break;
      case "bl":
        gradStyle = {
          background: `-webkit-${dirStyle}-gradient(bottom left, ${color1}, ${color2})`,
        };
        css = {
          background: color1,
          background: `-webkit-${dirStyle}-gradient(bottom left, ${color1}, ${color2})`,
          background: `-moz-${dirStyle}-gradient(bottom left, ${color1}, ${color2})`,
          background: `${dirStyle}-gradient(to top right, ${color1}, ${color2})`,
        };
        break;
      case "br":
        gradStyle = {
          background: `-webkit-${dirStyle}-gradient(bottom right, ${color1}, ${color2})`,
        };
        css = {
          background: color1,
          background: `-webkit-${dirStyle}-gradient(bottom right, ${color1}, ${color2})`,
          background: `-moz-${dirStyle}-gradient(bottom right, ${color1}, ${color2})`,
          background: `${dirStyle}-gradient(to top left, ${color1}, ${color2})`,
        };
        break;
      default:
        console.log("error");
    }
  };

  gradDirStyle();

  return (
    <div className="content">
      <div className="gradient" style={gradStyle} dirStyle>
        <h1>{direction}</h1>
      </div>
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
