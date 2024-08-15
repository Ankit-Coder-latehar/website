import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative h-screen bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
        <div className="text-white max-w-lg mt-8 md:mt-0 md:mr-auto ml-0 md:ml-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
            We provide timely, innovative, integrated, and solution-oriented advice.
          </h1>
          <div className="flex justify-center md:justify-start">
          <a href="/about"><button className="bg-yellow-500 text-gray-900 px-6 py-3 mt-4 rounded font-medium hover:bg-yellow-600">
              About Us
            </button>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Slider {...settings}>
            <div className="relative">
              <img
                src="/pexels-a-darmel-7710218.jpg"
                alt="Office Building 1"
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <p className="absolute bottom-0 left-0 text-xs text-gray-300 bg-black bg-opacity-50 px-2 py-1 rounded">
                IT Spaze Park, Sohna Road, Gurugram
              </p>
            </div>
            <div className="relative">
              <img
                src="/pexels-rethaferguson-3810793.jpg"
                alt="Office Building 2"
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <p className="absolute bottom-0 left-0 text-xs text-gray-300 bg-black bg-opacity-50 px-2 py-1 rounded">
                Innovative Workspaces
              </p>
            </div>
            <div className="relative">
              <img
                src="/pexels-thirdman-7652039.jpg"
                alt="Office Building 3"
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <p className="absolute bottom-0 left-0 text-xs text-gray-300 bg-black bg-opacity-50 px-2 py-1 rounded">
                Modern Architecture
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
