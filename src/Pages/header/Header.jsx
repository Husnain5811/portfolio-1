

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white p-5">
      <div className="max-w-screen-lg mx-auto gap-3 flex justify-between items-center">
        <h1 className="text-3xl share-tech"> &lt; Naino / Code &gt; </h1>
        <nav className="hidden md:flex space-x-8 share-tech">
          <Link to="/home" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
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
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-gray-800">
          <Link to="#home" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
          <Link to="#about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
          <Link to="#projects" className="block px-4 py-2 hover:bg-gray-700">Projects</Link>
          <Link to="#contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;