import React, { useState, useEffect } from 'react';
import { FaBath, FaTv, FaWifi } from 'react-icons/fa';
import { TbAirConditioning, TbBookmarkFilled } from "react-icons/tb";
import { GiKnifeFork } from 'react-icons/gi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import { CiBookmark } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { BsBookmarkFill, BsDoorOpenFill } from 'react-icons/bs';
import { RiHotelBedLine } from "react-icons/ri";
import { IoPeople } from 'react-icons/io5';

const Booking = ({ endpoint }) => {
    const [rooms, setRooms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [bookmarkedRooms, setBookmarkedRooms] = useState(new Set());

    // Fetch rooms data from API
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get(`http://localhost:8080${endpoint}`);
                setRooms(response.data);  // Assumes backend sends an array of rooms
            } catch (error) {
                console.error("Error fetching rooms data:", error);
            }
        };
        fetchRooms();
    }, []);

    const itemsPerPage = 4;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRooms = Array.isArray(rooms) ? rooms.slice(indexOfFirstItem, indexOfLastItem) : [];

    const totalPages = Math.ceil(rooms.length / itemsPerPage);

    const toggleBookmark = (roomId) => {
        const updatedBookmarks = new Set(bookmarkedRooms);
        if (updatedBookmarks.has(roomId)) {
            updatedBookmarks.delete(roomId);
        } else {
            updatedBookmarks.add(roomId);
        }
        setBookmarkedRooms(updatedBookmarks);
    };

    return (
        <>
            <div className="room-booking mx-8 flex justify-between ">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-transparent rounded-sm mr-2 hover:bg-gray-200"
                >
                    <IoIosArrowBack size={20} />
                </button>
                <div className="grid grid-cols-4 gap-11">
                    {Array.isArray(currentRooms) && currentRooms.map((room) => (
                        <div key={room.id} className="bg-white shadow-2xl rounded-lg overflow-hidden relative mx-8 w-60">
                            <img src={room.imageUrl || "/static/rooms/room-01.svg"} alt={room.Name} className="w-full h-48 object-cover " onError={e => e.target.src = "/static/rooms/room-01.svg"} />
                            <button
                                onClick={() => toggleBookmark(room.id)}
                                className="absolute top-2 right-2 bg-white rounded-full p-[.35rem] shadow-md z-10"
                            >
                                {bookmarkedRooms.has(room.id) ? <TbBookmarkFilled size={16} /> : <CiBookmark size={16} />}
                            </button>

                            <h3 className="absolute top-2 left-2 text-xl font-bold text-white z-10 drop-shadow-md">{room.name}</h3>

                            <div className="absolute right-2 rounded-md p-2 bg-white bg-opacity-70 z-10 bottom-[8.5rem]">
                                <p className="text-sm "><samp className='text-[#787878] font-extrabold'>from </samp> <samp className='extra-lexa'>
                                    {`${room.price} Rs.`}
                                </samp>
                                </p>
                            </div>

                            <div className="p-6 pt-2">
                                <div className='flex justify-between'>
                                    {room.availability ? //set this via endpoint
                                        <div className='flex items-center'><BsDoorOpenFill color='green' /><samp className='extra-lexa text-green-600'> Vacant</samp>
                                        </div>
                                        :
                                        <div className='flex items-center'><BsDoorOpenFill color='red' /><samp  className=' extra-lexa text-red-600'> Occupied</samp></div>
                                    }
                                    <div className='flex items-center '>
                                        <IoPeople /> : <samp className='text-[#A7A7A7] font-bold px-1'> {room.roomCapacity}</samp>
                                        <RiHotelBedLine /> : <samp className='text-[#A7A7A7] px-1'> {room.beds}</samp>
                                    </div>
                                </div>
                                <div className="icons flex justify-between my-1">
                                    {room.wifi && <FaWifi size={16} />}
                                    <FaBath size={16} />
                                    <FaTv size={16} />
                                    {room.food && <GiKnifeFork size={16} />}
                                    <TbAirConditioning  size={16} />
                                </div>
                                <button className="bg-white text-black py-2 px-4 border font-extrabold rounded-md mt-2 w-full" style={{ border: "solid 2px black" }}>SHOW MORE...</button>
                            </div>


                        </div>
                    ))}
                </div>


                <div className="flex justify-center my-4">
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={indexOfLastItem >= rooms.length}
                        className="px-4 py-2 bg-transparent rounded-sm ml-2 hover:bg-gray-200"
                    >
                        <IoIosArrowForward size={20} />
                    </button>
                </div>
            </div>

            <div className="flex justify-end px-6">
                <Link to="/roompage" >
                    <button className="m-4 border border-black rounded-full px-6 py-[0.35rem] font-semibold " >View more...</button>
                </Link>
            </div>

            <div className="flex justify-center items-center p-5">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`mx-1 w-3 h-3 rounded-full ${currentPage === index + 1 ? 'bg-gray-900' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </>
    );
};

export default Booking;
