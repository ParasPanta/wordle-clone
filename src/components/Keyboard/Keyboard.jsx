import React from "react";
import KeyRow from "./KeyRow";

function Keyboard(props) {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Del"],
  ];

  return (
    <>
      <div className="flex flex-col gap-2">
        {keys.map((key, index) => (
          <KeyRow key={index} row={key} keyHandler={props.keyHandler} />
        ))}
      </div>
    </>
  );
}

export default Keyboard;
