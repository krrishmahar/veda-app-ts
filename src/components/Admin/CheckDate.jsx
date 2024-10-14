import React from 'react'
import '../../App.css'

//adding fucntion to fetch avail rooms and shits


const CheckDate = () => {
    return (
        <>
            <div className='checkDates mx-11 '>
                <div className="date mb-3 flex font-[700] text-2xl justify-center items-center text-[#727272]">
                    October 12 2024
                </div>
                <div className=" flex flex-col border-[20px] p-6 rounded-xl border-[#EBEBEB] ">
                    <div className='grid grid-cols-4 gap-0'>
                        <div className='grid grid-cols-2'>
                            <div className='text-2xl pl-[3.5rem]'>
                                <div className='gray-bold'>Today's</div>
                                <div className='font-extrabold '>Check-in</div>
                            </div>
                            <div className='text-6xl pt-1 pl-12 font-extrabold text-[#22CB00]'>2</div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='text-2xl pl-8'>
                                <div className='gray-bold'>Today's</div>
                                <div className='font-extrabold '>Check-out</div>
                            </div>
                            <div className='text-6xl pt-1 pl-8 font-extrabold text-[#22CB00]'>2</div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='text-2xl'>
                                <div className='gray-bold'>Total</div>
                                <div className='font-extrabold w-56'>Available Rooms</div>
                            </div>
                            <div className='text-6xl pt-1 pl-20 font-extrabold text-[#22CB00]'>2</div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='text-2xl pl-2'>
                                <div className='gray-bold'>Total</div>
                                <div className='font-extrabold '>No. of Guest</div>
                            </div>
                            <div className='text-6xl pt-1 pl-12 font-extrabold text-[#22CB00]'>2</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default CheckDate;