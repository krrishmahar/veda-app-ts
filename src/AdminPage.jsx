
import Banner from './components/global/Banner';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaBath, FaPhoneAlt, FaTv, FaWifi } from 'react-icons/fa';

import CheckDate from './components/Admin/CheckDate';
import { LuMail } from 'react-icons/lu';
import Footer from './components/global/Footer';

import './App.css'
import SwitchButton from './components/Admin/SwitchButton';
import { MdVerified } from 'react-icons/md';

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
            uuid: 'bams34594003',
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
            uuid: '',
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
        },
        // Additional 6 dummy data entries
        {
            id: 3,
            guestName: 'Samantha Ray',
            uuid: 'samu123456',
            email: 'samantharay@mail.com',
            phone: '+91 76543 54321',
            adults: 2,
            children: 1,
            bookingRef: '3455334',
            bookingDate: 'October 04, 2023 06:15 PM',
            checkIn: 'October 05, 2023 12:00 PM',
            checkOut: 'October 09, 2023 12:00 PM',
            room: '207',
            roomType: 'Deluxe'
        },
        {
            id: 4,
            guestName: 'John Doe',
            uuid: '',
            email: 'johndoe@mail.com',
            phone: '+91 92345 67890',
            adults: 1,
            children: 0,
            bookingRef: '3455335',
            bookingDate: 'October 05, 2023 02:30 PM',
            checkIn: 'October 06, 2023 12:00 PM',
            checkOut: 'October 09, 2023 12:00 PM',
            room: '302',
            roomType: 'Standard'
        },
        {
            id: 5,
            guestName: 'Jane Smith',
            uuid: 'jane34567',
            email: 'janesmith@mail.com',
            phone: '+91 87654 32109',
            adults: 3,
            children: 1,
            bookingRef: '3455336',
            bookingDate: 'October 06, 2023 05:00 PM',
            checkIn: 'October 07, 2023 12:00 PM',
            checkOut: 'October 11, 2023 12:00 PM',
            room: '405',
            roomType: 'Suite'
        },
        {
            id: 6,
            guestName: 'Michael Clark',
            uuid: 'mclark001',
            email: 'michaelclark@mail.com',
            phone: '+91 99887 77654',
            adults: 2,
            children: 2,
            bookingRef: '3455337',
            bookingDate: 'October 06, 2023 03:15 PM',
            checkIn: 'October 07, 2023 01:00 PM',
            checkOut: 'October 10, 2023 12:00 PM',
            room: '110',
            roomType: 'Hall'
        },
        {
            id: 7,
            guestName: 'Nina Patil',
            uuid: 'ninapat007',
            email: 'ninapatil@mail.com',
            phone: '+91 88877 66554',
            adults: 1,
            children: 0,
            bookingRef: '3455338',
            bookingDate: 'October 07, 2023 09:30 AM',
            checkIn: 'October 08, 2023 12:00 PM',
            checkOut: 'October 12, 2023 12:00 PM',
            room: '202',
            roomType: 'Deluxe'
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
                <div className="data-table flex flex-col border-[20px] m-8 p-8 rounded-xl min-h-[600px] max-h-[600px]  border-[#EBEBEB] overflow-y-auto ">
                    <div className="room-overview">
                        {/* Header row */}
                        <div className="label-row flex items-center justify-between p-3 border-b-2">

                            <div className='font-[700] text-[#727272] w-60 text-left'>Guest Details</div>
                            <div className='font-[700] text-[#727272] w-32 text-center'>No. of Guests</div>
                            <div className='font-[700] text-[#727272] w-32 text-center'>Booking Ref. No.</div>
                            <div className='font-[700] text-[#727272] w-48 text-center'>Booking Date</div>
                            <div className='font-[700] text-[#727272] w-36 text-center'>Check In</div>
                            <div className='font-[700] text-[#727272] w-36 text-center'>Check Out</div>
                            <div className='font-[700] text-[#727272] w-36 text-center'>Room No. - Type</div>
                        </div>

                        {/* Guest rows */}
                        {guests.map(guest => (
                            <div key={guest.id} className="guest-row 800px] flex items-center justify-between p-3 my-3 border-b">

                                <div className="guest-details w-60 text-left">
                                    <div className="flex">
                                        <div className='w-11 h-11 bg-[#676767] rounded-xl mr-4 '> {guest.uuid &&
                                            <img src="./static/verified.svg" alt="verified.svg" className='relative left-[26px] top-[26px]'/>
                                            }
                                        </div>
                                        <div>
                                            <div className='font-[800] text-black'>
                                                {guest.guestName }
                                            </div>
                                            <div className="uuid font-[700] text-[#06a600]">{guest.uuid }</div>
                                        </div>
                                    </div>
                                    <div className='text-sm w-fit  flex items-center'>
                                        <LuMail className='mr-1 my-1' />{guest.email}</div>
                                    <div className='text-sm w-fit flex items-center'>
                                        <FaPhoneAlt className='mr-1 my-1' />
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
