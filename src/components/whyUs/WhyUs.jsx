import React from "react";
import bg from "../../assets/project-bg.jpg";
import { SiFramework } from "react-icons/si";
import { IoIosTimer } from "react-icons/io";
import WhyUSContent from "./WhyUSContent";

const WhyUs = () => {
  return (
    <div>
      <div>
        <img src={bg} alt="" />
      </div>
      <div className="absolute -mt-72">
        <WhyUSContent></WhyUSContent>
      </div>
      <div className="bg-[#555558] pt-40">
        <div className="pt-20 pl-10 grid grid-cols-3 gap-4">
          <h1 className="text-white text-xl font-bold w-80">
            TOGETHER WE CAN GROW AND MARKET YOUR BUSINESS!
          </h1>
          <div className="flex gap-4">
            <div>
              <SiFramework className=" text-6xl text-yellow-400" />
            </div>
            <div className="w-80 ">
              <h1 className="text-yellow-400 text-2xl">Quality Work</h1>
              <p className="text-white">
                for the past 8 years we have been delivering quality content
                writing services like blogs, articles and property descriptions
                to one of India's top real estate portals.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <IoIosTimer className=" text-6xl text-yellow-400" />
            </div>
            <div className="w-80 ">
              <h1 className="text-yellow-400 text-2xl">Timely Response</h1>
              <p className="text-white">
                On average, we design and deliver approximately 12 to 15
                high-quality posts per day, ensuring that we meet the social
                media requirements of our clients promptly and effectively.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-20 pl-10 grid grid-cols-3 gap-4">
          <div className="flex gap-4">
            <div>
              <SiFramework className=" text-6xl text-yellow-400" />
            </div>
            <div className="w-80 ">
              <h1 className="text-yellow-400 text-2xl">Quality Work</h1>
              <p className="text-white">
                for the past 8 years we have been delivering quality content
                writing services like blogs, articles and property descriptions
                to one of India's top real estate portals.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <SiFramework className=" text-6xl text-yellow-400" />
            </div>
            <div className="w-80 ">
              <h1 className="text-yellow-400 text-2xl">Quality Work</h1>
              <p className="text-white">
                for the past 8 years we have been delivering quality content
                writing services like blogs, articles and property descriptions
                to one of India's top real estate portals.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <IoIosTimer className=" text-6xl text-yellow-400" />
            </div>
            <div className="w-80 ">
              <h1 className="text-yellow-400 text-2xl">Timely Response</h1>
              <p className="text-white">
                On average, we design and deliver approximately 12 to 15
                high-quality posts per day, ensuring that we meet the social
                media requirements of our clients promptly and effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
