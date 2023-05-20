import React, { useState } from "react";
import { Box } from "./Box.js";

function Boxes(props) {
  const colors = ["red", "blue", "green", "orange"];

  function changeColor() {
    props.changeColor();
  }

  return (
    <div className="boxes">
      <Box
        color={colors[props.color % colors.length]}
        changeColor={changeColor}
      ></Box>
      <div className="empty"></div>
      <Box
        color={colors[(props.color + 1) % colors.length]}
        changeColor={changeColor}
      ></Box>
      <div className="empty"></div>
      <Box
        color={colors[(props.color + 2) % colors.length]}
        changeColor={changeColor}
      ></Box>
      <div className="empty"></div>
      <Box
        color={colors[(props.color + 3) % colors.length]}
        changeColor={changeColor}
      ></Box>
    </div>
  );
}

export { Boxes };
