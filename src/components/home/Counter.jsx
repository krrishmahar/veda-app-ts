import React from 'react';
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';

const Counter = ({ guests, setGuests, label }) => {
    const handleIncrement = () => setGuests(guests + 1);
    const handleDecrement = () => {
        if (guests > 1) setGuests(guests - 1); // Prevent going below 1
    };

    return (
        <div className="flex flex-col items-start justify-center rounded-md w-40">
            <label className="mr-4 text-base font-medium mb-1">{label}</label>
            <div className="flex items-center bg-[#F4F4F4] border border-black gap-4 rounded h-9">
                <button
                    onClick={handleDecrement}
                    className="px-2 py-1 text-black rounded-l-md"
                >
                    <FiMinus />
                </button>
                <samp className='w-16 text-center'>{guests}</samp>
                <button
                    onClick={handleIncrement}
                    className="px-2 py-1 text-black rounded-r-md"
                >
                    <IoMdAdd />
                </button>
            </div>
        </div>
    );
};

export default Counter;
