import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { MdOutlineSegment } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [showServices, setShowServices] = useState(false);
  const handleServicesClick = () => setShowServices(!showServices);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav pl-4 pr-4 ${sticky ? "dark-nav" : ""}`}>
      <div className="static text-2xl">
        Bro <span className="text-yellow-300">Media</span> <span>Solution</span>
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-6">
          <Link to="/">
            <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          </Link>

          <div className="dropdown relative">
            <div
              onClick={handleServicesClick}
              className="flex gap-2 cursor-pointer"
            >
              Services <FaAngleDown className="text-center mt-1" />
            </div>
            {showServices && (
              <ul className="absolute bg-slate-800 text-white mt-0 w-40">
                <li className="hover:bg-yellow-300 hover:text-black py-2 px-4">
                  <Link to="/web-design">Web Design</Link>
                </li>
                <li className="hover:bg-yellow-300 hover:text-black py-2 px-4">
                  <Link to="/seo">SEO Services</Link>
                </li>
                <li className="hover:bg-yellow-300 hover:text-black py-2 px-4">
                  <Link to="/content-writing">Content Writing</Link>
                </li>
                <li className="hover:bg-yellow-300 hover:text-black py-2 px-4">
                  <Link to="/social-marketing">Social Media Management</Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/blogs">
            <li className="hover:text-yellow-300 cursor-pointer">Blogs</li>
          </Link>

          <Link to="/aboutus">
            <li className="hover:text-yellow-300 cursor-pointer">About Us</li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="block md:hidden">
        {!nav ? (
          <button onClick={handleClick}>
            <MdOutlineSegment className="text-2xl relative mr-1" />
          </button>
        ) : (
          <motion.div
            className="bg-slate-800 w-2/3 h-screen absolute -ml-[270px] -mt-5"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-end mr-4 mt-3">
              <button onClick={handleClick}>
                <FaXmark className="text-2xl" />
              </button>
            </div>
            <div className="static text-2xl text-center pt-10">
              Bro <span className="text-yellow-300">Media</span>{" "}
              <span>Solution</span>
            </div>
            <ul className="text-center grid grid-cols-1 pt-10">
              <Link to="/">
                <li className="hover:text-yellow-300 cursor-pointer py-2">
                  Home
                </li>
              </Link>
              <li
                className="hover:text-yellow-300 cursor-pointer py-2"
                onClick={handleServicesClick}
              >
                <div className="flex justify-center gap-2">
                  Services <FaAngleDown className="mt-1" />
                </div>
                {showServices && (
                  <ul className="mt-2 w-64 bg-gray-950">
                    <li className="hover:text-yellow-300 cursor-pointer py-2">
                      <Link to="/web-design">Web Design</Link>
                    </li>
                    <li className="hover:text-yellow-300 cursor-pointer py-2">
                      <Link to="/seo">SEO Services</Link>
                    </li>
                    <li className="hover:text-yellow-300 cursor-pointer py-2">
                      <Link to="/content-writing">Content Writing</Link>
                    </li>
                    <li className="hover:text-yellow-300 cursor-pointer py-2">
                      <Link to="/social-marketing">
                        Social Media Management
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <Link to="/blogs">
                <li className="hover:text-yellow-300 cursor-pointer py-2">
                  Blogs
                </li>
              </Link>
              <Link to="/aboutus">
                <li className="hover:text-yellow-300 cursor-pointer py-2">
                  About Us
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-yellow-300 cursor-pointer py-2">
                  Contact
                </li>
              </Link>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
