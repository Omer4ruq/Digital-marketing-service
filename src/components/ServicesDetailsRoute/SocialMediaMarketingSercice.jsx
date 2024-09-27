import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const SocialMediaMarketingSercice = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img
          src="https://www.herawisconsin.org/wp-content/uploads/2024/04/1667919899636a701b121a1.png"
          alt=""
        />
        <div className="p-12">
          <h1 className="text-3xl font-bold">
            Connect and Convert Your Followers
          </h1>
          <p className="text-base text-gray-500 mt-12">
            We create targeted social media campaigns that promote brand
            awareness, engage customers, and drive traffic to your website,
            ultimately increasing lead generation and conversion rates
          </p>
          <div className="flex gap-4 mt-16">
            <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
            <h1 className="text-base font-bold text-center">
              Creative posts, captions, hashtags and videos
            </h1>
          </div>
          <div className="flex gap-4 mt-4">
            <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
            <h1 className="text-base font-bold text-center">
              Increased likes, shares and followers
            </h1>
          </div>
          <div className="flex gap-4 mt-4">
            <FaCircleCheck className="text-yellow-400 text-center text-2xl" />
            <h1 className="text-base font-bold text-center">
              Social media campaigns for brand promotion and leads
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketingSercice;
