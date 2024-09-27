import React from "react";
import customize from "./serviceImages/custom.png";
import responsive from "./serviceImages/responsive.png";
import userFriendly from "./serviceImages/web-design.png";

const SecondText = () => {
  return (
    <div>
      <h1 className="text-lg font-bold text-yellow-400 text-center mt-10">
        Benefits Of Our Website Development Services
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 pt-10 md:p-10">
        <div className="gap-2">
          <h1 className="text-center text-xl font-bold">
            Increased visibility
          </h1>
          <p className="text-center text-gray-500  p-6">
            Attract more customers to your business with our website development
            services.
          </p>
        </div>
        <div className="gap-2">
          <h1 className="text-center text-xl font-bold">
            Credibility and trust
          </h1>
          <p className="text-center text-gray-500 p-6">
            Build credibility and trust with a professionally designed website.
          </p>
        </div>
        <div className="gap-2">
          <h1 className="text-center text-xl font-bold">Convenience</h1>
          <p className="text-center text-gray-500 p-6">
            Provide convenience to both you and your customers with a website.
          </p>
        </div>
        <div className="gap-2">
          <h1 className="text-center text-xl font-bold">
            Cost-effective marketing
          </h1>
          <p className="text-center text-gray-500 p-6">
            Reach a wider audience with a cost-effective marketing strategy
            through a website.
          </p>
        </div>
        <div className="gap-2">
          <h1 className="text-center text-xl font-bold">
            Improved customer service
          </h1>
          <p className="text-center text-gray-500 p-6">
            Improve customer service by providing a platform for easy
            communication and inquiries.
          </p>
        </div>
        <div className="gap-2">
          <h1 className="text-center text-xl font-bold">
            Competitive advantage
          </h1>
          <p className="text-center text-gray-500 p-6">
            Stand out from competitors and gain a competitive advantage with a
            well-designed website.
          </p>
        </div>
      </div>
      <div className="bg-white ">
        <div className="pt-10 pb-4">
          <h1 className="text-center font-bold text-2xl pb-4">
            Professional Website Development And Design Company Based In Belgaum
          </h1>
          <h1 className="text-gray-400 text-center">
            Having a responsive website design is crucial for promoting your
            brand and establishing a strong digital presence in today's
            competitive marketplace.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-8 gap-6">
          <div className="bg-[#f5f5f5] p-10">
            <img
              src={customize}
              alt=""
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-4">
              Customized Approach
            </h1>
            <p className="text-gray-400 text-center ">
              Our website designing company offers a customized approach to
              ensure that your website meets your specific needs and goals.
            </p>
          </div>
          <div className="bg-[#f5f5f5] p-10">
            <img
              src={userFriendly}
              alt=""
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-4">
              User-Friendly Design
            </h1>
            <p className="text-gray-400 text-center ">
              Our website designing company offers a customized approach to
              ensure that your website meets your specific needs and goals.
            </p>
          </div>
          <div className="bg-[#f5f5f5] p-10">
            <img
              src={responsive}
              alt=""
              className="w-16 h-16 object-cover mb-2 mx-auto"
            />
            <h1 className="font-bold text-2xl text-center mb-4">
              Responsive Design
            </h1>
            <p className="text-gray-400 text-center ">
              Our mobile-friendly design approach ensures that your website
              looks great and functions effectively on all devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondText;
