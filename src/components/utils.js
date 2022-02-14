// ****************
// Directions enums
// ****************

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

// ****************
// Properties and style builders
// ****************

export const gradientDirectionFullStyleBuilder = (
  direction,
  isRadialStyle,
  colorFormat1,
  colorFormat2
) => {
  return `background: ${colorFormat1};
  background: -webkit-${isRadialStyle}-gradient(${direction}, ${colorFormat1}, ${colorFormat2});
  background: -moz-${isRadialStyle}-gradient(${direction}, ${colorFormat1}, ${colorFormat2});
  background: ${isRadialStyle}-gradient(${
    isRadialStyle === "radial" ? "ellipse at" : "to"
  } ${getOpossiteDirections(direction)}, ${colorFormat1}, ${colorFormat2});
  `;
};

export const gradientStyleToReactStyleObject = (gradientStyle) => {
  const properties = gradientStyle.split(";", 4);

  return Object.assign(
    {},
    ...properties.map((property) => {
      const propertyArray = property.split(":");
      return {
        [propertyNameToCamelCase(propertyArray[0].replace("\n  ", ""))]:
          propertyArray[1],
      };
    })
  );
};

export const propertyNameToCamelCase = (propertyName) => {
  const words = propertyName.split("-");
  let camelCaseProperty = words[0];

  words.forEach((element, index) => {
    if (index > 0) {
      camelCaseProperty += element.charAt(0).toUpperCase() + element.slice(1);
    }
  });

  return camelCaseProperty;
};
