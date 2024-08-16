import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, description, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white p-6 md:p-8 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={() => navigate(navigateTo)}
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  );
};

const Cards = () => {
  const services = [
    {
      title: "Direct Tax Services",
      description: "Our in-depth understanding and knowledge of the Tax Laws and regulatory areas including but not limited to, Transfer Pricing, International Tax, and Tax Planning.",
      navigateTo: "/direct-tax-services"
    },
    {
      title: "Indirect Tax",
      description: "The Firm holds expertise in the following areas, with the team of professionals navigating the businesses safely through the soaring tax & regulatory tides under Indian indirect laws.",
      navigateTo: "/indirect-tax-services"
    },
    {
      title: "Auditing And Assurance Services",
      description: "Our assurance services help organizations keep pace in their growth trajectory along with ensuring timely compliance in regulatory responsibilities.",
      navigateTo: "/auditing-and-assurance-service"
    },
    {
      title: "Corporate And LLP Laws",
      description: "Setting up of corporate and LLP entities, Compliances of Company Law matters",
      navigateTo: "/corporate-and-LLP-Laws"
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row - Main Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8">
          <ServiceCard {...services[0]} />
          <ServiceCard {...services[1]} />
        </div>
        {/* Second Row - Remaining Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <ServiceCard {...services[2]} />
          <ServiceCard {...services[3]} />
        </div>
      </div>
    </div>
  );
};

export default Cards;

