import React, { useEffect, useRef, useState } from "react";
import EmployeeCart from "./EmployeeCart";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Employee = () => {
  const controls = useAnimation(); // Controls the animation based on scroll
  const [ref, inView] = useInView({
    threshold: 0.3, // Trigger animation when 30% of the section is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };
  const slideRef = useRef(null);

  const scrolLeft = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({
        left: -slideRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrolRight = () => {
    slideRef.current.scrollBy({
      left: slideRef.current.offsetWidth,
      behavior: "smooth",
    });
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/employee.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="mt-14 mb-16">
      <div className="text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="logo-slider-container w-full overflow-hidden"
        >
          {/* Title and subtitle */}
          <motion.div className="text-center">
            <motion.p className="text-base text-yellow-400 md:text-lg lg:text-xl font-light mb-2">
              The Force Behind Our Success
            </motion.p>
            <motion.h1 className="text-xl text-black md:text-3xl lg:text-5xl font-bold mb-10">
              AMAZING TEAM MEMBERS
            </motion.h1>
          </motion.div>
        </motion.div>
        {/* <h1 className="text-lg font-semibold text-yellow-400">
          The Force Behind Our Success
        </h1>
        <h1 className="text-4xl font-bold mt-4">AMAZING TEAM MEMBERS</h1> */}
      </div>
      <div className="pl-9 pr-10 text-white relative px-5 mt-10">
        <div
          className="flex items-center w-full h-full overflow-x-scroll scrollbar-hide gap-5"
          ref={slideRef}
        >
          {data.map((item, index) => (
            <EmployeeCart key={index} item={item}></EmployeeCart>
          ))}
          <button
            className="absolute top-1/2 -translate-y-1/2 left-5 md:left-10 flex items-center justify-end
      size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
            onClick={scrolLeft}
          >
            <ChevronLeft size={24} className="mr-3"></ChevronLeft>
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-5 md:right-11 flex items-center justify-end
      size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
            onClick={scrolRight}
          >
            <ChevronRight size={24} className="mr-3"></ChevronRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
