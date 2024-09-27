import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const PPCService = () => {
  return (
    <div>
      <div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <img
              src="https://www.launch-marketing.com/wp-content/uploads/2023/06/GettyImages-1251358514-1024x701.jpg"
              alt=""
            />
            <div className="p-12">
              <h1 className="text-3xl font-bold">
                Target with Precise Keywords
              </h1>
              <p className="text-base text-gray-500 mt-12">
                Our PPC advertising team delivers targeted traffic to your
                website through paid advertising campaigns that are precise,
                relevant, and cost-effective, providing measurable ROI and ad
                performance.
              </p>
              <div className="flex gap-4 mt-16">
                <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
                <h1 className="text-base font-bold text-center">
                  Measurable ROI and ad performance
                </h1>
              </div>
              <div className="flex gap-4 mt-4">
                <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
                <h1 className="text-base font-bold text-center">
                  Targeted traffic through paid advertising campaigns
                </h1>
              </div>
              <div className="flex gap-4 mt-4">
                <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
                <h1 className="text-base font-bold text-center">
                  Increased brand visibility and leads.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPCService;
