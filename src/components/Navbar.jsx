import React, { useState } from 'react';
import { IoPersonCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('home'); // Track which page is active

  return (
    <nav className="absolute w-full bg-transparent z-30 top-5 px-16 py-4">
      <div className="container mx-auto flex justify-end items-center px-6">
        <ul className="flex space-x-6 text-white  items-center">
          <li>
            <Link
              to="/"
              className={`hover:text-gray-300 ${active === 'home' ? 'active' : ''}`}
              onClick={() => setActive('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/roompage" //change into better name 
              className={`hover:text-gray-300 ${active === 'rooms' ? 'active' : ''}`}
              onClick={() => setActive('rooms')}
            >
              Room & Halls
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-gray-300 ${active === 'contact' ? 'active' : ''}`}
              onClick={() => setActive('contact')}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <div className='flex bg-black border-white px-3 py-[6px] font-bold rounded'>
              <Link className="flex  justify-center items-center" to="/signin"><samp> Sign In&nbsp;</samp><IoPersonCircle size={24} />
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .active {
          position: relative;
        }
        .active::after {
          content: '';
          position: absolute;
          left: -3px;
          bottom: -2px;
          width: 115%;
          height: 2px;
          background-color: white;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
