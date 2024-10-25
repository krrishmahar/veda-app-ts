import { React, useState, useEffect } from 'react';
import { BsDoorOpenFill } from 'react-icons/bs';
import { FcBookmark } from 'react-icons/fc';
import { IoPeople } from 'react-icons/io5';
import { RiHotelBedLine } from 'react-icons/ri';
import { Carousel } from 'react-responsive-carousel';
import HoverRating from './HoverRating';
import axios from 'axios';
import { FaBath, FaTv, FaWifi } from 'react-icons/fa'
import { TbAirConditioning } from 'react-icons/tb'
import { GiKnifeFork } from 'react-icons/gi'

const RoomsHalls = ({ endpoint }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [items, setItems] = useState([]);  // Initialize as an empty array
    const totalSlides = 3;

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    // Fetch room or hall data from the API based on the endpoint prop
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`http://localhost:8080${endpoint}`);
                setItems(response.data);  // Assumes backend sends an array of rooms/halls
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchItems();
    }, [endpoint]);

    return (
        <>
            <div className='main border py-11 min-h-[900px]: max-h-[1280px] overflow-y-scroll flex flex-col items-center '>
                {items.length > 0 ? (
                    items.map(item => (
                        <div key={item.id} className={`border-2 rounded-md w-[1250px] h-[17rem] my-5 shadow-2xl ${!item.availability ? 'shadow-red-300' : 'shadow-green-300'}`}>
                            <div className="flex gap-1">
                                <div className='border mx-6 my-5  w-[200px] h-[200px] rounded-xl'>
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
                                        <div >
                                            <img src={item.imageUrl} alt='Slide 1' className='w-full h-[200px]  object-cover border-2 rounded-xl' />
                                        </div>
                                        <div>
                                            <img src={item.imageUrl} alt='Slide 2' className='w-full h-[200px]  object-cover border-2 rounded-xl' />
                                        </div>
                                        <div>
                                            <img src={item.imageUrl} alt='Slide 3' className='w-full h-[200px]  object-cover border-2 rounded-xl' />
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
                                        {endpoint === "/api/rooms" && <div className="room_name flex items-center font-extrabold text-2xl px-2">
                                            {item.roomName} <FcBookmark />
                                        </div>}
                                        {endpoint === "/api/halls" && <div className="room_name flex items-center font-extrabold text-2xl px-2">
                                            {item.hallName} <FcBookmark />
                                        </div>}
                                        {item.availability ? (
                                            <div className='flex items-center px-2'>
                                                <BsDoorOpenFill color='green' /><samp className='extra-lexa text-green-600'> Vacant</samp>
                                            </div>
                                        ) : (
                                            <div className='flex items-center px-2'>
                                                <BsDoorOpenFill color='red' /><samp className='extra-lexa text-red-600'> Occupied</samp>
                                            </div>
                                        )}
                                    </header>

                                    <div className="meta-data text-sm font-semibold px-3 mb-3 h-11 text-[#B0B0B0]">
                                        <p className="line-clamp-2">{item.metaData}</p>
                                        <button className='font-bold text-[#31C1FF]'>view more...</button>
                                    </div>

                                    <div className="flex justify-start mx-6 my-1">
                                        <div className='people beds flex items-center gap-[2px]'>
                                            <IoPeople /> <samp className='text-[#909090] px-1'>{endpoint === "/api/rooms" && <samp className='font-semibold text-[#656565]'>: {item.roomCapacity}</samp>}
                                                {endpoint === "/api/halls" && <samp className='font-semibold text-[#656565]'>: {item.hallCapacity}</samp>} people</samp>
                                            <RiHotelBedLine /><samp className='text-[#909090] px-1'><samp className='font-semibold text-[#656565]'>: {item.beds}</samp> beds</samp>
                                        </div>
                                    </div>

                                    <div className="rating mx-6">
                                        <HoverRating />
                                    </div>

                                    <div className="lower flex justify-between">
                                        { <div className="ammenities flex m-3 mx-6 gap-11 ">
                                            {/* {item.amenities.map((amenity, index) => (
                                                <div key={index} className='w-10 h-12 border shadow-[#AEAEAE] flex items-center justify-center rounded-xl shadow-lg'>
                                                    {amenity}
                                                </div>
                                            ))} */}
                                            {endpoint === "/api/rooms" && <div className='w-10 h-12 border shadow-[#AEAEAE] flex items-center justify-center rounded-xl shadow-lg'>
                                                {item.ac ? <FaWifi /> : <FaWifi color='gray' />}
                                            </div>}
                                            {endpoint === "/api/rooms" && <div className='w-10 h-12 border shadow-[#AEAEAE] flex items-center justify-center rounded-xl shadow-lg'>
                                                {item.tv ? <FaTv /> : <FaTv color='gray'/>}
                                            </div>}
                                            {endpoint === "/api/rooms" && <div className='w-10 h-12 border shadow-[#AEAEAE] flex items-center justify-center rounded-xl shadow-lg'>
                                                {item.bath ? <FaBath /> : <FaBath color='gray'/>}
                                            </div>}
                                            { <div className='w-10 h-12 border shadow-[#AEAEAE] flex items-center justify-center rounded-xl shadow-lg'>
                                                {item.ac ? <TbAirConditioning /> : <TbAirConditioning color='gray'/>}
                                            </div>}
                                            {<div className='w-10 h-12 border shadow-[#AEAEAE] flex items-center justify-center rounded-xl shadow-lg'>
                                                {item.food ? <GiKnifeFork /> : <GiKnifeFork color='gray'/>}
                                            </div>}
                                        </div>}
                                        <div className="price flex">
                                            <div className='m-2 px-3 flex flex-col justify-center'>
                                                <div className="price text-sm text-[#909090] mb-1">
                                                    <samp className="extra-lexa text-2xl text-black">{item.price} RS.</samp> per day
                                                </div>
                                                <button className="p-3 border-black extra-lexa border-[3px] rounded-2xl">RESERVE NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items available</p>
                )}
            </div>
        </>
    );
}

export default RoomsHalls;
