import React from "react";
import "./Row4Content.css";
import content from "./ContentImg/writer.png";
import blog from "./ContentImg/blog.png";
import seo from "./ContentImg/seo.png";
import social from "./ContentImg/social-media.png";

const Row4Content = () => {
  return (
    <div className="row4content pt-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-black mb-4">Our Commitments</h1>
        <p className="text-black">
          Content writing is not just about putting words together but about
          creating a compelling message for your
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-4">
        <div className="\ p-10 ">
          <img
            src={content}
            alt=""
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="font-bold text-2xl text-center mb-4 text-[#F6C71E]">
            Website Content
          </h1>
          <p className="text-black text-center ">
            Engage your audience and convey your brand message with our expertly
            crafted website content.
          </p>
        </div>
        <div className="\ p-10 ">
          <img
            src={blog}
            alt=""
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="font-bold text-2xl text-center mb-4 text-[#F6C71E]">
            Blog/Article Writing
          </h1>
          <p className="text-black text-center ">
            Establish thought leadership, drive traffic and engagement with our
            compelling blog/article writing services.
          </p>
        </div>
        <div className="\ p-10 ">
          <img
            src={social}
            alt=""
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="font-bold text-2xl text-center mb-4 text-[#F6C71E]">
            Social Media Content
          </h1>
          <p className="text-black text-center ">
            Increase your social media presence and connect with your audience
            with our unique and engaging social media content.
          </p>
        </div>
        <div className=" p-10 ">
          <img
            src={seo}
            alt=""
            className="w-16 h-16 object-cover mb-2 mx-auto"
          />
          <h1 className="font-bold text-2xl text-center mb-4 text-[#F6C71E]">
            SEO Writing
          </h1>
          <p className="text-black text-center ">
            Boost your online visibility and attract organic traffic to your
            website with our top-notch SEO writing services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Row4Content;
