import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const SEOService = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img
            src="https://intersmart.ae/wp-content/uploads/2024/04/5-Ways-SEO-Online-Marketing-Can-Transform-Your-Business.webp"
            alt=""
          />
          <div className="p-12">
            <h1 className="text-3xl font-bold">
              Rank Higher and Convert More Leads
            </h1>
            <p className="text-base text-gray-500 mt-12">
              Our SEO team uses effective on-page and off-page optimization
              techniques to improve your website visibility, credibility, and
              search engine ranking, ultimately increasing website conversion
              rates and revenue.
            </p>
            <div className="flex gap-4 mt-16">
              <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
              <h1 className="text-base font-bold text-center">
                Improved website visibility and traffic
              </h1>
            </div>
            <div className="flex gap-4 mt-4">
              <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
              <h1 className="text-base font-bold text-center">
                High-quality Onpage and Offpage SEO practices
              </h1>
            </div>
            <div className="flex gap-4 mt-4">
              <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
              <h1 className="text-base font-bold text-center">
                Keyword research, link building and Meta descriptions
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOService;
