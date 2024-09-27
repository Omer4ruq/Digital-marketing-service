import React from "react";
import ContuctUsButton from "../../ContuctUsButton";

const Row2Content = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-16  bg-white">
      <section className="p-8">
        <div>
          <img
            src="https://brainsmediasolutions.com/wp-content/uploads/2023/05/content_page.png"
            alt=""
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="bg-[#F6C71E] rounded-2xl absolute w-[400px] md:w-[450px] -mt-32 ml-16 md:ml-20 shadow-xl">
          <div className="p-10">
            <h1 className="text-black font-bold mb-4">High-Quality Content</h1>
            <p className="text-white">
              Powerful content is crucial to online purchasing. It’s the driving
              force behind all marketing elements, from web pages to reviews and
              search results. Effective content marketing connects with your
              target audience and converts prospects into customers.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-44 md:pt-14 p-10">
          <h1 className="text-yellow-400">Who We Are</h1>
          <h1 className="mt-4 text-4xl font-bold mb-4">
            We Provide The Best Content Writing Service for You
          </h1>
          <p className="text-gray-400">
            Brains Media is your one-stop platform for all your content needs,
            including website content, blog content, Instagram captions,
            LinkedIn posts, and product descriptions. We prioritise delivering
            quality content that meets and exceeds your expectations, helping
            you drive engagement, foster brand loyalty, and, ultimately, grow
            your business.
          </p>
          <p className="text-gray-400 mt-4">
            Having worked with some of India’s leading brands over the past 8
            years, and with over 15 Lakh words written for various digital
            platforms, we earned a reputation for being the most trusted content
            writing agencies in India.
          </p>
          <ContuctUsButton></ContuctUsButton>
        </div>
      </section>
    </div>
  );
};

export default Row2Content;
