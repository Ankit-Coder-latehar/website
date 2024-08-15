import React from "react";

const ServicesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          How We Can Work Together?
        </h2>

        <p className="mt-4 text-lg text-gray-500">
          We work together to provide assurance, Regulatory Advisory, Taxation & Business Services. We help clients by
          understanding the complexity of the regulatory environment.
        </p>

        <div className="mt-8 mb-12 flex justify-center">
          <div className="border-t-2 border-yellow-500 w-16 mx-auto"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-500">
              Direct Tax Services
            </h3>
            <p className="mt-2 text-gray-600">
              Our in-depth understanding and knowledge of the Tax Laws and regulatory areas including but not limited to, Transfer Pricing, International Tax, and Tax Planning.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-500">
              Indirect Tax
            </h3>
            <p className="mt-2 text-gray-600">
              The Firm holds expertise in the following areas, with the team of professionals navigating the businesses safely through the soaring tax & regulatory tides under Indian indirect laws.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-500">
              Auditing & Assurance Services
            </h3>
            <p className="mt-2 text-gray-600">
              Our assurance services help organizations keep pace in their growth trajectory along with ensuring timely compliance in regulatory responsibilities.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-500">
              Corporate And LLP Laws
            </h3>
            <p className="mt-2 text-gray-600">
              Setting up of corporate and LLP entities. Compliances of Company Law matters.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
