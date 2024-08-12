import React from 'react';

const AssistanceSection = () => {
  return (
    <div className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
          We Are Good At What We Do
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-8 md:mt-10">
          <div className="w-1 bg-yellow-500 h-20 md:h-24 mt-5 md:mt-0"></div>
          <div className="md:ml-4 mt-5 text-center md:text-left">
            <h3 className="text-gray-900 text-3xl md:text-5xl font-bold">
              We Are Here<br className="hidden md:block"/> To Assist
            </h3>
            <p className="text-gray-600 mt-4 text-base md:text-lg">
              AJH & Co is a leading provider of Assurance,<br className="hidden md:block"/> Regulatory Advisory and Taxation services. We <br className="hidden md:block"/>help clients by understanding the complexity of<br className="hidden md:block"/> regulatory which are increasing year by year.
            </p>
            <p className="text-gray-600 mt-4 text-base md:text-lg">
              We help people with their taxation be it direct<br className="hidden md:block"/> or indirect taxes. We have expertise in both. <br className="hidden md:block"/>Regular updates and filings take away the worries<br className="hidden md:block"/> of our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistanceSection;

