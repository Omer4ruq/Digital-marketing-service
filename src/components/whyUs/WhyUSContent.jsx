import React from "react";
import img1 from "../../assets/about3.jpg";
import img2 from "../../assets/about2.jpg";

const WhyUSContent = () => {
  return (
    <div className="bg-white w-10/12 mx-auto">
      <div className="grid grid-cols-1 p-4 md:mb-16 md:grid-cols-2 md:pl-14 ">
        <section className="pr-1 mt-6 md:mt-6 mb-6">
          <h1 className="text-2xl font-semibold mb-4">
            Why Choose Bros Media for Digital Marketing in Bangladesh
          </h1>
          <div className="pr-8 ">
            <p className="pb-4 text-gray-500 font-sans">
              Bros Media Solutions is the number one digital marketing service
              provider, located near Chittagong. We are known for delivering
              exceptional quality and efficient work.
            </p>
            <p className="text-gray-500 font-sans">
              As one of the most experienced digital marketing service
              providers, we plan and execute various digital marketing
              strategies like Website Designing, Search Engine Optimization
              (SEO), Google Ads, Social Media Marketing, etc., for our clients.
              Our extensive experience has made us one of the best digital
              marketing agencie.
            </p>
            <button className="flex items-center gap-2 mt-6 bg-[#F6C71E] hover:bg-zinc-500 transition-colors duration-1000 ease-in-out text-white rounded-none p-3 font-semibold text-base ">
              Learn More
            </button>
          </div>
        </section>
        <section className="pl-0 md:pr-10">
          <div className="md:mt-24">
            <img src={img1} alt="sdf" className="md:absolute w-[420px]" />
          </div>
          {/* <div>
            <img src={img2} alt="" className="absolute mt-60 ml-10 h-[320px]" />
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default WhyUSContent;
