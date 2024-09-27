import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";

const Row3 = () => {
  return (
    <div className="bg-white">
      <h1 className="text-5xl font-bold text-center mt-8 pt-8">
        Social Media Marketing Services to scale your business
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 p-8 gap-6 ">
        <div className="bg-[#f5f5f5] p-10">
          <div className="text-6xl ml-[150px] md:ml-[135px]">
            <FaFacebookSquare />
          </div>
          <h1 className="font-bold text-2xl text-center mb-4">Facebook</h1>
          <p className="text-gray-400 text-center ">
            Our social media marketing agency can help you create a strong
            presence on Facebook through targeted ad campaigns, engaging
            content, and audience interaction.
          </p>
        </div>
        <div className="bg-[#f5f5f5] p-10">
          <div className="text-6xl ml-[150px] md:ml-[135px]">
            <FaInstagramSquare />
          </div>
          <h1 className="font-bold text-2xl text-center mb-4">Instagram</h1>
          <p className="text-gray-400 text-center ">
            We offer services to boost your Instagram presence with visually
            appealing content, ad campaigns, and influencer marketing.
          </p>
        </div>
        <div className="bg-[#f5f5f5] p-10">
          <div className="text-6xl ml-[150px] md:ml-[135px]">
            <IoLogoLinkedin />
          </div>
          <h1 className="font-bold text-2xl text-center mb-4">LinkedIn</h1>
          <p className="text-gray-400 text-center ">
            We provide LinkedIn marketing services to help you reach the right
            audience, build credibility through thought leadership, and drive
            conversions.
          </p>
        </div>
        <div className="bg-[#f5f5f5] p-10">
          <div className="text-6xl ml-[150px] md:ml-[135px]">
            <FaSquareGooglePlus />
          </div>
          <h1 className="font-bold text-2xl text-center mb-4">
            Google My Business
          </h1>
          <p className="text-gray-400 text-center ">
            We can optimize your Google My Business listing to improve your
            online visibility, attract potential leads, and increase your
            website traffic.
          </p>
        </div>
        <div className="bg-[#f5f5f5] p-10">
          <div className="text-6xl ml-[150px] md:ml-[135px]">
            <FaYoutube />
          </div>
          <h1 className="font-bold text-2xl text-center mb-4">YouTube</h1>
          <p className="text-gray-400 text-center ">
            Our team can guide you to leverage the power of YouTube by creating
            compelling video content, optimizing your channel, and promoting
            your brand to the right audience.
          </p>
        </div>
        <div className="bg-[#f5f5f5] p-10">
          <div className="text-6xl ml-[150px] md:ml-[135px]">
            <FaTwitterSquare />
          </div>
          <h1 className="font-bold text-2xl text-center mb-4">Twitters</h1>
          <p className="text-gray-400 text-center ">
            Our social media marketing agency can assist you in building a
            strong Twitter presence through engaging content, targeted ad
            campaigns, and strategic community engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Row3;
