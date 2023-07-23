import React, { useEffect, useState } from "react";
import Word from "./Word";
import Keyboard from "../Keyboard/Keyboard";

function Box(props) {
  const [isVisible, setIsVisible] = useState(true);
  const errTimeOut = 2900;

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, errTimeOut);
  }, [props.errMessage]);

  return (
    <>
      <div className="main w-screen h-screen flex flex-col items-center justify-center gap-4 relative">
        <div
          className={`notify absolute right-2 top-2  bg-violet-600 px-4 py-2 text-white rounded-md ${
            isVisible ? "" : "hidden"
          } `}
        >
          <div>{props.errMessage}</div>
          <div className={`bg-white h-1 animate-loading `}></div>
        </div>

        <div className="font-bold text-5xl">
          <span className="text-violet-500">W</span>
          <span className="text-indigo-500">O</span>
          <span className="text-blue-500">R</span>
          <span className="text-green-500">D</span>
          <span className="text-yellow-500">L</span>
          <span className="text-orange-500">E</span>
          <span className="text-red-500">S</span>
        </div>

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

        <Keyboard
          keyHandler={props.keyHandler}
          correctWord={props.correctWord}
          words={props.words}
        />
      </div>
    </>
  );
}

export default Box;
