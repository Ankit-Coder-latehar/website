import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">AJH & Co.</h2>
            <p className="text-gray-400">
              Chartered Accountants
            </p>
            <p className="mt-4 text-gray-400">
              Founded in 1985, AJH & Co is amongst the most experienced Chartered Accountancy firms. Combining a rich heritage of more than four decades with a modern and cutting-edge practice, the firm offers full suite business service solutions to our domestic and international clients.
            </p>
          </div>
          
        
          <div>
            <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
            <ul className="text-gray-400">
              <a href='/direct-tax-services'><li className="mb-2 hover:bg-yellow-200">Direct Tax Services</li></a>
              <a href='/indirect-tax-services'><li className="mb-2 hover:bg-yellow-200">Indirect Tax</li></a>
              <a href='/auditing-and-assurance-service'><li className="mb-2 hover:bg-yellow-200">Auditing and Assurance Services</li></a>
              <a href='/corporate-and-LLP-Laws'><li className="mb-2 hover:bg-yellow-200">Corporate and LLP Laws</li></a>
              <a href='/insolvency-Laws'><li className='hover:bg-yellow-200'>Insolvency Laws (IBC)</li></a>
            </ul>
          </div>
          
         
          <div>
            <h3 className="text-lg font-semibold mb-4">TERMS</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          
         
          <div>
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                104, First Floor, Ushakiran Building, Naniwala Bagh, Azadpur, Delhi – 110 033 (India)
              </li>
              <li className="mb-2">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                011-27674137, 0124-4115084
              </li>
              <li className="mb-2">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                9811218748, 9999943488
              </li>
              <li className="mb-2">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                info@ajhco.in
              </li>
              <li>
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                AJH Consulting Firm
              </li>
            </ul>
          </div>

        </div>
        <div className="mt-10 text-center text-gray-400">
          <p>Copyright © 2020 AJHCO | Powered by Coravity Infotech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
