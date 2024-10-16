import React from 'react';
import Banner from './components/global/Banner';
import Footer from './components/global/Footer';
import Navbar from './components/Home/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Banner />
        <Navbar />  {/* Adjust text color as needed */}
      </header>
      <main>
        {children}  {/* This is where the page-specific content goes */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
