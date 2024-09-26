import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./ClientsFeedback.css";

const ClientsFeedback = () => {
  const cards = [
    {
      id: 1,
      name: "Omer Faruq",
      review:
        "I wanted a website made quickly and without fuss and of course within budget. Brains Media Solutions helped get the website up and running in less than a week, and surprise, did not charge anything extra! Really want to thank Brains Media Solutions for a job well done.",
      title: "Website Designing",
    },
    {
      id: 2,
      name: "Sajibul Hasan",
      review:
        "I've had a good experience working with Bro's Media. Highly professional, great turnaround time, and attention to quality.",
      title: "SEO Article and Content Writing",
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
        "I wanted a website made quickly and without fuss and of course within budget. Brains Media Solutions helped get the website up and running in less than a week, and surprise, did not charge anything extra! Really want to thank Brains Media Solutions for a job well done.",
      title: "Website Designing",
    },
  ];

  // Animation variants for motion.div elements
  const slideVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="mb-44 md:mb-16 md:p-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <section>
            <motion.div
              className="ml-2 md:absolute"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-base text-[#F6C71E] md:text-lg lg:text-xl font-semibold mb-2 text-center md:text-start">
                Results Of Our Hard Work
              </h1>
              <h4 className="text-xl text-black md:text-2xl lg:text-3xl font-bold mb-2 md:w-[500px] text-center md:text-start">
                Our clients love to work with us and here is what they have to
                say.
              </h4>
            </motion.div>

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
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <motion.div
                    className="w-[500px] h-72 bg-[#e4e4e6] md:mr-36"
                    variants={slideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
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
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <section className="hidden md:block md:p-4 relative">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <img
                  src="https://brainsmediasolutions.com/wp-content/uploads/2022/12/testimonial-dots.png"
                  alt="decorative dots"
                />
              </div>
              <div>
                <img
                  src="https://brainsmediasolutions.com/wp-content/uploads/2023/05/test-2.jpg"
                  alt="feedback"
                  className="-mt-14 ml-6"
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-700 w-64 h-[450px] absolute -mt-[500px] ml-[400px] p-5 text-center"
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-4xl font-bold text-white mt-10">
                We have received an excellent rating of 4.7 out of 5 from both
                our clients and employees.
              </h1>
            </motion.div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default ClientsFeedback;
