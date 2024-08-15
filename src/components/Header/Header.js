import React from 'react';
import { FaEnvelope } from 'react-icons/fa'; // Import the mail icon

const ContactHeader = () => {
  return (
    <div className="bg-[#145886] text-white py-2 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap justify-center md:justify-end items-center space-x-4 md:space-x-8">

          <a href="mailto:info@trjassociates.in" className="flex items-center space-x-2 text-sm md:text-base">
            <FaEnvelope className="w-5 h-5 md:w-6 md:h-6"/> 
            <span>info@trjassociates.in</span>
          </a>

          
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <img src="https://www.freeiconspng.com/uploads/timer-icon-27.png" alt="Clock" className="w-5 h-5 md:w-6 md:h-6"/> 
            <span>Mon - Fri: 10:00 - 18:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
