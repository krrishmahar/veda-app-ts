import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { BsDoorOpenFill } from 'react-icons/bs'
import { FcBookmark } from "react-icons/fc";
import Layout from './Layout'
import { IoPeople } from 'react-icons/io5'
import { RiHotelBedLine } from 'react-icons/ri'
import HoverRating from './components/home/HoverRating'
import { FaBath, FaTv, FaWifi } from 'react-icons/fa'
import Marker from './components/global/Marker'
import { TbAirConditioning } from 'react-icons/tb'
import { GiKnifeFork } from 'react-icons/gi'

const RoomPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3; // Assuming 3 slides in this example

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    // *** Created a dummy data object with room details ***
    const [roomsData] = useState([
        {
            id: 1,
            name: 'Junior Suite',
            available: true,
            people: 2,
            beds: 2,
            price: 15000,
            amenities: [<FaWifi />, <FaBath />, <FaTv />, <TbAirConditioning />, <GiKnifeFork />],
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde nulla amet aspernatur.",
        },
        {
            id: 2,
            name: 'Deluxe Suite',
            available: false,
            people: 4,
            beds: 3,
            price: 25000,
            amenities: [<FaWifi />, <FaBath />, <FaTv />, <TbAirConditioning />, <GiKnifeFork />],
            description: "Luxurious suite with ample space and world-class facilities. Perfect for a grand stay.",
        },
        {
            id: 2,
            name: 'Deluxe Suite',
            available: false,
            people: 4,
            beds: 3,
            price: 25000,
            amenities: [<FaWifi />, <FaBath />, <FaTv />, <TbAirConditioning />, <GiKnifeFork />],
            description: "Luxurious suite with ample space and world-class facilities. Perfect for a grand stay.",
        },
        {
            id: 2,
            name: 'Deluxe Suite',
            available: true,
            people: 4,
            beds: 3,
            price: 25000,
            amenities: [<FaWifi />, <FaBath />, <FaTv />, <TbAirConditioning />, <GiKnifeFork />],
            description: "Luxurious suite with ample space and world-class facilities. Perfect for a grand stay.",
        },
        {
            id: 2,
            name: 'Deluxe Suite',
            available: true,
            people: 4,
            beds: 3,
            price: 25000,
            amenities: [<FaWifi />, <FaBath />, <FaTv />, <TbAirConditioning />, <GiKnifeFork />],
            description: "Luxurious suite with ample space and world-class facilities. Perfect for a grand stay.",
        },
        {
            id: 2,
            name: 'Deluxe Suite',
            available: true,
            people: 4,
            beds: 3,
            price: 25000,
            amenities: [<FaWifi />, <FaBath />, <FaTv />, <TbAirConditioning />, <GiKnifeFork />],
            description: "Luxurious suite with ample space and world-class facilities. Perfect for a grand stay.",
        },
        // Add more rooms here if needed
    ]);

    return (
        <Layout>
            <div>
                <Marker marker={"Rooms & Halls"} />
            </div>
            <div>
                <p className='underlined text-2xl border border-s-2 m-7 px-5 mx-10 border-black border-r-0 border-y-0'>
                    <samp className='text-2xl extra-lexa'>Hotel</samp> Rooms
                </p>
            </div>

            {/* Applied `overflow-y-hidden` to the main div */}
            <div className='main border py-11 min-h-[900px]: max-h-[1280px] overflow-y-scroll flex flex-col items-center '>
                {/* Mapped over roomsData to render room details dynamically */}
                {roomsData.map(room => (
                    <div key={room.id} className={`border-2  rounded-md w-[1250px] h-[17rem] my-5 shadow-2xl ${!room.available ? 'shadow-red-300' : 'shadow-green-300'}`}>
                        <div className="flex gap-1">
                            <div className='border  mx-6 my-2 py-3 w-[200px] h-[200px] rounded-xl'>
                                <Carousel
                                    selectedItem={currentSlide}
                                    onChange={(index) => setCurrentSlide(index)}
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
                                    <div className="room_name flex items-center font-extrabold text-2xl px-2">
                                        {room.name} <FcBookmark />
                                    </div>
                                    {room.available ? (
                                        <div className='flex items-center px-2'>
                                            <BsDoorOpenFill color='green' /><samp className='extra-lexa text-green-600'> Vacant</samp>
                                        </div>
                                    ) : (
                                        <div className='flex items-center px-2'>
                                            <BsDoorOpenFill color='red' /><samp className=' extra-lexa text-red-600'> Occupied</samp>
                                        </div>
                                    )}
                                </header>

                                <div className="meta-data text-sm font-semibold px-3 mb-3 h-11 text-[#B0B0B0]">
                                    <p className="line-clamp-2">{room.description}</p>
                                    <button className='font-bold text-[#31C1FF]'>view more...</button>
                                </div>

                                <div className="flex justify-start mx-6 my-1">
                                    <div className='people beds flex items-center gap-[2px]'>
                                        <IoPeople /> : <samp className='text-[#909090] px-1'><samp className='font-semibold text-[#656565]'>{room.people}</samp> people</samp>
                                        <RiHotelBedLine /> : <samp className='text-[#909090] px-1'><samp className='font-semibold text-[#656565]'>{room.beds}</samp> beds</samp>
                                    </div>
                                </div>

                                <div className="rating mx-6">
                                    <HoverRating />
                                </div>

                                <div className="lower flex justify-between">
                                    <div className="ammenities flex m-3 mx-6 gap-11 ">
                                        {room.amenities.map((amenity, index) => (
                                            <div key={index} className='w-10 h-12 border shadow-[#AEAEAE] flex items-center justify-center rounded-xl shadow-lg'>
                                                {amenity}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="price flex">
                                        <div className='m-2 px-3 flex flex-col justify-center'>
                                            <div className="price text-sm text-[#909090] mb-1">
                                                <samp className="extra-lexa text-2xl text-black">{room.price} RS.</samp> per day
                                            </div>
                                            <button className="p-3 border-black extra-lexa border-[3px] rounded-2xl">RESERVE NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default RoomPage
