

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white p-5">
      <div className="max-w-screen-lg mx-auto gap-3 flex justify-between items-center">
        <h1 className="text-3xl share-tech"> &lt; Naino / Code &gt; </h1>
        <nav className="hidden md:flex space-x-8 share-tech">
          <a href="/home" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/projects" className="hover:text-gray-400">Projects</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
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
          <a href="#home" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-700">About</a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;