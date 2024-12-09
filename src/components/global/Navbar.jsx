import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { IoPersonCircle } from 'react-icons/io5';

const Navbar = () => {
  const location = useLocation(); // Get the current path
  const [active, setActive] = useState('home'); // Track which page is active

  useEffect(() => {
    // Automatically set the active state based on the current path
    if (location.pathname === '/') {
      setActive('home');
    } else if (location.pathname === '/roompage') {
      setActive('rooms');
    } else if (location.pathname === '/contact') {
      setActive('contact');
    }
  }, [location.pathname]); // Dependency on location changes

  return (
    <nav className="absolute w-full bg-transparent z-30 mt-[3.5rem] px-16 ">
      <div className="container mx-auto flex justify-end items-center px-6">
        <ul className={`flex space-x-6  text-white  items-center`}>
          <li>
            <Link
              to="/"
              className={`hover:text-gray-300 ${location.pathname === '/' ?  'text-white' : 'text-black'} ${active === 'home' ? 'active' : ''}`}
              onClick={() => setActive('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/roompage"
              className={`hover:text-gray-300 ${location.pathname === '/' ? 'text-white' : 'text-black'} ${active === 'rooms' ? 'active' : ''}`}
              onClick={() => setActive('rooms')}
            >
              Rooms & Halls
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-gray-300 ${location.pathname === '/' ? 'text-white' : 'text-black'} ${active === 'contact' ? 'active' : ''}`}
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
      <style tsx>{`
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
          background-color: ${location.pathname === '/' ? 'white' : 'black'}; /* Change color based on path */
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
