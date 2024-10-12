import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';

const ImageCarousel = () => {
  const images = [
    "/static/wed_hall.svg",
    "/static/wed_hall.svg",
    "/static/wed_hall.svg"
  ];

  const sentences = ["Book Rooms & Halls At Ease", "Plan Your Events Effortlessly", "Celebrate with Us in Style"];

  const sentencess = [
    { first: "Plan Your Events", second: "Effortlessly" },
    { first: "Celebrate with Us", second: "in Style" },
    { first: "Book Rooms & Halls", second: "At Ease" }
  ];


  return (
    <div className="relative">
      <Navbar />
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        transitionTime={800}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute left-0 z-10 p-2 text-black rounded-full hover:bg-gray-200"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              aria-label={label}
            >
              <SlArrowLeft size={25} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute right-0 z-10 p-2 text-black rounded-full hover:bg-gray-200"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              aria-label={label}
            >
              <SlArrowRight size={25} />
            </button>
          )
        }
      >
        {images.map((image, idx) => (
          <div key={idx} className='m-6 px-6'>
            <img src={image} alt={`Slide ${idx}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </Carousel>

      {/* Overlapping Text with Typewriter Effect */}
      <div className='absolute z-20 top-28 left-1/4  transform -translate-x-1/2 -translate-y-1/2 text-white m-12 w-[35%] h-[25%] text-6xl font-bold overflow-hidden typewriter-holder'>
        <p className='text-wrap '>
          <Typewriter options={{ strings: sentences, autoStart: true, loop: true, deleteSpeed: 70, delay: 80, }} />
        </p>
      </div>

      {/* Overlapping Button */}
      <div className='flex justify-center rounded-m'>
        <div className='box shadow-md flex absolute bottom-0 justify-center items-center bg-slate-100 z-10 w-[80%] h-[5%] border border-solid p-10 rounded-md'>
          <div className="z-20 absolute justify-center items-center bg-black text-white py-2 px-4 rounded-md">
            <a href="https://website-link.com" target="_blank" rel="noopener noreferrer" className='text-base px-40'>
              VISIT THE BOMBAY ANDHRA MAHASABHA & GYMKHANA WEBSITE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
