import React, { useState, useRef, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { motion } from 'framer-motion'; // For animations
import dayjs from 'dayjs';
import Counter from './Counter';
import { Link } from 'react-router-dom';

const RoomBookingForm = () => {
  const [arrivalDate, setArrivalDate] = useState(dayjs());
  const [departureDate, setDepartureDate] = useState(dayjs());
  
  // Guest counts
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [showArrivalPicker, setShowArrivalPicker] = useState(false);
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);

  const arrivalRef = useRef(null);
  const departureRef = useRef(null);

  // Animation variants for sliding
  const slideFromLeft = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5 } }
  };

  const slideFromRight = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: 200, opacity: 0, transition: { duration: 0.5 } }
  };

  // Close the date picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (arrivalRef.current && !arrivalRef.current.contains(event.target)) {
        setShowArrivalPicker(false);
      }
      if (departureRef.current && !departureRef.current.contains(event.target)) {
        setShowDeparturePicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto -mt-12 relative z-20">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="border border-x-0 border-y-0 border-b-2 border-black m-8">
            <div className="grid grid-cols-2">
              <label className="text-base font-medium flex">Arrival</label>
              <label className="text-base ml-2 font-medium flex">Departure</label>
            </div>

            <div className="grid grid-cols-2 gap-4 items-center justify-around mb-4">
              {/* Arrival Date Picker */}
              <div ref={arrivalRef} className="relative">
                <input
                  type="text"
                  className="mt-1 p-2 border bg-[#F4F4F4] border-black rounded-md w-40 text-center"
                  value={arrivalDate.format('MM/DD/YYYY')}
                  onClick={() => {
                    setShowArrivalPicker(true);
                    setShowDeparturePicker(false); // Close Departure Picker if open
                  }}
                  readOnly
                />
                {showArrivalPicker && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={slideFromLeft}
                    className="absolute top-12 left-0 bg-neutral-300 p-4 rounded-lg shadow-lg z-30"
                  >
                    <StaticDatePicker
                      orientation="landscape"
                      displayStaticWrapperAs="desktop"
                      value={arrivalDate}
                      onChange={(newDate) => setArrivalDate(newDate)}
                      onAccept={() => setShowArrivalPicker(false)} // Close on OK
                    />
                  </motion.div>
                )}
              </div>

              {/* Departure Date Picker */}
              <div ref={departureRef} className="relative">
                <input
                  type="text"
                  className="mt-1 p-2 border bg-[#F4F4F4] border-black rounded-md w-40 text-center"
                  value={departureDate.format('MM/DD/YYYY')}
                  onClick={() => {
                    setShowDeparturePicker(true);
                    setShowArrivalPicker(false); // Close Arrival Picker if open
                  }}
                  readOnly
                />
                {showDeparturePicker && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={slideFromRight}
                    className="absolute top-12 right-0 bg-gray-300 p-4 rounded-lg shadow-lg z-30"
                  >
                    <StaticDatePicker
                      orientation="landscape"
                      displayStaticWrapperAs="desktop"
                      value={departureDate}
                      onChange={(newDate) => setDepartureDate(newDate)}
                      onAccept={() => setShowDeparturePicker(false)} // Close on OK
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Guest Count Section */}
          <div className="border border-x-0 border-y-0 border-b-2 border-black m-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Adults Counter */}
              <Counter label="Adults" guests={adults} setGuests={setAdults} />
              {/* Children Counter */}
              <Counter label="Children" guests={children} setGuests={setChildren} />
            </div>
          </div>

          <div className="flex justify-center">
            <Link to="/roompage">
              <button className="px-52 py-3 bg-black text-white rounded-lg">Next</button>
            </Link>
          </div>
        </LocalizationProvider>
      </div>
    </>
  );
};

export default RoomBookingForm;
