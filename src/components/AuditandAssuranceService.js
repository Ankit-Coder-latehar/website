import React from 'react';

const AuditServices = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-64 p-5 bg-gray-100">
        <h2 className="font-semibold text-lg mb-5">Tax Services</h2>
        <ul className="text-sm">
          <li className="mb-2">
            <a href="/direct-tax-services" className="block p-2 hover:bg-[#F37920]">Direct Tax Services</a>
          </li>
          <li className="mb-2">
            <a href="/indirect-tax-services" className="block p-2 hover:bg-[#F37920]">Indirect Tax</a>
          </li>
          <li className="mb-2">
            <a href="/auditing-and-assurance-service" className="block p-2 bg-[#F37920]">Auditing and Assurance Services</a>
          </li>
          <li className="mb-2">
            <a href="/corporate-and-LLP-Laws" className="block p-2 hover:bg-[#F37920]">Corporate and LLP Laws</a>
          </li>
      
        </ul>
      </div>
      <div className="flex-1 p-5">
        <div className="mb-4">
          <p className="text-sm md:text-base">Our assurance services help organizations keep pace in their growth trajectory along with ensuring timely compliance in regulatory responsibilities. We provide the following services to global and local clients with the same fervor for quality, innovation, and value addition.</p>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3 md:px-6 md:py-3">Audit & Assurance</th>
                <th className="px-4 py-3 md:px-6 md:py-3">Tax Audit</th>
                <th className="px-4 py-3 md:px-6 md:py-3">Asset Valuation and <br className="hidden md:block"/>Verification</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b">
                <td className="px-4 py-2 md:px-6 md:py-4">The investors and lenders trust auditors to provide an unbiased opinion about the financial position and the financial results.</td>
                <td className="px-4 py-2 md:px-6 md:py-4">Compliance under Tax Audit Rules/Act and forms provided (As per Form 3CD) and computation of income as per the above form.</td>
                <td className="px-4 py-2 md:px-6 md:py-4">TRJ provides independent Inventory and Fixed Asset Verification services on Pan-India basis.</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 md:px-6 md:py-4">Our extensive exposure, partner-led services, strong knowledge base and methodology, uniquely position us to provide value add services.</td>
                <td className="px-4 py-2 md:px-6 md:py-4">We aim at providing a complete value add tax audit services.</td>
                <td className="px-4 py-2 md:px-6 md:py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AuditServices;

