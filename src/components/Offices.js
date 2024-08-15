import React from "react";

const Offices = () => {
  return (
    <div className="py-8 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="border-l-4 border-yellow-400 pl-4 mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Our <br /> Offices
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full md:w-auto">
          <div className="mb-8 md:mb-0 md:mr-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Gurugram</h3>
            <p className="text-gray-600">
           Unit no 201, Pyramid House		<br/>
           NH-08, Sector 33		<br/>
            Gurugram - 122001 Haryana		<br/>

            </p>
            <p className="text-orange-600 font-semibold mt-2">
              <span role="img" aria-label="phone">📞</span> +91-8447484647
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Sohna		</h3>
            <p className="text-gray-600">

            Plot no 37		<br/>
            New Anaj Mandi, Sohna	<br/>	
            Gurugram - 122103 Haryana		

            </p>
            <p className="text-orange-600 font-semibold mt-2">
              <span role="img" aria-label="phone">📞</span> +91-9560153500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;
