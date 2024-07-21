import React from 'react'

const Card4 = () => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email')
    const number = localStorage.getItem('phone number')
  return (
    <div className="border-2 border-gray-300 shadow-lg w-1/2 m-5 p-6 rounded-lg bg-white">
    <h2 className="text-xl font-semibold mb-4 text-gray-700">User Information</h2>
    <div className="text-lg text-gray-600 mb-2">
        <strong>Name:</strong> {name}
    </div>
    <div className="text-lg text-gray-600 mb-2">
        <strong>Email:</strong> {email}
    </div>
    <div className="text-lg text-gray-600 mb-2">
        <strong>Phone Number:</strong> {number}
    </div>
</div>
  )
}

export default Card4
