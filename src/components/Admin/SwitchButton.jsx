import React, { useState } from 'react'

const SwitchButton = () => {
    const [isRoomSelected, setIsRoomSelected] = useState(true); // true for Rooms, false for Halls

  return (
    <div>
      <div className='relative flex items-center bg-[#EBEBEB] py-2 px-[14px] rounded-full border mx-4'>
                    {/* Sliding Background */}
                    <div
                        className={`absolute  bg-black transition-transform duration-300 ease-in-out h-[52px] top-[4px] left-[6px] w-[111px] rounded-full ${isRoomSelected ? 'translate-x-0' : 'translate-x-full'}`}
                        style={{ transform: isRoomSelected ? 'translateX(0)' : 'translateX(100%)' }}
                    ></div>
                    <button
                        className={`flex items-center mx-1 justify-center text-lg ${isRoomSelected ? 'text-white' : 'text-black'} w-24 py-2 z-10 rounded-full`}
                        onClick={() => setIsRoomSelected(true)}
                    >
                        Rooms
                    </button>
                    <button
                        className={` flex items-center mr-1 justify-center text-lg ${!isRoomSelected ? 'text-white' : 'text-black'} w-24 py-2 z-10 rounded-full`}
                        onClick={() => setIsRoomSelected(false)}
                    >
                        Halls
                    </button>
                </div>
    </div>
  )
}

export default SwitchButton
