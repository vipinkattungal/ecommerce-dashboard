
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-bold"> Dashboard</Link>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className={`lg:flex flex-grow items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="text-sm lg:flex-grow">
              <Link to="/favorites" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                Favorites
              </Link>
              <Link to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200  mr-4">
                Profile
              </Link>
              <Link to="/product" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200  mr-4">
                Product List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
