import React from 'react';

const ContactHeader = () => {
  return (
    <div className="bg-black text-white py-2 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap justify-center md:justify-end items-center space-x-4 md:space-x-8">
          
          <a href="tel:0124-4115084" className="flex items-center space-x-2 text-sm md:text-base">
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png" alt="Phone" className="w-5 h-5 md:w-6 md:h-6"/> 
            <span>0124-4115084</span>
          </a>

          <a href="mailto:info@ajhco.in" className="flex items-center space-x-2 text-sm md:text-base">
            <img src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-vector-mail-icon-png-image_995083.jpg" alt="Email" className="w-5 h-5 md:w-6 md:h-6"/> 
            <span>info@ajhco.in</span>
          </a>

          <div className="flex items-center space-x-2 text-sm md:text-base">
            <img src="https://www.freeiconspng.com/uploads/timer-icon-27.png" alt="Clock" className="w-5 h-5 md:w-6 md:h-6"/> 
            <span>Mon - Fri: 9:00 - 18:30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;

