import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const ContentWrittingService = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <img
        src="https://contentwriters.com/blog/wp-content/uploads/PPC2018.jpg"
        alt=""
      />
      <div className="p-12">
        <h1 className="text-3xl font-bold">Engage Your Audience with Words</h1>
        <p className="text-base text-gray-500 mt-12">
          Our team of experienced writers create informative and engaging
          content for websites, blogs, and other marketing materials to enhance
          brand awareness and improve website traffic and conversion rates.
        </p>
        <div className="flex gap-4 mt-16">
          <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
          <h1 className="text-base font-bold text-center">
            Engaging content for websites and blogs
          </h1>
        </div>
        <div className="flex gap-4 mt-4">
          <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
          <h1 className="text-base font-bold text-center">
            100% plagiarism free and unique content
          </h1>
        </div>
        <div className="flex gap-4 mt-4">
          <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
          <h1 className="text-base font-bold text-center">
            Keyword and SEO optimized content
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContentWrittingService;
