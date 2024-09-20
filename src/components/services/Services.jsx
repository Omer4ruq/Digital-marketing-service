import React from "react";
import social from "../../assets/social-media.png";
import web from "../../assets/development.png";
import content from "../../assets/content.png";
import seo from "../../assets/seo.png";
import ppc from "../../assets//pay-per-click.png";

const Services = () => {
  return (
    <div className="mb-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-10">
          Digital Marketing Services Under One Roof
        </h1>
      </div>
      {/* <div className="bg-white w-40 h-36 drop-shadow-xl text-center justify-center p-2 ">
        <img src={social} alt="" className="w-16 object-center" />
        <h1>Social Media Marketing</h1>
      </div> */}
      <div className="flex justify-between pl-1 md:pl-10 pr-1 md:pr-10 mb-10 ">
        <div className="bg-white w-40 h-36 drop-shadow-xl text-center flex flex-col items-center justify-center p-4 md:w-48 md:h-40 lg:w-[370px] lg:h-56 hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out ">
          <img
            src={social}
            alt="Social Media Marketing"
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="text-sm font-semibold md:text-base lg:text-lg">
            Social Media Marketing
          </h1>
        </div>
        <div className="bg-white w-40 h-36 drop-shadow-xl text-center flex flex-col items-center justify-center p-4 md:w-48 md:h-40 lg:w-[370px] lg:h-56 hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out">
          <img
            src={web}
            alt="Social Media Marketing"
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="text-sm font-semibold md:text-base lg:text-lg">
            Website Design
          </h1>
        </div>
        <div className="bg-white w-40 h-36 drop-shadow-xl text-center flex flex-col items-center justify-center p-4 md:w-48 md:h-40 lg:w-[370px] lg:h-56 hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out">
          <img
            src={content}
            alt="Social Media Marketing"
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="text-sm font-semibold md:text-base lg:text-lg">
            Content Writting
          </h1>
        </div>
      </div>
      <div className="flex justify-center pl-10 pr-10 gap-4">
        <div className="bg-white w-40 h-36 drop-shadow-xl text-center flex flex-col items-center justify-center p-4 md:w-48 md:h-40 lg:w-[400px] lg:h-56 hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out">
          <img
            src={seo}
            alt="Social Media Marketing"
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="text-sm font-semibold md:text-base lg:text-lg">SEO</h1>
        </div>
        <div className="bg-white w-40 h-36 drop-shadow-xl text-center flex flex-col items-center justify-center p-4 md:w-48 md:h-40 lg:w-[400px] lg:h-56 hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out">
          <img
            src={ppc}
            alt="Social Media Marketing"
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />

          <h1 className="text-sm font-semibold md:text-base lg:text-lg">PPC</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
