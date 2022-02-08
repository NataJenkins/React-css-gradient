import React from "react";
import "./Button.css";

export default function Button({ txt, icn, bgColor, big, onClick, hidden }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${big ? "bigBtn" : "button"} ${hidden ? "hide" : ""}`}
        style={{ backgroundColor: { bgColor } }}
      >
        {txt ? txt : icn}
      </button>
    </div>
  );
}
