// import AutoplaySlider from "react-awesome-slider/hoc/autoplay";
// import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import img1 from "../../assets/about1.jpg";
import img2 from "../../assets/about2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ClientsFeedback.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const ClientsFeedback = () => {
  const cards = [
    {
      id: 1,
      name: "Omer Faruq",
      review:
        "I wanted a website made quickly and without fuss and of course within budget. Brains Media Solutions helped get the website up and running in less than a week, and surprise, did not charge anything extra! Really want to thank Brains Media Solutions for a job well done",
      title: "Website Designing",
    },
    {
      id: 2,
      name: "Sajibul hasan",
      review:
        "I haveve had a good experience working with Bro's Media. Highly professional, great turn around time and attention to quality.",
      title: "SEO Article nd Content Writing",
    },
    {
      id: 3,
      name: "Arafat Talukder",
      review:
        "I have tried them for the content writing service and I must say that they have a team of real professionals.",
      title: "Content Writing",
    },
    {
      id: 4,
      name: "Tanzina Nasrin",
      review:
        "I wanted a website made quickly and without fuss and of course within budget. Brains Media Solutions helped get the website up and running in less than a week, and surprise, did not charge anything extra! Really want to thank Brains Media Solutions for a job well done",
      title: "Website Designing",
    },
  ];
  return (
    <div className=" mb-16 p-6">
      <div className="grid grid-cols-2">
        <section>
          <div className="absolute">
            <h1 className="text-lg font-bold text-[#F6C71E] mb-4">
              Results Of Our Hard Work
            </h1>
            <h4 className="text-4xl font-bold w-[500px]">
              Our clients love to work with us and here is what they have to
              say.
            </h4>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {" "}
            {cards.map((card) => (
              <div key={card.id}>
                <SwiperSlide>
                  <div className="w-[500px] h-72 bg-[#e4e4e6]">
                    <div className="p-8">
                      <h1 className="text-3xl font-bold text-start">
                        {card.title}
                      </h1>
                      <p className="text-gray-500 text-base text-start mt-6">
                        {card.review}
                      </p>
                      <div className="flex gap-4 mt-8">
                        <FaQuoteLeft className="text-[#F6C71E] text-4xl" />
                        <h1 className="text-2xl font-bold">{card.name}</h1>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
            {/* <div className="w-72 h-80 bg-[#e4e4e6]"></div> */}
            {/* <SwiperSlide>
          {" "}
          <div className="w-72 h-80 bg-[#e4e4e6]"></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-72 h-80 bg-[#e4e4e6]"></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-72 h-80 bg-[#e4e4e6]"></div>
        </SwiperSlide> */}
          </Swiper>
        </section>
        <section className="pl-0 md:p-4">
          <div>
            <img
              src="https://brainsmediasolutions.com/wp-content/uploads/2022/12/testimonial-dots.png"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://brainsmediasolutions.com/wp-content/uploads/2023/05/test-2.jpg"
              alt="sdf"
              className="-mt-14 ml-16"
            />
          </div>
          <div className="">
            <div className="bg-slate-700 w-56 h-[500px] absolute -mt-[550px] ml-[440px]">
              <h1 className="p-7 text-4xl font-bold text-white text-center">
                We have received an excellent rating of 4.7 out of 5 from both
                our clients and employees
              </h1>
            </div>
          </div>
        </section>
      </div>
      {/* <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        cssModule={AwesomeSliderStyles}
      >
        <div className="w-72 h-54 bg-black" />
        <div className="w-72 h-54 bg-black" />
        <div className="w-72 h-54 bg-black" />
      </AutoplaySlider> */}
    </div>
  );
};

export default ClientsFeedback;
