import { Fragment } from "react";
import Button from "../Button/Button";

export const SidebarStyle = ({ setUseRadialStyle }) => {
  return (
    <Fragment>
      <p className="lbl">
        <label>Style</label>
      </p>
      <div className="d-flex">
        <Button txt="Linear" onClick={() => setUseRadialStyle(false)} />
        <Button txt="Radial" onClick={() => setUseRadialStyle(true)} />
      </div>
    </Fragment>
  );
};
