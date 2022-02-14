import { Fragment, useState } from "react";
import { ChromePicker } from "react-color";

export const SidebarColors = ({ color1, color2, setColor1, setColor2 }) => {
  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [showColorPicker2, setShowColorPicker2] = useState(false);
  return (
    <Fragment>
      <p className="lbl">
        <label>Colors</label>
      </p>
      <div className="d-flex">
        <div className="d-block">
          <button
            className="colorPicker"
            onClick={() =>
              setShowColorPicker1((showColorPicker1) => !showColorPicker1)
            }
            style={{ backgroundColor: color1 }}
          ></button>
          {showColorPicker1 && (
            <ChromePicker
              name="colorPicker"
              color={color1}
              onChange={(updatedColor1) => {
                setColor1(updatedColor1.hex);
              }}
            />
          )}
        </div>
        <div className="d-block">
          <button
            className="colorPicker"
            onClick={() =>
              setShowColorPicker2((showColorPicker2) => !showColorPicker2)
            }
            style={{ backgroundColor: color2 }}
          ></button>
          {showColorPicker2 && (
            <ChromePicker
              name="colorPicker"
              color={color2}
              onChange={(updatedColor2) => setColor2(updatedColor2.hex)}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};
