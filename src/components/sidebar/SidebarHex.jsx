import { Fragment } from "react";
import Button from "../Button/Button";

function cssCopied(css) {
  console.log(css);
  navigator.clipboard.writeText(css);
  setTimeout(function () {
    alert("Copied to clipbord");
  }, 100);
}

export const SidebarHex = ({ setUseHex, styles }) => {
  console.log("s", styles);
  return (
    <Fragment>
      <p className="lbl">
        <label>Output format</label>
      </p>
      <div className="d-flex">
        <Button txt="Hex" onClick={() => setUseHex(true)} />
        <Button txt="Rgba" onClick={() => setUseHex(false)} />
      </div>

      <Button onClick={() => cssCopied(styles)} txt="Get css" big />
    </Fragment>
  );
};
