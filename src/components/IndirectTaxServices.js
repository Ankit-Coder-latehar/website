import React from 'react';

const IndirectTaxServices = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-64 bg-gray-100 p-5 lg:p-6">
        <h2 className="font-semibold text-lg mb-5">Tax Services</h2>
        <ul className="text-sm">
          <li className="mb-2">
            <a href="/direct-tax-services" className="block p-2 hover:bg-[#F37920]">Direct Tax Services</a>
          </li>
          <li className="mb-2">
            <a href="/indirect-tax-services" className="block p-2 bg-[#F37920]">Indirect Tax</a>
          </li>
          <li className="mb-2">
            <a href="/corporate-and-LLP-Laws" className="block p-2 hover:bg-[#F37920]">Auditing and Assurance Services</a>
          </li>
          <li className="mb-2">
            <a href="/corporate-and-LLP-Laws" className="block p-2 hover:bg-[#F37920]">Corporate and LLP Laws</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-5 lg:p-6">
        <div className="mb-4">
          <p className="text-sm lg:text-base">
            With effect from July 2017, a plethora of indirect tax levies of the Centre & the States have been subsumed into a single uniform tax, ie: GST.<br/><br/>The Firm holds expertise in the following areas, with the team of professionals navigating the businesses safely through the soaring tax & regulatory tides under Indian indirect laws.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm lg:text-base text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3 lg:px-6 lg:py-4">GST Compliance Services</th>
                <th className="px-4 py-3 lg:px-6 lg:py-4">GST Advisory Services</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b">
                <td className="px-4 py-2 lg:px-6 lg:py-4">End to end service on compliance under the<br/> provision of GST Law including but not limited to GST<br/> Audit and Tax Assessment.</td>
                <td className="px-4 py-2 lg:px-6 lg:py-4">Contract Review and recommending optimal tax <br/>structures from GST point of view</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 lg:px-6 lg:py-4">GST Tax Refund related assistance.</td>
                <td className="px-4 py-2 lg:px-6 lg:py-4">Drafting of Organization wide policies from GST <br/> perspective.</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 lg:px-6 lg:py-4"></td>
                <td className="px-4 py-2 lg:px-6 lg:py-4">Advisory, Advocacy and Representation Services <br/>under all Indian Indirect Tax Laws</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 lg:px-6 lg:py-4"></td>
                <td className="px-4 py-2 lg:px-6 lg:py-4">Advisory, Advocacy and Representation for specific<br/> incentives and tax benefits like SEZ etc.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IndirectTaxServices;
