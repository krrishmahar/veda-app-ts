import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Ensure this CSS file is properly loaded
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Navbar from './Navbar';

const ImageCarousel = () => {
  const images = [
    "/static/wed_hall.svg",
    "/static/wed_hall.svg",
    "/static/wed_hall.svg"
  ];

  return (
    <div className="relative">
      <Navbar /> {/* Navbar on top of carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        transitionTime={800}

        // Custom left arrow button
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button 
              type="button" 
              onClick={onClickHandler} 
              className="absolute left-0 z-10 p-2 text-black rounded-full hover:bg-gray-200"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              aria-label={label}
            >
              <SlArrowLeft size={25}/>
            </button>
          )
        }

        // Custom right arrow button
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
