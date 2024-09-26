import React, { useState } from "react";
import WebDesignService from "./WebDesignService";
import ContentWrittingService from "./ContentWrittingService";
import "./Services.css";
import social from "../../assets/social-media.png";
import web from "../../assets/development.png";
import content from "../../assets/content.png";
import seo from "../../assets/seo.png";
import ppc from "../../assets//pay-per-click.png";
import SocialMediaMarketingSercice from "./SocialMediaMarketingSercice";
import SEOService from "./SEOService";
import PPCService from "./PPCService";
import ServiceDetails from "./ServiceDetails";

const ServicesMain = () => {
  const [activeService, setActiveService] = useState("ServiceOne");

  const renderServiceComponent = () => {
    switch (activeService) {
      case "ServiceOne":
        return <SocialMediaMarketingSercice></SocialMediaMarketingSercice>;
      case "ServiceTwo":
        return <WebDesignService></WebDesignService>;
      case "ServiceThree":
        return <ContentWrittingService></ContentWrittingService>;
      case "ServiceFour":
        return <SEOService></SEOService>;
      case "ServiceFive":
        return <PPCService></PPCService>;
      default:
        return <WebDesignService></WebDesignService>;
    }
  };
  return (
    <div>
      <ServiceDetails></ServiceDetails>
      <div className="about-us-container">
        <h1>About Us</h1>
        <div className="services-menu">
          {/* social media marketing */}
          <button onClick={() => setActiveService("ServiceOne")}>
            <div
              className={`${
                activeService === "ServiceOne"
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-black"
              }  p-2  w-[120px] h-[100px] md:w-[150px] md:h-[130px] lg:w-[220px] lg:h-[130px] drop-shadow-xl text-center flex  items-center justify-center  hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out `}
            >
              <img
                src={social}
                alt="Social Media Marketing"
                className="w-8 md:w-10 lg:w-16 h-8 md:h-10 lg:h-16 object-cover mb-2 mx-auto"
              />
              <h1 className="text-xs font-semibold md:text-sm lg:text-lg">
                Social Media Marketing
              </h1>
            </div>
          </button>
          {/* website design */}
          <button onClick={() => setActiveService("ServiceTwo")}>
            <div
              className={`${
                activeService === "ServiceTwo"
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-black"
              }  p-2  w-[120px] h-[100px] md:w-[150px] md:h-[130px] lg:w-[220px] lg:h-[130px] drop-shadow-xl text-center flex  items-center justify-center  hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out `}
            >
              <img
                src={web}
                alt="website design"
                className="w-8 md:w-10 lg:w-16 h-8 md:h-10 lg:h-16 object-cover mb-2 mx-auto"
              />
              <h1 className="text-xs font-semibold md:text-sm lg:text-lg">
                Website Design
              </h1>
            </div>
          </button>
          {/* content writting */}
          <button onClick={() => setActiveService("ServiceThree")}>
            <div
              className={`${
                activeService === "ServiceThree"
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-black"
              }  p-2  w-[120px] h-[100px] md:w-[150px] md:h-[130px] lg:w-[220px] lg:h-[130px] drop-shadow-xl text-center flex  items-center justify-center  hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out `}
            >
              <img
                src={content}
                alt="Content Writting"
                className="w-8 md:w-10 lg:w-16 h-8 md:h-10 lg:h-16 object-cover mb-2 mx-auto"
              />
              <h1 className="text-xs font-semibold md:text-sm lg:text-lg">
                Content Writting
              </h1>
            </div>
          </button>
          {/* seo */}
          <button
            onClick={() => setActiveService("ServiceFour")}
            className="hidden md:block "
          >
            <div
              className={`${
                activeService === "ServiceFour"
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-black"
              }  p-2 flex  w-[120px] h-[100px] md:w-[150px] md:h-[130px] lg:w-[220px] lg:h-[130px] drop-shadow-xl text-center  items-center justify-center  hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out `}
            >
              <img
                src={seo}
                alt="SEO"
                className="w-8 md:w-10 lg:w-16 h-8 md:h-10 lg:h-16 object-cover mb-2 mx-auto"
              />
              <h1 className="text-xs font-semibold md:text-sm lg:text-lg">
                Search Engine Optimization
              </h1>
            </div>
          </button>
          {/* ppc */}
          <button onClick={() => setActiveService("ServiceFive")}>
            <div
              className={`${
                activeService === "ServiceFive"
                  ? "bg-yellow-400 text-white"
                  : "bg-white text-black"
              }  p-2  w-[120px] h-[100px] md:w-[150px] md:h-[130px] lg:w-[220px] lg:h-[130px] drop-shadow-xl text-center flex  items-center justify-center  hover:cursor-pointer hover:bg-yellow-400 transition-colors duration-1000 ease-in-out `}
            >
              <img
                src={ppc}
                alt="PPC"
                className="w-8 md:w-10 lg:w-16 h-8 md:h-10 lg:h-16 object-cover mb-2 mx-auto"
              />
              <h1 className="text-xs font-semibold md:text-sm lg:text-lg">
                Pay Per Click Advertising
              </h1>
            </div>
          </button>
        </div>

        <div className="service-details">
          {/* Here the relevant service component will be displayed */}
          {renderServiceComponent()}
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;
