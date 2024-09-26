import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const WebDesignService = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <img
          src="https://www.forbes.com/advisor/wp-content/uploads/2022/09/Image_-_How_to_design_a_website_.jpeg-900x510.jpg"
          alt=""
        />
        <div className="p-12">
          <h1 className="text-3xl font-bold">
            Design with Visuals and Creativity
          </h1>
          <p className="text-base text-gray-500 mt-12">
            Our website design team creates visually appealing and user-friendly
            websites that enhance brand identity and user experience, while also
            improving website performance and search engine ranking.
          </p>
          <div className="flex gap-4 mt-16">
            <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
            <h1 className="text-base font-bold text-center">
              Attractive and user-friendly website designs
            </h1>
          </div>
          <div className="flex gap-4 mt-4">
            <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
            <h1 className="text-base font-bold text-center">
              Customized and responsive designs
            </h1>
          </div>
          <div className="flex gap-4 mt-4">
            <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
            <h1 className="text-base font-bold text-center">
              SEO optimized and better search engine ranking
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignService;
