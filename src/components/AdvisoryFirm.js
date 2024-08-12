import React from 'react';

const AdvisoryFirmSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      
      
      <div className="md:w-1/2 w-full h-64 md:h-full flex items-center justify-center px-4 md:px-20 py-10">
        <img
          src="/Screenshot 2024-08-10 084926.png" 
          alt="Advisory Firm Office"
          className="object-cover opacity-50 h-full w-full md:h-3/4 md:w-5/4"
        />
      </div>

      
      <div className="md:w-1/2 w-full flex flex-col justify-center bg-white px-4 md:px-20 py-10">
        <div className="space-y-6">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Advisory Firm</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-2">Since 1985</h2>
          </div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Founded in 1985, AJH & Co is amongst the most experienced Chartered Accountancy firms.
            Combining a rich heritage of more than four decades with a modern and cutting-edge practice,
            the firm offers full suite business service solutions to our domestic and international clients.
            It is a professionally managed Advisory Firm, with the aim to synthesise knowledge into value for
            the benefit of its clients, its people, and the community at large.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryFirmSection;
