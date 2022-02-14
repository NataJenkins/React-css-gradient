import { Fragment } from "react";
import Button from "../Button/Button";

export const SidebarHex = ({ setUseHex }) => {
  return (
    <Fragment>
      <p className="lbl">
        <label>Output format</label>
      </p>
      <div className="d-flex">
        <Button txt="Hex" onClick={() => setUseHex(true)} />
        <Button txt="RGBA" onClick={() => setUseHex(false)} />
      </div>
    </Fragment>
  );
};
