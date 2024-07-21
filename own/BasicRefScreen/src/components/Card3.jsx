import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Card3 = () => {
    const [number, setNumber]=useState('')
    const navigate = useNavigate();
  return (
    <div className="border-2 border-gray-300 shadow-lg w-1/3 m-5 p-6 rounded-lg bg-white">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Enter Your Mobile number</h2>
            <input
                type="tel"
                placeholder="Your phone number"
                value={number}
                pattern="[0-9]{10}"
                onChange={(e) => setNumber(e.target.value)}
                className="border border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
                className="w-full p-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-300"
                onClick={() => { localStorage.setItem('phone number',number), navigate('/Card4')}}
            >
                Submit
            </button>
            <button
                className="w-full p-2 my-1 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300"
                onClick={() => { navigate('/Card2')}}
            > Previous
            </button>
    </div>
  )
}

export default Card3
