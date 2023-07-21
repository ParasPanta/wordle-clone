import React from "react";

function Letter(props) {
  let correctLetter = false;
  let correctIndex = false;
  let blankLetter = false;
  let cursorHere = false;

  const currentRow = props.turn[0];

  const currentChar = props.char;
  const userWordRow = props.userWordRow;
  const userWordCol = props.userWordCol;
  const correctWord = props.correctWord.toUpperCase().split("");

  // if (userWordRow === 1) console.log(correctWord);

  if (correctWord.includes(currentChar)) correctLetter = true;
  if (correctWord.indexOf(currentChar) === userWordCol) correctIndex = true;
  if (currentChar === " ") blankLetter = true;
  if (userWordRow >= currentRow) blankLetter = true;
  if (userWordCol === props.userWordLength) {
    cursorHere = true;
  } else {
    cursorHere = false;
  }

  const bgColor = !blankLetter
    ? correctLetter
      ? correctIndex
        ? "bg-green-500"
        : "bg-amber-500"
      : "bg-gray-500"
    : "bg-white border-[2px] border-gray-400";

  // const outlineStyle = cursorHere ? "border-[2px] solid" : "";

  return (
    <>
      <div
        // className={`w-10 h-10 bg-${bgColor} flex justify-center items-center text-3xl ${outlineStyle}`}
        className={`w-10 h-10 ${bgColor} flex justify-center items-center text-3xl`}
      >
        {props.char}
      </div>
    </>
  );
}

export default Letter;
