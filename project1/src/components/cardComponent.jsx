import React from 'react';
import { useState, useEffect } from 'react';

const CardComponent = ({title = "5 minute",cardtimer="5"}) => {
    const [time, setTime] = useState(0); // Initialize the timer to 60 seconds
    const [isActive, setIsActive] = useState(false);
    const [savepoints, setSavepoints] = useState([])
    const cardTimer = parseInt(cardtimer)*60
    
    useEffect(() => {
        let interval = null;
        if (isActive && time < cardTimer) {
            interval = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        } else if (time === 0) {
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    const Timer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTime(0);
        setSavepoints([])
    };

    const createSavepoint = () => {
      setSavepoints((prevSavepoints) => [...prevSavepoints, formatTime(time)]);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

};

  return (
    
    <div className="min-w-60 max-w-sm mx-auto bg-white border-4 border-green-500 rounded-lg shadow-lg">
      <div className="p-5 ">
        <h2 className="text-xl font-bold mb-2 flex justify-center">{title}</h2>
        <p className="text-gray-700 ">{cardTimer} seconds</p>
        <p className={` ${time>50 ? 'text-red-600': 'text-black'}  pt-2 `}> Time : {formatTime(time)} </p>
        <p>Savepoints: {savepoints.join(', ')}</p>
        
      </div>


      <div>
      <button className={` w-36 m-2 p-1 text-white font-bold rounded  ${isActive ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'}`} onClick={Timer} >
        {isActive ? "Stop" : "Start" }
      </button>
      <button className='w-21 m-2 p-1 bg-gray-400 text-white font-bold rounded' onClick={createSavepoint} >Savepoint</button>
      <button className='w-20 m-2 p-1 bg-red-600 text-white font-bold rounded'onClick={resetTimer}  >Reset</button>
      </div>
    </div>
  );
}

export default CardComponent;