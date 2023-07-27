import React from "react";
import IndexItem from "./../../utils/ItemIndex";

function Key(props) {
  const correctWord = props.correctWord;
  const currentChar = props.char;
  const turn = props.turn;

  const words = String(props.words).split(",").join("");
  const wordsArray = words.split("");

  while (wordsArray.length > turn[0] * 5) {
    wordsArray.pop();
  }

  // console.log(currentChar, IndexItem(wordsArray, currentChar.toLowerCase()));
  const indexSet = IndexItem(wordsArray, currentChar.toLowerCase());

  const wordsSet = new Set(wordsArray);
  // console.log(wordArray);

  let correctLetter = false;
  let correctIndex = false;
  let notUsedLetter = false;

  if (correctWord.includes(currentChar)) correctLetter = true;
  // if (correctWord.indexOf(currentChar) === userWordCol) correctIndex = true;
  if (correctLetter) {
    // console.log(IndexItem(correctWord.split(""), currentChar));
    const correctIndexSet = IndexItem(correctWord.split(""), currentChar);

    correctIndexSet.forEach((value) => {
      if (indexSet.has(value)) {
        correctIndex = true;
      }
    });
  }
  notUsedLetter = !wordsSet.has(currentChar.toLowerCase());

  // if (currentChar === "A") {
  //   console.log(wordsSet);
  //   console.log(wordsSet.has(currentChar.toLowerCase()));
  // }

  const keyDimension =
    props.char.length === 1 ? "w-8 h-10 sm:w-10 sm:h-12" : "flex-grow";

  const bgColor = !notUsedLetter
    ? correctLetter
      ? correctIndex
        ? "bg-green-500"
        : "bg-amber-500"
      : "bg-gray-500"
    : "bg-slate-200 text-black";

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
