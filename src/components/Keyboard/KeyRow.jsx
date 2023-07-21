import React from "react";
import Key from "./Key";

function KeyRow(props) {
  return (
    <>
      <div className="flex gap-2 justify-center">
        {props.row.map((char, index) => (
          <Key key={index} char={char} keyHandler={props.keyHandler} />
        ))}
      </div>
    </>
  );
}

export default KeyRow;
