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

export const SidebarDirection = ({ useRadialStyle, changeDirection }) => {
  return (
    <Fragment>
      <p className="lbl">
        <label>Direction</label>
      </p>
      <div className="d-flex">
        <Button
          onClick={() => changeDirection(directions.topLeft)}
          icn={
            <FontAwesomeIcon className="diagonal" icon={faLongArrowAltLeft} />
          }
        />
        <Button
          onClick={() => changeDirection(directions.top)}
          icn={<FontAwesomeIcon icon={faLongArrowAltUp} />}
        />
        <Button
          onClick={() => changeDirection(directions.topRight)}
          icn={<FontAwesomeIcon className="diagonal" icon={faLongArrowAltUp} />}
        />
      </div>
      <div className="d-flex">
        <Button
          onClick={() => changeDirection(directions.left)}
          icn={<FontAwesomeIcon icon={faLongArrowAltLeft} />}
        />
        <Button
          onClick={() => changeDirection(directions.center)}
          icn={<FontAwesomeIcon icon={farCircle} />}
          hidden={!useRadialStyle ? true : undefined}
        />
        <Button
          onClick={() => changeDirection(directions.right)}
          icn={<FontAwesomeIcon icon={faLongArrowAltRight} />}
        />
      </div>
      <div className="d-flex">
        <Button
          onClick={() => changeDirection(directions.bottomLeft)}
          icn={
            <FontAwesomeIcon className="diagonal" icon={faLongArrowAltDown} />
          }
        />
        <Button
          onClick={() => changeDirection(directions.bottom)}
          icn={<FontAwesomeIcon icon={faLongArrowAltDown} />}
        />
        <Button
          onClick={() => changeDirection(directions.bottomRight)}
          icn={
            <FontAwesomeIcon className="diagonal" icon={faLongArrowAltRight} />
          }
        />
      </div>
    </Fragment>
  );
};
