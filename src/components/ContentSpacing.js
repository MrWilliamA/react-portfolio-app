import React from "react";

const ContentSpacing = (props) => {
  const gapSize = props.value;
  let size = 100;

  if (gapSize === "large") {
    size = 160;
  } else if (gapSize === "small") {
    size = 100;
  }

  return <div style={{ height: size }}></div>;
};

export default ContentSpacing;
