import React from "react";
import Word from "./Word";
import Keyboard from "../Keyboard/Keyboard";

function Box(props) {
  return (
    <>
      <div className="main w-screen h-screen flex flex-col items-center justify-center gap-4">
        <div className="box-outer flex justify-center bg-gray-50 border-[2px] border-black px-8 py-8 min-h-[344px] min-w-[280px]">
          <div className="box-inner flex flex-col gap-2">
            {props.words.map((word, index) => (
              <div key={index}>
                <Word
                  word={word}
                  correctWord={props.correctWord}
                  turn={props.turn}
                  setTurn={props.setTurn}
                  userWordRow={index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* <Keyboard keyHandler={props.keyHandler} /> */}
      </div>
    </>
  );
}

export default Box;
