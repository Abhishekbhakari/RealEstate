import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-gray-800">RealEstate</a>
        
        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex">
          <Link to="/" className="text-gray-600 hover:text-gray-800 mx-2">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800 mx-2">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800 mx-2">Contact</Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide Drawer for Small Screens */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="bg-white w-3/4 h-full fixed top-0 right-0 p-4">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 absolute top-4 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col mt-6">
              <Link to="/" className="text-gray-600 hover:text-gray-800 py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-800 py-2" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-800 py-2" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
