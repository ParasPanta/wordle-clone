import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Box from "./components/Preview/Box";
import Popup from "./components/Popup/Popup";
import fiveLetterWords from "./assets/words";
import getRandomNumber from "./utils/RandomNumberGenerator";

function App() {
  // const wordleState = ["grail", "track", "cramp", "crabs", "crazy", "craze"];
  const wordleState = ["", "", "", "", "", ""];

  const inputRef = useRef(null);

  const [randomIndex, setRandomIndex] = useState(0);
  const [turn, setTurn] = useState([0, 0]);
  const [words, setWords] = useState(wordleState);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isWin, setIsWin] = useState(false);

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
    let newValue = e.target.value;

    newValue = newValue.replace(/[^a-zA-Z]/g, "");

    newWords[turn[0]] = newValue;
    setWords(newWords);
  };

  const handleKeyClick = (e) => {
    const newWords = [...words];
    // console.log(e.target.textContent);
    let newValue = e.target.textContent;

    // newValue = newValue.replace(/[^a-zA-Z]/g, "");

    if (newWords[turn[0]].length < 5) newWords[turn[0]] += newValue;
    setWords(newWords);
  };

  const hanldeKeyDown = (e) => {
    // console.log(e.key);

    const newTurn = [...turn];
    // console.log(newTurn[0]);
    if (words[turn[0]].length === 5) {
      if (e.key === "Enter") {
        newTurn[0]++;
        setTurn(newTurn);
      }
    }
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
          className="absolute top-1 left-1 h-10 text-md outline-none px-2 opacity-"
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
          // keyHandler={handleKeyClick}
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
