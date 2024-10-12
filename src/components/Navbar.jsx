import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoPersonCircle } from 'react-icons/io5';

const Navbar = () => {
  const [active, setActive] = useState('home'); // Track which page is active

  return (
    <nav className="absolute w-full bg-transparent z-30 top-5 px-16 py-4">
      <div className="container mx-auto flex justify-end items-center px-6">
        <ul className="flex space-x-6 text-white  items-center">
          <li>
            <a 
              href="#home" 
              className={`hover:text-gray-300 ${active === 'home' ? 'active' : ''}`} 
              onClick={() => setActive('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#rooms" 
              className={`hover:text-gray-300 ${active === 'rooms' ? 'active' : ''}`} 
              onClick={() => setActive('rooms')}
            >
              Room & Halls
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`hover:text-gray-300 ${active === 'contact' ? 'active' : ''}`} 
              onClick={() => setActive('contact')}
            >
              Contact Us
            </a>
          </li>
          <li>
            <div className='flex bg-black border-white px-3 py-[6px] font-bold rounded'>
              <a className="flex  justify-center items-center" href=""><samp> Sign In&nbsp;</samp><IoPersonCircle size={24}/>  
              </a>
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
