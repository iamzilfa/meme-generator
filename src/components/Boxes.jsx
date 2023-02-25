import React, { useState } from "react";
import { boxes } from "./BoxesData";
import BoxTwo from "./BoxTwo";

const Boxes = (props) => {
  const [squares, setSquares] = useState(boxes);

  function toggle(id){
    console.log(id)
  }

  const squareElements = squares.map((square) => (
    <BoxTwo
      key={square.id}
      id={square.id}
      on={square.on}
      handleClick = {toggle}
    />
  ));

  return <main>{squareElements}</main>;
};

export default Boxes;
