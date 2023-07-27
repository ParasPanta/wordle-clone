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

        {/* <div className="test-button absolute top-[10rem] left-2 px-4 py-2 bg-blue-400 rounded-lg cursor-pointer">
          Delete
        </div> */}

        {/* <div className="hover-animate absolute top-[10rem] left-20 group">
          <div className="relative px-4 py-2 bg-transparent group-hover:bg-green- cursor-pointer overflow-hidden delay-[800ms]">
            <span className="bg-gradient-to-r from-green-100 to-green-500 w-full h-0.5 absolute left-[-100%] top-0 group-hover:left-full duration-200 group-hover:duration-[600] "></span>
            <span className="bg-gradient-to-b from-green-100 to-green-500 w-0.5 h-full absolute top-[-100%] right-0 group-hover:top-full duration-200 delay-200 group-hover:duration-[400]"></span>
            <span className="bg-gradient-to-l from-green-100 to-green-500 w-full h-0.5 absolute right-[-100%] bottom-0 group-hover:right-full duration-200 delay-[400ms] group-hover:duration-[200]"></span>
            <span className="bg-gradient-to-t from-green-100 to-green-500 w-0.5 h-full absolute bottom-[-100%] left-0 group-hover:bottom-full duration-200 delay-[600ms]"></span>
            Hover Me
          </div>
        </div> */}

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
