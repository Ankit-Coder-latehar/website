import React from 'react';
import { FiChevronRight } from 'react-icons/fi';  

const WhatDrivesus = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white px-4 sm:px-6 md:px-8 py-10 justify-between">
      
      <div className="md:w-1/3 w-full mb-6 md:mb-0 md:pr-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 border-l-4 border-yellow-400 pl-4">What Drives Us</h1>
        <p className="text-gray-800 text-base md:text-lg leading-loose">
          To act with fairness, integrity, and diligence and to be socially responsible. We jointly work with
          dignity and pleasure. We are committed to consistently deliver quality. Providing timely,
          innovative, integrated and solution-oriented advice. Our team strives to understand our
          clients’ needs and background.
        </p>
      </div>

      <div className="md:w-1/3 w-full mb-6 md:mb-0 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 border-l-4 border-yellow-400 pl-4">What We Do</h1>
        <ul className="list-none space-y-3 text-gray-800 text-base md:text-lg">
          <li className="flex items-center"><FiChevronRight className="mr-2 text-yellow-500" />Auditing & Assurance</li>
          <li className="flex items-center"><FiChevronRight className="mr-2 text-yellow-500" />Direct Taxation</li>
          <li className="flex items-center"><FiChevronRight className="mr-2 text-yellow-500" />Indirect Taxation</li>
          <li className="flex items-center"><FiChevronRight className="mr-2 text-yellow-500" />Business Advisory</li>
          <li className="flex items-center"><FiChevronRight className="mr-2 text-yellow-500" />Transaction Support</li>
          <li className="flex items-center"><FiChevronRight className="mr-2 text-yellow-500" />Financial Restructuring</li>
          <li className="flex items-center"><FiChevronRight className="mr-2 text-yellow-500" />Regulatory Approvals</li>
          <li className="flex items-center"><FiChevronRight className="mr-2 text-yellow-500" />Due Diligence</li>
          <li className="flex items-center"><FiChevronRight className="mr-2 text-yellow-500" />Secretarial Services</li>
        </ul>
      </div>
      
    </div>
  );
};

export default WhatDrivesus;
