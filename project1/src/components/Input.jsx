// src/Input.js
import React from 'react';

const Input = ({ value, onChange }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className="mt-1 block min-w-0 max-w-sm mx-auto px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        >
            <option value="" disabled>Select a timer to Add</option>
            {[...Array(10).keys()].map(num => (
                <option key={num + 1} value={num + 1}> {num + 1} minute</option>
            ))}

        </select>
    );
};

export default Input;
