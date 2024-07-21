import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Card2 = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
  return (
    <div className="border-2 border-gray-300 shadow-lg w-1/3 m-5 p-6 rounded-lg bg-white">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Enter Your Email</h2>
            <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
                className="w-full p-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-300"
                onClick={() => { localStorage.setItem('email',email), navigate('/Card3')}}
            > Submit
            </button>
            <button
                className="w-full p-2 my-1 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300"
                onClick={() => { navigate('/')}}
            > Previous
            </button>
        </div>
  )
}

export default Card2
