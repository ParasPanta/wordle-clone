import React from "react";
import Letter from "./Letter";

function Word(props) {
  const userWord = props.word.toUpperCase().split("");

  if (userWord.length < 5) {
    const upTo = 5 - userWord.length;
    for (let i = 0; i < upTo; i++) {
      userWord.push(" ");
    }
  }

  return (
    <>
      <div className="row flex gap-1">
        {userWord.map((char, index) => (
          <div key={index}>
            <Letter
              char={char}
              correctWord={props.correctWord}
              //   correctState={correctState[index]}
              //   isIncomplete={isIncomplete}
              turn={props.turn}
              //   setTurn={props.setTurn}
              userWordRow={props.userWordRow}
              userWordCol={index}
              userWordLength={userWord.length}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Word;
