import ImageCarousel from './components/ImageCarousel'
import RoomBookingForm from './components/RoomBookingForm'
import RoomBooking from './components/RoomBooking'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div>
        <header>
          {/* Carousel Section */}
          <div className="relative">
            <Banner />
            <ImageCarousel />
          </div>
        </header>
        <div>
          <p className='underlined text-2xl border border-s-2 m-7 px-5 border-black border-r-0 border-y-0'><samp className='text-2xl font-extrabold'>Book</samp> A Room Now:</p>
          <div className='relative z-20 mt-14'><RoomBookingForm /></div>
        </div>
        <div>
          <p className='underlined text-2xl border border-s-2 m-7 px-5 border-black border-r-0 border-y-0'><samp className='text-2xl font-extrabold underline'>New</samp> Hotel Rooms</p>
          <div className='relative z-20 mt-14'><RoomBooking /></div>
        </div>
        <div>
          <p className='underlined text-2xl border border-s-2 mx-7 px-5 my-3 border-black border-r-0 border-y-0'><samp className='text-2xl font-extrabold underline'>New</samp> Banquet Halls</p>
          <div className='relative z-20 mt-14'><RoomBooking /></div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
