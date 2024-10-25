import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from './Layout'
import Marker from './components/global/Marker'
import BookingForm from './components/home/BookingForm';

const BookPage = () => {

    return (
        <Layout>
            <Marker marker={"Booking Page"} />
            <div>
                <p className='underlined text-2xl m-7 px-5 my-1 font-light border-black border-l-2'>
                    <samp className='text-2xl extra-lexa '>Book</samp> Your Room
                </p>
            </div>
            <BookingForm />
        </Layout>
    )
}

export default BookPage
