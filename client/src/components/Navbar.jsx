import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white shadow-lg fixed top-0 left-0 w-full z-50 py-1">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold">
            SafeZone
          </Link>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/womensafety" className="hover:text-gray-300">
            Women Safety
          </Link>
          <Link to="/tips" className="hover:text-gray-300">
            Tips
          </Link>
          <Link to="/showlist" className="hover:text-gray-300">
            Show Report
          </Link>
          
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-blue-800"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/womensafety"
            className="block px-4 py-2 hover:bg-blue-800"
            onClick={() => setIsOpen(false)}
          >
            Women Safety
          </Link>
          <Link
            to="/tips"
            className="block px-4 py-2 hover:bg-blue-800"
            onClick={() => setIsOpen(false)}
          >
            Tips
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-blue-800"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link to="/showlist" className="hover:text-gray-300">
            Show Report
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
