import React from "react";
import "./Button.css";

export default function Button({ txt, icn, cName }) {
  return (
    <div>
      <button className="button">{txt ? txt : icn}</button>
    </div>
  );
}
