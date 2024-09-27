import React from "react";
import webDesign from "./serviceImages/coding.png";
import Presentation from "./serviceImages/presentation.png";
import brochure from "./serviceImages/brochure.png";
import socialMedia from "./serviceImages/social-media.png";
import logo from "./serviceImages/logo-design.png";
import Infographics from "./serviceImages/pie-chart.png";

const FirstText = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-2 md:grid-cols-3 pt-10 md:p-10">
        <div className="gap-2">
          <img
            src={webDesign}
            alt=""
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="text-center text-xl font-bold">Web Development</h1>
          <p className="text-center text-gray-500 p-6">
            Professional and user-friendly website designs to enhance your
            online presence.
          </p>
        </div>
        <div className="gap-2">
          <img
            src={Presentation}
            alt=""
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="text-center text-xl font-bold">Presentations</h1>
          <p className="text-center text-gray-500 p-6">
            Engaging and persuasive presentations to captivate your audience and
            convey your message effectively.
          </p>
        </div>
        <div className="gap-2">
          <img
            src={logo}
            alt=""
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="text-center text-xl font-bold">
            Banners/Flyers/ Logos
          </h1>
          <p className="text-center text-gray-500 p-6">
            Eye-catching designs for your marketing materials that make your
            brand stand out.
          </p>
        </div>
        <div className="gap-2">
          <img
            src={brochure}
            alt=""
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="text-center text-xl font-bold">Brochure</h1>
          <p className="text-center text-gray-500 p-6">
            Informative and visually appealing brochures that showcase your
            products and services in the best possible light.
          </p>
        </div>
        <div className="gap-2">
          <img
            src={socialMedia}
            alt=""
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="text-center text-xl font-bold">Social Media Posts</h1>
          <p className="text-center text-gray-500 p-6">
            Customized social media posts to help you promote your brand and
            increase engagement on social media platforms.
          </p>
        </div>
        <div className="gap-2">
          <img
            src={Infographics}
            alt=""
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="text-center text-xl font-bold">Infographics</h1>
          <p className="text-center text-gray-500  p-6">
            Creative and visually compelling infographics to communicate complex
            data and information in an easy-to-understand way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstText;
