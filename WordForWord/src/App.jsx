import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentInputWord, setCurrentInputWord] = useState('');
  const [correctGuessAlpha, setCorrectGuessAlpha] = useState('');
  const [userWordList, setUserWordList] = useState('');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  // testing can use useref element to store level in use effect
  const [item, setItem] = useState('');
  const [correctPositions, setCorrectPositions] = useState([]);
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  // testing useRef can use to store item throughtout the execution not change by rerender
  const [items, setItems] = useState(['fire', 'wind', 'hunt', 'brush', 'react', 'input', 'dragon', 'mumbai', 'banana', 'msdhoni', 'brick', 'cloud', 'dream', 'circle', 'whale', 'journey', 'mystery']);

  useEffect(() => {
    if (items.length > 0) {
      const randomIndex = Math.floor(Math.random() * items.length);
      const initialItem = items[randomIndex];
      setItem(initialItem);
    }
  }, [items]);

  useEffect(() => {
    if (isCorrectGuess) {
      alert(`You guessed it right, the word is ${item}`);
      calscore();
      setUserWordList('');
      setCorrectGuessAlpha('');
      setCorrectPositions([]);
      setIsCorrectGuess(false);

      const newItems = items.filter(it => it !== item); // Remove the guessed item
      setItems(newItems);

      if (newItems.length > 0) {
        const randomIndex = Math.floor(Math.random() * newItems.length);
        const newItem = newItems[randomIndex];
        setItem(newItem);
        setLevel(prevLevel => prevLevel + 1);
      }
    }
  }, [isCorrectGuess, item, items]);

  const calscore = () => {
    if (userWordList.length > 0) {
      let sscore = userWordList.trim().split(/\s+/).length;
      let arrscore = 100 - (sscore * 10);
      setScore(prevScore => prevScore + arrscore);
    } else {
      setScore(prevScore => prevScore + 100);
    }
  };

  const check = () => {
    if (currentInputWord.length !== item.length) {
      alert(`Length of word should be ${item.length}`);
    } else {
      if (currentInputWord === item) {
        setIsCorrectGuess(true);
      } else {
        setUserWordList(prevUserWordList => prevUserWordList + " " + currentInputWord);
        let newCorrectGuessAlpha = correctGuessAlpha;
        let newCorrectPositions = [...correctPositions];

        for (let i = 0; i < currentInputWord.length; i++) {
          const char = currentInputWord[i];
          if (item[i] === char) {
            newCorrectPositions[i] = char;
          } else {
            if (item.includes(char) && !newCorrectGuessAlpha.includes(char)) {
              newCorrectGuessAlpha += " " + char;
            }
          }
        }
        setCorrectGuessAlpha(newCorrectGuessAlpha);
        setCorrectPositions(newCorrectPositions);
      }
      setCurrentInputWord('');
    }
  };

  const inputcondition = (e) => {
    const ilength = e.target.value;
    if (ilength.length <= item.length) {
      setCurrentInputWord(ilength);
    }
  };

  const letterCounts = (str) => {
    return str.split('').reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    }, {});
  };

  return (
    <>
      <div className="p-4 max-w-xs mx-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-xl shadow-lg space-y-3">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2 text-center font-sans transform hover:scale-105 hover:underline hover:text-yellow-400 duration-300 ease-in-out ">
          Level: {level}
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-100 mb-2 text-center font-sans   hover:scale-105 hover:underline hover:text-yellow-300 duration-300 ease-in-out ">
          Score: {score}
        </h2>
        <div className="text-gray-200 text-xs md:text-sm mb-2 text-center font-sans">
          Correct Guessed Alphabets:
          <div className="text-gray-100 mt-1">
            {correctGuessAlpha || "None"}
          </div>
        </div>
        <div className="text-gray-200 text-xs md:text-sm mb-3 text-center font-sans">
          Previous Words you Entered:
          <div className="text-gray-100 mt-1">
            {userWordList || "None"}
          </div>
        </div>
        <div className="text-gray-100 mb-2 text-lg md:text-xl text-center font-sans">
          {item.split('').map((char, index) => (
            <span
              key={index}
              className="mx-1 p-1 bg-gray-700 text-white rounded-full border border-gray-600 transition-transform transform hover:scale-110 hover:bg-gray-600 animate-pulse duration-300 ease-in-out"
            >
              {correctPositions[index] ? (
                <>
                  {correctPositions[index]}
                  {letterCounts[correctPositions[index]] > 1 ? ` (${letterCounts[correctPositions[index]]})` : ''}
                </>
              ) : (
                '-'
              )}
            </span>
          ))}
        </div>
        <input
          type="text"
          placeholder={`Enter ${item.length} letter word`}
          value={currentInputWord}
          onChange={inputcondition}
          className="w-full p-2 mb-2 border-2 border-gray-300 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 hover:bg-gray-700 hover:border-gray-400 focus:border-purple-600 font-mono text-sm md:text-base"
        />
        <button
          onClick={check}
          className="w-full py-2 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition ease-in-out duration-300 hover:scale-105 text-sm md:text-base"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
