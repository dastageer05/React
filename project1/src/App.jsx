import { useEffect, useState } from 'react'
import CardComponent from './components/cardComponent'
import Navbar from './components/Navbar'
import Input from './components/Input'

function App() {

  const [inputValue, setInputValue] = useState('');
  const [card, setCards] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const createCard = () => {
    setCards([...card,{ title: `Timer ${inputValue} min`, cardtimer: inputValue }]);
    setInputValue('');
  }

  return (
    <>
      <Navbar />
      <div className='m-10 '>
        <div className=" m-4 ">
          <CardComponent title="1 min timer" cardtimer="1" /> </div>
        <div className="m-4 bg-voilet-300">
          <CardComponent title="2 min timer" cardtimer="2" /> </div>
        {card.map((card, index) => (
          <div className="m-4" key={index}>
            <CardComponent title={card.title} cardtimer={card.cardtimer} />
          </div>
        ))}
        <div className='flex '>
        <Input value={inputValue} onChange={handleInputChange} />
        <button className='w-36 m-2 p-1 text-white font-bold rounded bg-green-500 ' onClick={createCard}>Add Timer</button>
        </div>
      </div>


    </>
  )
}

export default App
