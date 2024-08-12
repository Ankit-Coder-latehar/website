import React from 'react';

const CorporateServices = () => {
  return (
    <div className="flex">
      <div className="w-64 h-280 p-5 bg-gray-100 p-20">
        <h2 className="font-semibold text-lg mb-5">Tax Services</h2>
        <ul className="text-sm">
          <li className="mb-2">
            <a href="/direct-tax-services" className="block p-2 hover:bg-yellow-200">Direct Tax Services</a>
          </li>
          <li className="mb-2">
            <a href="/indirect-tax-services" className="block p-2 hover:bg-yellow-200">Indirect Tax</a>
          </li>
          <li className="mb-2">
            <a href="/auditing-and-assurance-service" className="block p-2 hover:bg-yellow-300">Auditing and Assurance Services</a>
          </li>
          <li className="mb-2">
            <a href="/corporate-and-LLP-Laws" className="block p-2 bg-yellow-300">Corporate and LLP Laws</a>
          </li>
          <li className="mb-2">
            <a href="/insolvency-Laws" className="block p-2 hover:bg-yellow-200">Insolvency Laws (IBC)</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <div className="mb-4">
          <p>Our assurance services help organizations keep pace in their growth trajectory along with ensuring timely <br/>compliance in regulatory responsibilities. We provide the following services to global and local clients with same<br/> fervor for quality, innovation and value addition.</p>
        </div>
        <div className="overflow-x-auto mt-10">
          <p>Setting up of corporate and LLP entities.</p>
          <p>Compliances of Company Law matters</p>
          <p>Mergers and Acquisitions</p>
          <p>Joint Ventures</p>
          <p>Capital restructuring</p>
        </div>
      </div>
    </div>
  );
}

export default CorporateServices;

