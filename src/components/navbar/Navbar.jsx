import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { MdOutlineSegment } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  });

  return (
    <div className={`nav pl-4 pr-4 ${sticky ? "dark-nav" : " "} `}>
      <div className="static text-2xl">
        Bro <span className="text-yellow-300">Media</span> <span>Solution</span>
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-6">
          <Link to="/">
            <li className="hover:text-yellow-300 hover:cursor-pointer">Home</li>
          </Link>

          {/* Dropdown for Services */}
          <Link>
            <li className="hover:text-yellow-300 hover:cursor-pointer relative group ">
              Services
              <ul className="absolute hidden group-hover:block bg-slate-800 text-white mt-0 w-40">
                <li className="hover:bg-yellow-300 hover:text-black py-2 px-4">
                  <Link to="/service1">Web Design</Link>
                </li>
                <li className="hover:bg-yellow-300 hover:text-black py-2 px-4">
                  <Link to="/service2">SEO Services</Link>
                </li>
                <li className="hover:bg-yellow-300 hover:text-black py-2 px-4">
                  <Link to="/service3">Content Writing</Link>
                </li>
                <li className="hover:bg-yellow-300 hover:text-black py-2 px-4">
                  <Link to="/service4">Social Media Management</Link>
                </li>
              </ul>
            </li>
          </Link>
          <Link>
            <li className="hover:text-yellow-300 hover:cursor-pointer">
              Blogs
            </li>
          </Link>

          <Link to="/aboutus">
            <li className="hover:text-yellow-300 hover:cursor-pointer">
              About Us
            </li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-yellow-300 hover:cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="block md:hidden">
        {!nav ? (
          <button onClick={handleClick}>
            <MdOutlineSegment className="text-2xl relative" />
          </button>
        ) : (
          <div
            className={`bg-slate-800 w-2/3 h-screen absolute -ml-[306px] -mt-5 transition-transform transform ${
              nav ? "translate-x-0" : "-translate-x-full"
            } duration-300 ease-in`}
          >
            <div className="text-end mr-4 mt-3">
              <button>
                <FaXmark className="text-2xl" onClick={handleClick} />
              </button>
            </div>
            <div className="static text-2xl text-center pt-10">
              Bro <span className="text-yellow-300">Media</span>{" "}
              <span>Solution</span>
            </div>
            <ul className="text-center grid grid-cols-1 pt-20">
              <Link to="/">
                <li className="hover:text-yellow-300 hover:cursor-pointer">
                  Home
                </li>
              </Link>
              <li className="hover:text-yellow-300 hover:cursor-pointer">
                Services
                <ul className="ml-4 mt-2">
                  <li className="hover:text-yellow-300 hover:cursor-pointer">
                    <Link to="/service1">Web Design</Link>
                  </li>
                  <li className="hover:text-yellow-300 hover:cursor-pointer">
                    <Link to="/service2">SEO Services</Link>
                  </li>
                  <li className="hover:text-yellow-300 hover:cursor-pointer">
                    <Link to="/service3">Content Writing</Link>
                  </li>
                  <li className="hover:text-yellow-300 hover:cursor-pointer">
                    <Link to="/service4">Social Media Management</Link>
                  </li>
                </ul>
              </li>
              <li className="hover:text-yellow-300 hover:cursor-pointer">
                Blogs
              </li>
              <Link to="/aboutus">
                <li className="hover:text-yellow-300 hover:cursor-pointer">
                  About Us
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-yellow-300 hover:cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
