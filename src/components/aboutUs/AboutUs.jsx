import React from "react";
import "./AboutUS.css";
import { FaArrowRightLong } from "react-icons/fa6";
import ServicesMain from "../ServicesDetailsRoute/ServicesMain";
const AboutUs = () => {
  return (
    <div>
      <div className="about pl-4 pr-4 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Lets increase your social media presence and find new leads
          </h1>

          <div className="flex justify-center">
            <button className="flex items-center gap-2 bg-[#F6C71E] hover:bg-zinc-500 transition-colors duration-1000 ease-in-out text-gray-900 rounded-none p-3 font-semibold text-xl ">
              Get Started Now <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
      <div>
        <ServicesMain></ServicesMain>
      </div>
    </div>
  );
};

export default AboutUs;
