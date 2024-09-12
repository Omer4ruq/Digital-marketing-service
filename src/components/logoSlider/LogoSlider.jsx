import React from "react";

const LogoSlider = () => {
  const logos = [
    "/src/assets/logo1.png",
    "/src/assets/logo2.png",
    "/src/assets/logo3.png",
    "/src/assets/logo4.png",

    "/src/assets/logo6.png",
    "/src/assets/logo7.png",
    "/src/assets/logo8.png",
  ];
  return (
    <div className="mb-16">
      <div>
        <div className="text-center">
          <p className="text-base text-orange-500 md:text-lg lg:text-xl font-light mb-2">
            Our Awesome Clients
          </p>
          <h1 className="text-xl text-black md:text-3xl lg:text-5xl font-bold mb-10">
            Our Services are Trusted by
          </h1>
        </div>
      </div>
      <div className="logo-slider-container w-full overflow-hidden">
        <div className="logo-slider flex items-center space-x-8 animate-scroll ">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-28 w-50 bg-slate-200 transition-transform duration-300 hover:scale-110 hover:bg-white hover:shadow-md"
            />
          ))}
          {/* Duplicate the logos for infinite scroll */}
          {logos.map((logo, index) => (
            <img
              key={index + logos.length}
              src={logo}
              alt={`Logo ${index + logos.length + 1}`}
              className="h-28 w-50 bg-slate-200 transition-transform duration-300 hover:scale-110 hover:bg-white hover:shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LogoSlider;
