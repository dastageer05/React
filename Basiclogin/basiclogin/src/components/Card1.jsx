import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Card1 = () => {
    const [name ,setName] = useState('');
    const navigate = useNavigate();

    const submit = () =>{
        localStorage.setItem('name',name),
        navigate('/Card2')
    }
    return (
        // <div className="border-2 border-black shadow-lg w-1/3 m-5">
        //     <h2>Name</h2>
        //     <input type="text" placeholder="Your name" value={name} onChange={(e) => {setName(e.target.value)}}/>
        //     <button className='w-21 m-2 p-1 bg-green-400 text-black font-bold rounded' onClick={submit} >Submit</button>
        // </div>
        <div className="border-2 border-gray-300 shadow-lg w-1/3 m-5 p-6 rounded-lg bg-white">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Enter Your Name</h2>
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
                className="w-full p-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-300"
                onClick={submit}
            >
                Submit
            </button>
        </div>
    )
}

export default Card1
