import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import { FaWifi, FaTv, FaUtensils, FaShower, FaBed } from "react-icons/fa";
import { AiFillStar } from "@mui/icons-material"; // Material UI for stars
import "@mui/material/Rating";
import { MdVerified, MdOutlineError } from "react-icons/md";


const RoomCard = ({ room }) => {
    return (
      <div
        className={`flex flex-col shadow-lg rounded-lg p-4 ${
          room.status === "vacant" ? "shadow-green-300" : "shadow-red-300"
        }`}
      >
        {/* Image Carousel */}
        <Carousel showArrows={false} showThumbs={false} showIndicators={true} infiniteLoop={true}>
          {room.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`room-${index}`} className="rounded-lg" />
            </div>
          ))}
        </Carousel>
  
        {/* Room Details */}
        <div className="flex flex-col mt-3">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold flex items-center">
              {room.name} <MdVerified className="ml-2 text-gray-500" />
            </div>
            <div className="text-sm flex items-center">
              {room.status === "vacant" ? (
                <span className="text-green-500 flex items-center">
                  <MdVerified className="mr-1" />
                  Vacant
                </span>
              ) : (
                <span className="text-red-500 flex items-center">
                  <MdOutlineError className="mr-1" />
                  Occupied
                </span>
              )}
            </div>
          </div>
          <p className="text-gray-500 text-sm">{room.metaData}</p>
  
          {/* Room Capacity and Bed Info */}
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center text-gray-500">
              <FaBed className="mr-1" />
              {room.capacity} people
            </div>
            <div className="flex items-center text-gray-500">
              <FaBed className="mr-1" />
              {room.beds} beds
            </div>
          </div>
  
          {/* Icons for amenities */}
          <div className="flex justify-start mt-2">
            <div className="flex items-center text-gray-500 mx-2">
              <FaWifi className="mr-1" /> Wifi
            </div>
            <div className="flex items-center text-gray-500 mx-2">
              <FaTv className="mr-1" /> TV
            </div>
            <div className="flex items-center text-gray-500 mx-2">
              <FaUtensils className="mr-1" /> Dining
            </div>
            <div className="flex items-center text-gray-500 mx-2">
              <FaShower className="mr-1" /> Shower
            </div>
          </div>
  
          {/* Rating Stars */}
          <div className="flex items-center mt-3">
            <div className="flex items-center text-gray-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <AiFillStar
                  key={i}
                  className={i < room.rating ? "text-yellow-500" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-500">{room.reviews} Ratings</span>
          </div>
  
          {/* Price and Reserve Button */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-xl font-bold">{room.price} Rs.</div>
            <button className="bg-[#CF484A] text-white px-4 py-2 rounded-full hover:bg-[#d85050]">
              RESERVE NOW
            </button>
          </div>
        </div>
      </div>
    );
  };

export default RoomCard
