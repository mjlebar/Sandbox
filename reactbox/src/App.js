import "./App.css";
import { useState } from "react";
import { Boxes } from "./Boxes.js";

function App() {
  let [color, setColor] = useState(0);
  function changeColor() {
    console.log("hello");
    color++;
    console.log(color);
    setColor(color);
  }
  return (
    <div className="App">
      <Boxes color={color} changeColor={changeColor}></Boxes>
      <Boxes color={color + 1} changeColor={changeColor}></Boxes>
      <Boxes color={color + 2} changeColor={changeColor}></Boxes>
      <Boxes color={color + 3} changeColor={changeColor}></Boxes>
    </div>
  );
}

export default App;
