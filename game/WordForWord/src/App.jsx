import { useEffect, useState } from 'react'
import './App.css'



function App() {

  let [currentInputWord, setCurrentInputWord] = useState('')
  let [correctGuessAlpha, setCorrectGuessAlpha] = useState('')
  let [userWordList, setUserWordList] = useState('')
  let [score, setScore] = useState(0)
  let [level, setLevel] = useState(1)
  let [item, setItem] = useState('')
  // let item ;
  const items = ['fire', 'wind', 'hunt', 'brush', 'react', 'input', 'dragon', 'mumbai', 'banana', 'msdhoni', 'brick', 'cloud', 'dream', 'circle', 'whale', 'journey', 'mystery'];

  useEffect(() => {
    if (items.length > 0) {
      const randomIndex = Math.floor(Math.random() * items.length);
      const initialItem = items[randomIndex];
      setItem(initialItem);
    }
  }, []);

  let calscore = () => {
    console.log(userWordList)
    if (userWordList.length > 0) {
      let sscore = userWordList.trim().split(/\s+/).length;
      let arrscore = 100 - (sscore * 10);
      setScore(prevScore => prevScore + arrscore) //arrscore
      console.log(sscore, arrscore)
    } else {
      // setScore(100)
      setScore(prevScore => prevScore + 100);
    }

  }

  const check = () => {
    if (currentInputWord.length !== item.length) {
      alert(` length of word should be ${item.length}`)
    } else {
      if (currentInputWord === item) {
        alert(`You guessed it right motherfucker the word is ${item}`);
        calscore();
        setUserWordList('');
        setCorrectGuessAlpha('');
        // Select a new random word and remove it from the list
        const newItems = [...items]; // Copy items array 
        const randomIndex = Math.floor(Math.random() * newItems.length);
        const newItem = newItems[randomIndex];
        setItem(newItem);
        newItems.splice(randomIndex, 1); // Remove the selected word
        setLevel(prevLevel => prevLevel + 1);

      } else {
        setUserWordList(prevuserWordList => prevuserWordList + " " + currentInputWord);
        // setUserWordList([...userWordList, currentInputWord]);
        let newcorrectGuessAlpha = correctGuessAlpha;
        for (const char of currentInputWord) {
          console.log(item)
          if (item.includes(char) && !newcorrectGuessAlpha.includes(char)) {
            let countOcc =0 ;
            for (const nchar of item) {
              if (nchar === char) {
                countOcc += 1;
              }
            }
            console.log(countOcc)
            if (countOcc > 1) {
              newcorrectGuessAlpha = newcorrectGuessAlpha + " " + countOcc + char;
            } else {
              newcorrectGuessAlpha = newcorrectGuessAlpha + " " + char;
            }
          }
        }
        setCorrectGuessAlpha(newcorrectGuessAlpha);
      }
      setCurrentInputWord('');
      // Clear input after checking
    }
  };

  const inputcondition = (e) => {
    const ilength = e.target.value
    if (ilength.length <= item.length) {
      setCurrentInputWord(ilength)
    }
  }

  const dashes = '-'.repeat(item.length);

  return (
    <>
      <div className=''>
        <h1 className="text-3xl font-bold text-white mb-7">Level : {level}</h1>

        <h1 className="text-xl font-bold text-gray-50 my-5">Score : {score}</h1>
        <div className='text-gray-100 my-3'>Correct Guessed Alphabate :{correctGuessAlpha}</div>

        <div className='text-gray-100 my-3'>Previous Words you Enter :{userWordList}</div>
        {/* <div>-----</div> */}
        <div className="text-gray-100 my-3">
          {dashes.split('').map((dash) => (
            <span className="mx-1">{dash}</span>
          ))}
        </div>

        <input type="text" placeholder={` Enter ${item.length} letter word`} value={currentInputWord} onChange={inputcondition} className='rounded-lg focus:bg-slate-600 focus:text-white p-[5px] ' />

        <button onClick={check} className=' border-2 hover:bg-green-600 hover:text-black border-green-700 bg-green-700 text-white m-3 font-semibold rounded-lg p-[5px]'>Submit</button>
      </div>
    </>
  )
}

export default App
