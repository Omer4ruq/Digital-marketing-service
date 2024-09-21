import React from "react";
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import TypingText from "./TypyingText";

const Hero = () => {
  const typo =
    "If your business is not on Social Media, then you are out of the competition.";
  return (
    <div className="hero pl-4 pr-4 mb-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
          Get your business online in less than 24 hours
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-mono mb-6">
          If your business is not on Social Media, then you are out of the
          competition.
          <TypingText typo={typo}></TypingText>
        </p>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-[#F6C71E] hover:bg-zinc-500 transition-colors duration-1000 ease-in-out text-gray-900 rounded-none p-3 font-semibold text-xl ">
            Get Started Now <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
