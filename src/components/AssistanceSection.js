import React from 'react';

const AssistanceSection = () => {
  return (
    <div className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
          We Are Good At What We Do
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-8 md:mt-10">
          <div className="w-1 bg-yellow-500 h-20 md:h-24 mt-6 md:mt-0"></div>
          <div className="md:ml-6 mt-5 text-center md:text-left">
            <h3 className="text-gray-900 text-3xl md:text-5xl font-bold leading-tight">
              We Are Here<br className="hidden md:block"/> To Assist
            </h3>
            <p className="text-gray-600 mt-6 text-base md:text-lg">
              We help people with their taxation, be it direct or indirect taxes. Our expertise covers both areas. 
              Regular updates and filings take away the worries of our clients.
            </p>
            <p className="text-gray-600 mt-4 text-base md:text-lg">
              Our goal is to ensure that you are always compliant and informed. We tailor our services to meet your specific needs, providing peace of mind through professional and thorough tax management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistanceSection;
