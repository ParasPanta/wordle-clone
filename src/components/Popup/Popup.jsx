import React from "react";

function Popup(props) {
  return (
    <>
      <div className="absolute z-50 top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-lg">
        <div className=" bg-white rounded-lg flex flex-col justify-center items-center gap-10 px-4 py-4 min-w-[30rem] min-h-[20rem]">
          <div className="message text-3xl">{props.message}</div>
          <div className="message text-1xl">
            You tried <span className="text-red-700">{props.turn}</span> times
          </div>
          <div className="message text-1xl">
            Correct Word is{" "}
            <span className="text-green-700">{props.correctWord}</span>
          </div>
          <button
            type="button"
            className="h-10 px-2 py-1 bg-blue-500 rounded-lg"
            onClick={props.handleNewGame}
          >
            New Game
          </button>
        </div>
      </div>
    </>
  );
}

export default Popup;
