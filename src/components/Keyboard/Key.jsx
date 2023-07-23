import React from "react";

function Key(props) {
  const correctWord = props.correctWord;
  const currentChar = props.char;
  // const words = String(props.words).split(",").join("");
  // console.log(words.length);

  let correctLetter = false;
  let correctIndex = false;
  let blankLetter = false;
  if (correctWord.includes(currentChar)) correctLetter = true;
  // if (correctWord.indexOf(currentChar) === userWordCol) correctIndex = true;
  if (currentChar === " ") blankLetter = true;

  const keyDimension =
    props.char.length === 1 ? "w-8 h-10 sm:w-10 sm:h-12" : "flex-grow";

  const bgColor = !blankLetter
    ? correctLetter
      ? correctIndex
        ? "bg-green-500"
        : "bg-amber-500"
      : "bg-gray-500"
    : "bg-slate-200";

  return (
    <>
      <div
        onClick={props.keyHandler}
        className={`sm:min-w-[2.5rem] sm:min-h-[2.5rem] ${keyDimension} ${bgColor} text-white px-2 rounded-md flex items-center justify-center text-lg sm:text-xl font-bold cursor-pointer `}
      >
        {props.char}
      </div>
    </>
  );
}

export default Key;
