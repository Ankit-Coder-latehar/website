import React from 'react';

const TaxServices = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-64 bg-gray-100 p-5">
        <h2 className="font-semibold text-lg mb-5">Tax Services</h2>
        <ul className="text-sm">
          <li className="mb-2">
            <a href="/direct-tax-services" className="block p-2 bg-[#F37920] ">Direct Tax Services</a>
          </li>
          <li className="mb-2">
            <a href="/indirect-tax-services" className="block p-2 hover:bg-[#F37920]">Indirect Tax</a>
          </li>
          <li className="mb-2">
            <a href="/auditing-and-assurance-service" className="block p-2 hover:bg-[#F37920]">Auditing and Assurance Services</a>
          </li>
          <li className="mb-2">
            <a href="/corporate-and-LLP-Laws" className="block p-2 hover:bg-[#F37920]">Corporate and LLP Laws</a>
          </li>
      
        </ul>
      </div>
      <div className="flex-1 p-5 mt-4 lg:mt-0">
        <div className="mb-4">
          <p>Our in-depth understanding and knowledge of the Tax Laws and regulatory areas including but not limited to, Transfer Pricing, International Tax, and Tax Planning.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Corporate Tax</th>
                <th className="px-6 py-3">Transfer Pricing</th>
                <th className="px-6 py-3">International Tax</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b">
                <td className="px-6 py-4">Tax Audit<br/>Tax Returns</td>
                <td className="px-6 py-4">Domestic and International Transfer Pricing Audit/ Report/ Detail study.</td>
                <td className="px-6 py-4">Preparation and issuing Certificate of remittance – Form 15CA and Form 15CB.</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">Tax Assessments and Appeals.</td>
                <td className="px-6 py-4">Handling Transfer Pricing Assessments and Litigation matters.</td>

              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">Tax Planning and advance tax compliance.</td>
                <td className="px-6 py-4">Assistance in Country-by-Country Reporting (CBCR).</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">Withholding tax compliance.</td>
                <td className="px-6 py-4">Devising Organization specific policies from a transfer pricing perspective.</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaxServices;
