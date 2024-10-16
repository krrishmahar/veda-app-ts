import React, { useState } from 'react'
import Banner from './components/global/Banner'
import Navbar from './components/Home/Navbar'
import { Carousel } from 'react-responsive-carousel'
import { BsDoorOpenFill } from 'react-icons/bs'
import { FcBookmark } from "react-icons/fc";


const RoomPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3; // Assuming 3 slides in this example

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    var available = true;

    return (
        <>
            <Banner />
            <div>
                <div className="relative flex justify-end items-center px-6 m-2">
                    <Navbar text={'black'} />
                </div>
            </div>
            <div>
                <div className='flex justify-center '>
                    <div className='bg-[#CF484A] text-white font-extrabold text-3xl mt-20 mb-6 py-2 px-8 rounded-full'>Rooms & Halls</div>
                </div>
            </div>


            <div>

                <p className='underlined text-2xl border border-s-2 m-7 px-5 mx-10 border-black border-r-0 border-y-0'><samp className='text-2xl extra-lexa ' >Hotel</samp>  Rooms</p>
                {/* <div className='relative z-20 mt-14'><Booking endpoint={"/api/rooms"} /></div> */}
            </div>
            <div className='border'>
                <div className="room-details grid grid-flow-row grid-rows-1 gap-1  place-items-center ">
                    <div className='border-2 rounded-md w-[1250px] h-60 my-5 shadow-2xl shadow-green-300'>
                        <div className=" flex gap-1">
                            <div className='border mx-6 my-2  py-3 w-[200px] h-[200px] rounded-xl'>
                                <Carousel
                                    selectedItem={currentSlide} // Controls the active slide
                                    onChange={(index) => setCurrentSlide(index)} // Updates the active slide
                                    autoPlay
                                    infiniteLoop
                                    showThumbs={false}
                                    showStatus={false}
                                    showArrows={false}
                                    showIndicators={false}
                                    interval={3000}
                                    transitionTime={800}
                                >
                                    <div className='p-2'>
                                        <img src="/static/react.svg" alt='Slide 1' className='w-full h-auto object-cover' />
                                    </div>
                                    <div>
                                        <img src="/static/react.svg" alt='Slide 2' className='w-full h-auto object-cover' />
                                    </div>
                                    <div>
                                        <img src="/static/react.svg" alt='Slide 3' className='w-full h-auto object-cover' />
                                    </div>
                                </Carousel>

                                {/* Custom Dots */}
                                <div className="flex justify-center mt-3">
                                    {Array.from({ length: totalSlides }, (_, index) => (
                                        <button
                                            key={index}
                                            className={`mx-1 w-3 h-3 rounded-full ${currentSlide === index ? 'bg-gray-900' : 'bg-gray-300'}`}
                                            onClick={() => handleDotClick(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='w-full'>
                                <header className='flex justify-between p-2 items-center'>
                                    <div className="title flex items-center font-extrabold text-2xl px-2">Junior Suite <FcBookmark /> </div>
                                    {available ? //set this via endpoint
                                        <div className='flex items-center px-2'><BsDoorOpenFill color='green' /><samp className='extra-lexa text-green-600'> Vacant</samp>
                                        </div>
                                        :
                                        <div className='flex items-center px-2'><BsDoorOpenFill color='red' /><samp className=' extra-lexa text-red-600'> Occupied</samp></div>
                                    }
                                </header>
                                <div className="meta-data text-sm  font-semibold  px-3  h-11 text-[#B0B0B0]">
                                    <p className=" line-clamp-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde nulla amet aspernatur, iusto laboriosam debitis, molestiae recusandae cum eum illum nesciunt corporis repellat quod et, similique quidem. Corporis laboriosam sit neque mollitia a cum accusantium! Aut impedit voluptates atque velit ipsum, quas repudiandae repellendus sequi ullam at consequatur eius ducimus maxime necessitatibus modi.</p>
                                    <button className='font-bold text-[#31C1FF] '>view more...</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default RoomPage
