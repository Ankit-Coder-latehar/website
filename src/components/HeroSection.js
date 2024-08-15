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
    pauseOnHover: true,
  };

  return (
    <div className="relative h-auto bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="text-white max-w-lg mt-8 md:mt-0 md:mr-auto text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            We provide timely, <br className="sm:hidden md:inline-block" />
            innovative, integrated, <br className="sm:hidden md:inline-block" />
            and solution-oriented advice.
          </h1>
          <div className="flex justify-center md:justify-start">
            <a href="/about">
              <button className="bg-yellow-500 text-gray-900 px-6 py-3 mt-4 rounded font-medium hover:bg-yellow-600 transition-transform transform hover:scale-105">
                About Us
              </button>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="overflow-hidden">
            <Slider {...settings}>
              <div className="relative">
                <img
                  src="/pexels-a-darmel-7710218.jpg"
                  alt="IT Spaze Park, Sohna Road, Gurugram"
                  className="rounded-lg shadow-lg w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                />
                <p className="absolute bottom-0 left-0 text-xs text-gray-300 bg-black bg-opacity-50 px-2 py-1 rounded">
                  IT Spaze Park, Sohna Road, Gurugram
                </p>
              </div>
              <div className="relative">
                <img
                  src="/pexels-rethaferguson-3810793.jpg"
                  alt="Innovative Workspaces"
                  className="rounded-lg shadow-lg w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                />
                <p className="absolute bottom-0 left-0 text-xs text-gray-300 bg-black bg-opacity-50 px-2 py-1 rounded">
                  Innovative Workspaces
                </p>
              </div>
              <div className="relative">
                <img
                  src="/pexels-thirdman-7652039.jpg"
                  alt="Modern Architecture"
                  className="rounded-lg shadow-lg w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                />
                <p className="absolute bottom-0 left-0 text-xs text-gray-300 bg-black bg-opacity-50 px-2 py-1 rounded">
                  Modern Architecture
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

