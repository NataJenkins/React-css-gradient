import { Fragment } from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import { directions } from "../utils";

export const SidebarDirection = ({ useRadialStyle, setDirection }) => {
  return (
    <Fragment>
      <p className="lbl">
        <label>Direction</label>
      </p>
      <div className="d-flex">
        <Button
          onClick={() => setDirection(directions.topLeft)}
          icn={
            <FontAwesomeIcon className="diagonal" icon={faLongArrowAltLeft} />
          }
        />
        <Button
          onClick={() => setDirection(directions.top)}
          icn={<FontAwesomeIcon icon={faLongArrowAltUp} />}
        />
        <Button
          onClick={() => setDirection(directions.topRight)}
          icn={<FontAwesomeIcon className="diagonal" icon={faLongArrowAltUp} />}
        />
      </div>
      <div className="d-flex">
        <Button
          onClick={() => setDirection(directions.left)}
          icn={<FontAwesomeIcon icon={faLongArrowAltLeft} />}
        />
        <Button
          onClick={() => setDirection(directions.center)}
          icn={<FontAwesomeIcon icon={farCircle} />}
          hidden={!useRadialStyle}
        />
        <Button
          onClick={() => setDirection(directions.right)}
          icn={<FontAwesomeIcon icon={faLongArrowAltRight} />}
        />
      </div>
      <div className="d-flex">
        <Button
          onClick={() => setDirection(directions.bottomLeft)}
          icn={
            <FontAwesomeIcon className="diagonal" icon={faLongArrowAltDown} />
          }
        />
        <Button
          onClick={() => setDirection(directions.bottom)}
          icn={<FontAwesomeIcon icon={faLongArrowAltDown} />}
        />
        <Button
          onClick={() => setDirection(directions.bottomRight)}
          icn={
            <FontAwesomeIcon className="diagonal" icon={faLongArrowAltRight} />
          }
        />
      </div>
    </Fragment>
  );
};
