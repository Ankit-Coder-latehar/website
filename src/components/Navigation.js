import React, { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (route) => location.pathname === route;

  return (
    <header className="bg-white shadow-md w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative flex items-center">
            <img src="/images (3).png" alt="Company Logo" className="w-16 h-auto mr-4" />
            <div className="flex flex-col items-start">
              <div className="font-semibold text-xl text-[#145886]">T R J & ASSOCIATES</div>
              <div className="border-t-2 border-[#145886] w-full my-1"></div>
              <div className="text-gray-700 font-semibold text-sm">CHARTERED ACCOUNTANT</div>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex md:items-center space-x-4">
          <a href="/" className={`text-[#145886] text-sm font-semibold hover:text-gray-600 px-4 ${isActiveRoute('/') ? 'border-b-2 border-orange-500' : ''}`}>Home</a>
          <a href="/about" className={`text-[#145886] text-sm font-semibold hover:text-gray-600 px-4 ${isActiveRoute('/about') ? 'border-b-2 border-orange-500' : ''}`}>About</a>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className={`text-[#145886] text-sm font-semibold hover:text-gray-600 px-4 flex items-center ${isActiveRoute('/services') ? 'border-b-2 border-orange-500' : ''}`}
            >
              <a href='/services'><span>Services</span></a>
              <BsFillCaretDownFill className="ml-1 text-[#145886]" />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-lg mt-2 w-48 py-2 rounded-lg z-50 border border-gray-200">
                <a href="/direct-tax-services" className="block px-4 py-2 text-blue-500 text-sm text-gray-800 hover:bg-gray-100">Direct Tax Services</a>
                <a href="/indirect-tax-services" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Indirect Tax</a>
                <a href="/auditing-and-assurance-service" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Auditing and Assurance Services</a>
                <a href="/corporate-and-LLP-Laws" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Corporate and LLP Laws</a>
              </div>
            )}
          </div>
          <a href="/contact" className={`text-[#145886] text-sm font-semibold hover:text-gray-600 px-4 ${isActiveRoute('/contact') ? 'border-b-2 border-orange-500' : ''}`}>Contact</a>
        </nav>

        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes className="text-gray-800" /> : <FaBars className="text-gray-800" />}
        </button>

        <div className="hidden md:flex">
          <button className="bg-[#145886] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center ml-4">
            <FaPhoneAlt className="mr-2" />
            <a href="/contact" className="text-white font-bold text-sm">Consult Now</a>
          </button>
        </div>

        <div className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="/" className={`text-lg text-[#145886] font-semibold hover:text-gray-600 ${isActiveRoute('/') ? 'border-b-2 border-orange-500' : ''}`}>Home</a>
            <a href="/about" className={`text-lg text-[#145886] font-semibold hover:text-gray-600 ${isActiveRoute('/about') ? 'border-b-2 border-orange-500' : ''}`}>About</a>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className={`text-[#145886] text-lg font-semibold hover:text-gray-600 flex items-center ${isActiveRoute('/services') ? 'border-b-2 border-orange-500' : ''}`}
              >
                <a href='/services'><span>Services</span></a>
                <BsFillCaretDownFill className="ml-1 text-gray-600" />
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg mt-2 w-48 py-2 rounded-lg z-50 border border-gray-200">
                  <a href="/direct-tax-services" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Direct Tax Services</a>
                  <a href="/indirect-tax-services" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Indirect Tax</a>
                  <a href="/auditing-and-assurance-service" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Auditing and Assurance Services</a>
                  <a href="/corporate-and-LLP-Laws" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Corporate and LLP Laws</a>
                </div>
              )}
            </div>
            <a href="/contact" className={`text-[#145886] text-lg font-semibold hover:text-gray-600 ${isActiveRoute('/contact') ? 'border-b-2 border-orange-500' : ''}`}>Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
