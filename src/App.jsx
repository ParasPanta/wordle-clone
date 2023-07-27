import { useEffect, useRef, useState } from "react";
import "./App.css";
import Box from "./components/Preview/Box";
import Popup from "./components/Popup/Popup";
import fiveLetterWords from "./assets/words";
import getRandomNumber from "./utils/RandomNumberGenerator";

import "./styles/animation.css";

function App() {
  // const wordleState = ["grail", "track", "cramp", "crabs", "crazy", "craze"];
  const wordleState = ["", "", "", "", "", ""];

  const inputRef = useRef(null);

  const [randomIndex, setRandomIndex] = useState(0);
  const [turn, setTurn] = useState([0, 0]);
  const [words, setWords] = useState(wordleState);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const staticMessage = "Testing for any errors";

  let correctWord = fiveLetterWords[randomIndex].word.toUpperCase();
  // console.log(fiveLetterWords[randomIndex].word);

  useEffect(() => {
    let checkWord = words[turn[0] - 1];
    if (checkWord === undefined) checkWord = " ";
    if (checkWord.toUpperCase() === correctWord) setIsWin(true);
  }, [turn]);

  useEffect(() => {
    inputRef.current.focus();
    let randomIndex = getRandomNumber(1, 496);
    setRandomIndex(randomIndex);
  }, []);

  const handleInputChange = (e) => {
    const newWords = [...words];
    // console.log(e);
    let newValue = e.target.value;

    newValue = newValue.replace(/[^a-zA-Z]/g, "");

    newWords[turn[0]] = newValue;
    setWords(newWords);
  };

  const simulateBackspaceKey = () => {
    const delKeyEvent = new KeyboardEvent("keydown", {
      key: "Backspace",
      keyCode: 8,
      code: "Backspace",
    });
    console.log("Before dispatch");
    inputRef.current.dispatchEvent(delKeyEvent);
    console.log("After dispatch");
  };

  // console.log(String(words).split(',').join(""))

  const handleKeyClick = (e) => {
    const newWords = [...words];
    // console.log(e.target.textContent);
    let newValue = e.target.textContent;

    // newValue = newValue.replace(/[^a-zA-Z]/g, "");

    if (newValue === "Enter") {
      const enterKeyEvent = new KeyboardEvent("keydown", {
        key: "Enter",
        keyCode: 13,
        code: "Enter",
      });

      hanldeKeyDown(enterKeyEvent);
    } else if (newValue === "Del") {
      // console.log("yes");
      // simulateBackspaceKey();
      // const delKeyEvent = new KeyboardEvent("keydown", {
      //   key: "Backspace",
      //   keyCode: 8,
      //   code: "Backspace",
      // });
      // // hanldeKeyDown(delKeyEvent);
      // inputRef.current.dispatchEvent(delKeyEvent);
    } else {
      if (newWords[turn[0]].length < 5) newWords[turn[0]] += newValue;
      setWords(newWords);
    }
  };

  const hanldeKeyDown = (e) => {
    // console.log(e.nativeEvent)
    // console.log(e.key);

    const newTurn = [...turn];
    // console.log(newTurn[0]);

    // if (words[turn[0]].length > 0 && words[turn[0]].length < 6) {
    //   if (e.key === "Backspace") {
    //     const newValue = [...words];
    //     // console.log(words);
    //     // console.log(newValue);
    //     // console.log(newValue[turn[0]]);
    //     const newWord = newValue[turn[0]].slice(0, -1);
    //     newValue[turn[0]] = newWord;
    //     setWords(newValue);
    //   }
    // }

    if (words[turn[0]].length === 5) {
      if (e.key === "Enter") {
        newTurn[0]++;
        setTurn(newTurn);
      }
    }
  };

  const handleButtonClick = (keyName) => {
    const enterKeyEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      keyCode: 13,
      code: "Enter",
    });
    const delKeyEvent = new KeyboardEvent("keydown", {
      key: "Backspace",
      keyCode: 8,
      code: "Backspace",
    });
    if (keyName === "Enter") inputRef.current.dispatchEvent(enterKeyEvent);
    if (keyName === "Del") inputRef.current.dispatchEvent(delKeyEvent);
  };

  const handleNewGame = () => {
    setWords(["", "", "", "", "", ""]);
    setTurn([0, 0]);
    setIsWin(false);
    const randomNum = getRandomNumber(1, 496);
    setRandomIndex(randomNum);
  };

  return (
    <>
      {turn[0] !== 6 && (
        <input
          type="text"
          className="absolute top-1 left-1 h-10 text-md outline-none px-2 opacity-0"
          maxLength={5}
          ref={inputRef}
          value={words[turn[0]]}
          disabled={isDisabled}
          onChange={handleInputChange}
          onKeyDown={hanldeKeyDown}
        />
      )}

      {/* {turn[0] === 6 && (
        <button
          type="button"
          className="absolute right-1 top-1 h-10 px-2 py-1 bg-blue-500 rounded-lg"
          onClick={handleNewGame}
        >
          New Game
        </button>
      )} */}

      <div onClick={() => inputRef.current.focus()}>
        <Box
          words={words}
          correctWord={correctWord}
          turn={turn}
          setTurn={setTurn}
          keyHandler={handleKeyClick}
          errMessage={staticMessage}
          inRef={inputRef}
        />
      </div>

      {turn[0] <= 6 && isWin && (
        <Popup
          handleNewGame={handleNewGame}
          message="You Win!!! 😀😀😀"
          turn={turn[0]}
          correctWord={correctWord}
        />
      )}
      {turn[0] === 6 && !isWin && (
        <Popup
          handleNewGame={handleNewGame}
          message="You Lose!!! 😥😥😥"
          turn={turn[0]}
          correctWord={correctWord}
        />
      )}
    </>
  );
}

export default App;
