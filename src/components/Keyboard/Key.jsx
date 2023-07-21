import React from "react";

function Key(props) {
  const keyDimension =
    props.char.length === 1 ? "w-8 h-10 sm:w-10 sm:h-12" : "flex-grow";

  return (
    <>
      <div
        onClick={props.keyHandler}
        className={`sm:min-w-[2.5rem] sm:min-h-[2.5rem] ${keyDimension} px-2 rounded-md bg-slate-200 flex items-center justify-center text-lg sm:text-xl font-bold cursor-pointer `}
      >
        {props.char}
      </div>
    </>
  );
}

export default Key;
