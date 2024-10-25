import React from 'react'
import Layout from './Layout'
import Marker from './components/global/Marker'
import RoomsHalls from './components/home/RoomsHalls';

const RoomPage = () => {

    return (
        <Layout>
            <div>
                <Marker marker={"Rooms & Halls"} />
            </div>
            
            {/* Rooms Section */}
            <div>
                <p className='underlined text-2xl border border-s-2 m-7 px-5 mx-10 border-black border-r-0 border-y-0'>
                    <samp className='text-2xl extra-lexa'>Hotel</samp> Rooms
                </p>
            </div>
            <RoomsHalls endpoint={"/api/rooms"}/>

            {/* Halls Section */}
            <div>
                <p className='underlined text-2xl border border-s-2 m-7 px-5 mx-10 border-black border-r-0 border-y-0'>
                    <samp className='text-2xl extra-lexa'>Banquet</samp> Halls
                </p>
            </div>
            <RoomsHalls endpoint={"/api/halls"}/>

        </Layout>
    )
}

export default RoomPage;
