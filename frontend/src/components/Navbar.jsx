import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
    <div className="container mx-auto flex justify-between items-start">
      <div className="text-xl font-bold">Project Logo</div>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;