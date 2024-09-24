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
        <ul>
          <li className="hover:text-yellow-300  hover:cursor-pointer ">Home</li>

          <li className="hover:text-yellow-300  hover:cursor-pointer">
            {" "}
            Services
          </li>
          <li className="hover:text-yellow-300 hover:cursor-pointer">Blogs</li>
          <li className="hover:text-yellow-300 hover:cursor-pointer">
            About Us
          </li>
          <Link to="contact">
            <li className="hover:text-yellow-300 hover:cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="block md:hidden ">
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
                <FaXmark className="text-2xl " onClick={handleClick} />
              </button>
            </div>
            <div className="static text-2xl text-center pt-10">
              Bro <span className="text-yellow-300">Media</span>{" "}
              <span>Solution</span>
            </div>
            <ul className="text-center grid grid-cols-1  pt-20">
              <li className="  hover:text-yellow-300  hover:cursor-pointer ">
                Home
              </li>

              <li className="hover:text-yellow-300  hover:cursor-pointer">
                {" "}
                Services
              </li>
              <li className="hover:text-yellow-300 hover:cursor-pointer">
                Blogs
              </li>
              <li className="hover:text-yellow-300 hover:cursor-pointer">
                About Us
              </li>
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
