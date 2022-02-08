import React from "react";
import "./Button.css";

export default function Button({ txt, icn, bgColor, big }) {
  return (
    <div>
      <button
        className={big ? "bigBtn" : "button"}
        style={{ backgroundColor: { bgColor } }}
      >
        {txt ? txt : icn}
      </button>
    </div>
  );
}
