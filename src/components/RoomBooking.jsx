import React, { useState } from 'react';
import { BiSolidDrink } from 'react-icons/bi';
import { CiBookmark } from 'react-icons/ci';
import { BsBookmarkFill } from 'react-icons/bs'; // Import filled bookmark icon
import { FaBath, FaTv, FaWifi } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const RoomBooking = () => {
    const rooms = [
        { id: 1, title: "Ambassador Suite", price: "15,000 Rs.", iconSrc: "/static/rooms/room-01.svg" },
        { id: 2, title: "Junior Suite", price: "15,000 Rs.", iconSrc: "/static/rooms/room-02.svg" },
        { id: 3, title: "Deluxe Room", price: "100,000 Rs.", iconSrc: "/static/rooms/room-03.svg" },
        { id: 4, title: "Presidential Suite", price: "25,000 Rs.", iconSrc: "/static/rooms/room-04.svg" },
        { id: 5, title: "Family Room", price: "20,000 Rs.", iconSrc: "/static/rooms/room-05.svg" },
        { id: 6, title: "Single Room", price: "5,000 Rs.", iconSrc: "/static/rooms/room-01.svg" },
    ];

    // State for managing current page and bookmarked rooms
    const [currentPage, setCurrentPage] = useState(1);
    const [bookmarkedRooms, setBookmarkedRooms] = useState(new Set()); // Use Set to manage bookmarks

    const itemsPerPage = 4; // Number of items per page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRooms = rooms.slice(indexOfFirstItem, indexOfLastItem); // Current rooms based on page

    // Calculate total pages
    const totalPages = Math.ceil(rooms.length / itemsPerPage);

    const toggleBookmark = (roomId) => {
        const updatedBookmarks = new Set(bookmarkedRooms);
        if (updatedBookmarks.has(roomId)) {
            updatedBookmarks.delete(roomId); // Remove from bookmarks
        } else {
            updatedBookmarks.add(roomId); // Add to bookmarks
        }
        setBookmarkedRooms(updatedBookmarks); // Update state
    };

    return (
        <>
            <div className="room-booking mx-8 flex justify-between ">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white rounded-sm mr-2 hover:bg-gray-200"
                >
                    <IoIosArrowBack size={20} />
                </button>
                <div className="grid grid-cols-4 gap-4">
                    {currentRooms.map((room) => ( // Map through currentRooms
                        <div key={room.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative mx-8 w-60">
                            <img src={room.iconSrc} alt={room.title} className="w-full h-48 object-cover " />

                            {/* Bookmark Button */}
                            <button
                                onClick={() => toggleBookmark(room.id)} // Toggle bookmark on click
                                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md z-10"
                            >
                                {bookmarkedRooms.has(room.id) ? <BsBookmarkFill size={20} /> : <CiBookmark size={20} />}
                            </button>

                            <h3 className="absolute top-2 left-2 text-xl font-bold text-white z-10 drop-shadow-md">{room.title}</h3>

                            <div className="absolute right-0 p-2 bg-white bg-opacity-70 z-10 bottom-32">
                                <p className="text-sm ">From <samp className='font-semibold'>
                                    {` ${room.price}`}
                                </samp>
                                </p>
                            </div>

                            <div className="p-4">
                                <div className="icons flex justify-between my-2">
                                    <FaWifi size={16} />
                                    <FaBath size={16} />
                                    <FaTv size={16} />
                                    <BiSolidDrink size={16} />
                                    <GiKnifeFork size={16} />
                                </div>
                                <button className="bg-white text-black py-2 px-4 border font-extrabold rounded-md mt-4 w-full" style={{ border: "solid 2px black" }}>SHOW MORE...</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center my-4">
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={indexOfLastItem >= rooms.length}
                        className="px-4 py-2 bg-white rounded-sm ml-2 hover:bg-gray-200"
                    >
                        <IoIosArrowForward size={20} />
                    </button>
                </div>
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

export default RoomBooking;
