import React from 'react';
import ImageCarousel from './components/Home/ImageCarousel';
import RoomBookingForm from './components/Home/RoomBookingForm';
import Booking from './components/home/Booking';
import Layout from './Layout';   // Import the Base layout


const HomePage = () => {
  return (
    <Layout >
      <div>
        <div className="relative">
          <ImageCarousel />
        </div>
        <p className='underlined text-2xl m-7 px-5 border-black border-l-2'>
          <samp className='text-2xl extra-lexa '>Book</samp> A Room Now:
        </p>
        <div className='relative z-20 mt-14'>
          <RoomBookingForm />
        </div>
        <p className='underlined text-2xl m-7 px-5 border-black border-l-2'>
          <samp className='text-2xl extra-lexa underline'>New</samp> Hotel Rooms
        </p>
        <div className='relative z-20 mt-14'>
          <Booking endpoint={"/api/rooms"} />
        </div>
        <p className='underlined text-2xl mx-7 px-5 my-3 border-black border-l-2'>
          <samp className='text-2xl extra-lexa underline'>New</samp> Banquet Halls
        </p>
        <div className='relative z-20 mt-14'>
          <Booking endpoint={"/api/halls"} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
