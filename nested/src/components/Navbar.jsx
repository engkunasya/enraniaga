import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-10 shadow-md bg-black bg-opacity-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-100">
          <a href="#home" className="hover:text-gray-400">Enra Niaga</a>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="text-white hover:text-gray-400 transition">Home</a>
          </li>
          <li>
            <a href="#partners" className="text-white hover:text-gray-400 transition">Our Partners</a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-400 transition">About Us</a>
          </li>
          <li>
            <a href="#works" className="text-white hover:text-gray-400 transition">Our Works</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-400 transition">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-white hover:text-gray-400 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

