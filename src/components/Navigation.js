import React, { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="relative w-32 h-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative text-center">
                {/* Logo Text with New Font */}
                <div
                  className="text-transparent font-bold text-3xl bg-clip-text relative"
                  style={{
                    fontFamily: 'Arial, sans-serif', // Changed Font
                    display: 'inline-block',
                  }}
                >
                  <span style={{ position: 'relative' }} className='text-[#145886]'>
                    C
                  </span>
                  <span style={{ position: 'relative' }} className='text-[#145886]'>
                    A
                    {/* Left Arrow overlapping with A */}
                    <span
                      style={{
                        position: 'absolute',
                        left: '6px', // Adjust the position
                        top: '3px', // Adjust the vertical alignment
                        transform: 'rotate(180deg)',
                        color: '#ff4500',
                      }}
                    >
                      ✔
                    </span>
                    {/* Right Arrow overlapping with A */}
                    <span
                      style={{
                        position: 'absolute',
                        right: '-25px', // Adjust the position
                        top: '3px', // Adjust the vertical alignment
                        transform: 'rotate(180deg)',
                        color: '#55B848',
                      }}
                    >
                      ✔
                    </span>
                  </span>
                </div>
                {/* INDIA Text */}
                <div className="text-gray-700 font-semibold text-sm mt-1">
                  CHARTERED ACCOUNTANT
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex md:items-center space-x-4">
          <a href="/" className="text-[#145886] text-sm font-semibold hover:text-gray-600 px-4">Home</a>
          <a href="/about" className="text-[#145886] text-sm font-semibold hover:text-gray-600 px-4">About</a>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="text-[#145886] text-sm font-semibold hover:text-gray-600 px-4 flex items-center"
            >
              <span>Services</span>
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
          <a href="/contact" className="text-[#145886] text-sm font-semibold hover:text-gray-600 px-4">Contact</a>
        </nav>

        {/* Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes className="text-gray-800" /> : <FaBars className="text-gray-800" />}
        </button>

        {/* Consult Button */}
        <div className="hidden md:flex">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center ml-4">
            <FaPhoneAlt className="mr-2" />
            <a href="/contact" className="text-white font-bold text-sm">Consult Now</a>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="/" className="text-lg text-[#145886] font-semibold hover:text-gray-600">Home</a>
            <a href="/about" className="text-lg text-[#145886] font-semibold hover:text-gray-600">About</a>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="text-[#145886] text-lg font-semibold hover:text-gray-600 flex items-center"
              >
                <span>Services</span>
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
            <a href="/contact" className="text-[#145886] text-lg font-semibold hover:text-gray-600">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
