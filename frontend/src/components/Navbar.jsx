import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-gray-800">RealEstate</a>
        <div>
          <a href="/" className="text-gray-600 hover:text-gray-800 mx-2">Home</a>
          <a href="/about" className="text-gray-600 hover:text-gray-800 mx-2">About</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-800 mx-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
