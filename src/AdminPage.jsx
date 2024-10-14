
import Banner from './components/global/Banner';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaBath, FaPhoneAlt, FaTv, FaWifi } from 'react-icons/fa';
import { BiSolidDrink } from 'react-icons/bi';
import { GiKnifeFork } from 'react-icons/gi';
import { IoIosArrowForward } from 'react-icons/io';
import { CiBookmark } from 'react-icons/ci';
import CheckDate from './components/Admin/CheckDate';
import { LuMail } from 'react-icons/lu';
import Footer from './components/global/Footer';

import './App.css'
import SwitchButton from './components/Admin/SwitchButton';

const AdminPage = () => {
    const [isRoomSelected, setIsRoomSelected] = useState(true); // true for Rooms, false for Halls
    const [currentData, setCurrentData] = useState([]);
    const [bookmarkedRooms, setBookmarkedRooms] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);


    // Dummy data object
    const guests = [
        {
            id: 1,
            guestName: 'Vedanth Gali',
            email: 'murulidharagali@gmail.com',
            phone: '+91 95286 56465',
            adults: 2,
            children: 2,
            bookingRef: '3455332',
            bookingDate: 'October 03, 2023 06:05 PM',
            checkIn: 'October 04, 2023 12:05 PM',
            checkOut: 'October 08, 2023 12:05 PM',
            room: '306',
            roomType: 'Suite'
        },
        {
            id: 2,
            guestName: 'Krrish Mahar',
            email: 'krishmahar@gmail.com',
            phone: '+91 95286 56465',
            adults: 2,
            children: 2,
            bookingRef: '3455332',
            bookingDate: 'October 03, 2023 06:05 PM',
            checkIn: 'October 04, 2023 12:05 PM',
            checkOut: 'October 08, 2023 12:05 PM',
            room: 'Hall /02',
            roomType: 'Hall'
        }
    ];


    useEffect(() => {
        const fetchData = async () => {
            const endpoint = isRoomSelected ? 'http://localhost:8080/api/rooms' : 'http://localhost:8080/api/halls';
            try {
                const response = await axios.get(endpoint);
                setCurrentData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [isRoomSelected]);

    const toggleBookmark = (id) => {
        setBookmarkedRooms((prev) => {
            const updated = new Set(prev);
            updated.has(id) ? updated.delete(id) : updated.add(id);
            return updated;
        });
    };

    return (
        <>
            <Banner />
            <div className='flex justify-center'>
                <div className='bg-[#CF484A] text-white font-extrabold text-3xl mb-2 py-2 px-8 rounded-full'>Manager Dashboard</div>
            </div>
            <div className="flex justify-between items-center ">
                <div>
                    <p className='text-2xl border border-s-2 m-7 px-5 border-black border-r-0 border-y-0'>
                        <samp className='text-3xl font-extrabold lexend'>{isRoomSelected ? 'Rooms' : 'Halls'} <samp className="font-normal lexend"> Overview</samp></samp>
                    </p>
                </div>
                <SwitchButton />
            </div>

            <CheckDate />

            <div className="m-3">
                <div className="] flex flex-col border-[20px] p-8 rounded-xl border-[#EBEBEB] ">
                    <div className="room-overview">
                        {/* Header row */}
                        <div className="label-row flex items-center justify-between p-3 border-b-2 bg-gray-100">
                            <input type="checkbox" />
                            <div className='font-[700] text-[#727272] w-40 text-left'>Guest Details</div>
                            <div className='font-[700] text-[#727272] w-32 text-center'>No. of Guests</div>
                            <div className='font-[700] text-[#727272] w-32 text-center'>Booking Ref. No.</div>
                            <div className='font-[700] text-[#727272] w-48 text-center'>Booking Date</div>
                            <div className='font-[700] text-[#727272] w-36 text-center'>Check In</div>
                            <div className='font-[700] text-[#727272] w-36 text-center'>Check Out</div>
                            <div className='font-[700] text-[#727272] w-36 text-center'>Room No. - Type</div>
                        </div>

                        {/* Guest rows */}
                        {guests.map(guest => (
                            <div key={guest.id} className="guest-row flex items-center justify-between p-3 border-b">
                                <input type="checkbox" />
                                <div className="guest-details w-40 text-left">
                                    <div className='font-[700] text-[#06a600]'>
                                        {guest.guestName}
                                    </div>
                                    <div className='text-sm w-fit  flex items-center'>
                                        <LuMail  className='mr-1'/>{guest.email}</div>
                                    <div className='text-sm w-fit flex items-center'>
                                        <FaPhoneAlt className='mr-1' />
                                        {guest.phone}</div>
                                </div>
                                <div className='w-32 text-center'>{`Adults: ${guest.adults} Children: ${guest.children}`}</div>
                                <div className='w-32 text-center'>{guest.bookingRef}</div>
                                <div className='w-48 text-center'>{guest.bookingDate}</div>
                                <div className='w-36 text-center'>{guest.checkIn}</div>
                                <div className='w-36 text-center'>{guest.checkOut}</div>
                                <div className='w-36 text-center'>{`${guest.room} - ${guest.roomType}`}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
                <Footer />
        </>
    );
};

export default AdminPage;
