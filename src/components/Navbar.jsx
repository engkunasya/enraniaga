import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the Navbar visibility
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleNavbar}
        className={`fixed top-[150px] -translate-y-1/2 left-0 z-20 bg-black bg-opacity-70 text-white p-2 rounded-r-md focus:outline-none ${
          isOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {isOpen ? '<<' : '>>'}
      </button>

      {/* Sidebar Navbar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-70 backdrop-blur-md shadow-md z-10 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-start px-6 py-8">
          {/* Logo */}
          <div className="text-2xl font-bold text-white mb-12">
            <a href="#home" className="hover:text-gray-400 transition">
              MyWebsite
            </a>
          </div>

          {/* Menu */}
          <ul className="flex flex-col space-y-6">
            <li>
              <a
                href="#home"
                className="text-white hover:text-gray-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#partners"
                className="text-white hover:text-gray-400 transition"
              >
                Our Partners
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-400 transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="text-white hover:text-gray-400 transition"
              >
                Our Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Footer */}
          <div className="mt-auto text-white text-sm">
            © 2024 MyWebsite
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
