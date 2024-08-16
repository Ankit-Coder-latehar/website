import React from 'react';

const AdvisoryFirmSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto min-h-screen py-8">
      
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-4">
        <img
          src="/CA-India-Logo.png" 
          alt="Advisory Firm Logo"
          className="object-contain h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center bg-white p-4">
        <div className="space-y-4">
          {/* Updated Heading */}
          <div className="border-l-4 border-yellow-500 pl-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Consulting Firm</h1>
          </div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            T R J & Associates is amongst the experienced Chartered Accountancy firms. The firm offers full suite business service solutions to the domestic and international clients. It is a professionally managed Consultancy Firm, with the aim to synthesize knowledge into value for the benefit of its clients, its people, and the community at large. The team is committed to the guiding principles which include high standards for service, accessibility, seamless interdisciplinary functions, and integrity.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default AdvisoryFirmSection;
