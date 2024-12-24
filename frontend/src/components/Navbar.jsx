import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaTh, FaBell, FaImage, FaMapMarkerAlt, FaVideo, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to check if a tab is active
  const isActive = (path) => location.hash === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-gray-800">RealEstate</a>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="/"
            className={`text-xl flex items-center ${
              isActive('#/') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <span className="mr-2">
              <FaHome />
            </span>
            Home
          </a>
          <a
            href="#price-section"
            className={`flex items-center ${
              isActive('#price-section') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <span className="mr-1">&#8377;</span>
            Price
          </a>
          <a
            href="#floor-plans"
            className={`flex items-center ${
              isActive('#floor-plans') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <span className="mr-1">
              <FaTh />
            </span>
            Site & Floor Plan
          </a>
          <a
            href="#amenities"
            className={`flex items-center ${
              isActive('#amenities') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <span className="mr-1">
              <FaBell />
            </span>
            Amenities
          </a>
          <a
            href="#gallery"
            className={`flex items-center ${
              isActive('#gallery') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <span className="mr-1">
              <FaImage />
            </span>
            Gallery
          </a>
          <a
            href="#location"
            className={`flex items-center ${
              isActive('#location') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <span className="mr-1">
              <FaMapMarkerAlt />
            </span>
            Location
          </a>
          <a
            href="#video"
            className={`flex items-center ${
              isActive('#video') ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <span className="mr-1">
              <FaVideo />
            </span>
            Virtual Site Visit
          </a>
        </div>

        {/* Download Button */}
        <a
          href="#download-brochure"
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center"
        >
          <span className="mr-2">
            <FaDownload />
          </span>
          Download Brochure
        </a>

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
