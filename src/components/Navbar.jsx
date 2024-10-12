const Navbar = () => {
    return (
      <nav className="absolute w-full bg-transparent z-30 top-5 px-16 py-4">
        <div className="container mx-auto flex justify-end items-center px-6">
          <ul className="flex space-x-6 text-white">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#rooms" className="hover:text-gray-300">Rooms</a></li>
            <li><a href="#halls" className="hover:text-gray-300">Banquet Halls</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;