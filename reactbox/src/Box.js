import React, { useState } from "react";

function Box(props) {
  return (
    <div className={`box ${props.color}`} onClick={props.changeColor}></div>
  );
}

export { Box };
