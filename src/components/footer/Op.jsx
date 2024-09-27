import React from "react";
import Bg from "./Bg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Op = () => {
  return (
    <div>
      <div className="bg-white h-40 "></div>
      <div className="bg-slate-900 h-24 "></div>
      <div className=" -mt-32 md:-mt-24  bg-[#555558] w-4/5 md:w-11/12 h-52 md:h-40 ml-12 opacity-90">
        <div className=" absolute ml-0 md:ml-[745px] rotate-0 -mt-44 md:-mt-60">
          <img
            src="https://brainsmediasolutions.com/wp-content/uploads/2023/01/footer-bg-line-shape.png"
            alt=""
          />
        </div>
        <div>
          <div className="md:flex justify-between p-6 md:p-12 ">
            <div className="">
              <h1 className="text-lg font-semibold text-white text-center md:text-start">
                Got an Idea?
              </h1>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
                Let's Work on It
              </h2>
            </div>
            <div className="ml-16 mt-4 md:mt-0 md:flex gap-6 items-center">
              <button className="flex items-center gap-2 h-10 md:h-14  bg-[#F6C71E] hover:bg-zinc-500 transition-colors duration-1000 ease-in-out text-gray-900 rounded-none p-3 font-semibold text-xl ">
                Call or WhatsApp <FaArrowRightLong />
              </button>
              <div className="flex gap-5 mt-3 md:mt-0">
                <div className="md:bg-white rounded-full w-14 h-14">
                  <FaWhatsapp className=" ml-10 text-[#F6C71E] text-3xl md:text-4xl rounded-full md:ml-[10px] md:mt-[10px]" />
                </div>
                <div className="text-white mt-0 md:mt-4">
                  <h1 className="text-center text-lg">012312312312</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Op;
