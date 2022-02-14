export const directions = Object.freeze({
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
  center: "center",
  topLeft: "top-left",
  topRight: "top-right",
  bottomLeft: "bottom-left",
  bottomRight: "bottom-right",
});

export const gradientDirectionFullStyleBuilder = (
  direction,
  isRadiantStyle,
  colorFormat1,
  colorFormat2
) => {
  return `background: ${colorFormat1};
  background: -webkit-${isRadiantStyle}-gradient(${direction}, ${colorFormat1}, ${colorFormat2});
  background: -moz-${isRadiantStyle}-gradient(${direction}, ${colorFormat1}, ${colorFormat2});
  background: ${isRadiantStyle}-gradient(${
    direction === directions.center
      ? "ellipse at center"
      : getOpossiteDirections(direction)
  }, ${colorFormat1}, ${colorFormat2});
  `;
};

export const getOpossiteDirections = (direction) => {
  const directionsArray = direction.split("-");

  const oposites = {
    top: directions.bottom,
    bottom: directions.top,
    right: directions.left,
    left: directions.right,
    center: directions.center,
  };

  if (directionsArray.length <= 1) return oposites[directionsArray[0]];
  return oposites[directionsArray[0]] + " " + oposites[directionsArray[1]];
};
