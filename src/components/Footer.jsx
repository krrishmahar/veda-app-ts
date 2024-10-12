import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="max-w-6xl max-h-8xl mx-auto flex flex-col md:flex-row justify-between items-start">
                {/* Contact Details */}
                <div className="mb-4 md:mb-0">
                    <h2 className="font-bold text-lg">CONTACT DETAILS</h2>
                    <p>Mov: (+91) 022-24144377 / 022-24144388</p>
                    <p>Mov: +91 9967687939</p>
                    <p>E-mail: mahasabha@gmail.com</p>
                </div>

                {/* Menu */}
                <div className="mb-4 md:mb-0">
                    <h2 className="font-bold text-lg">MENU</h2>
                    <ul className="list-none space-y-1">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">Rooms & Halls</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                        <li><a href="#" className="hover:text-gray-400">About</a></li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h2 className="font-bold text-lg">ADDRESS</h2>
                    <p>The Bombay Andhra Mahasabha & Gymkhana</p>
                    <p>10-C, Lakshami Napoo Road</p>
                    <p>Dadar (E), Mumbai - 400 014.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
