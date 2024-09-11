import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav pl-4 pr-4">
      <div className="">
        Bro <span className="text-red-700">Media</span> <span>Solution</span>
      </div>
      <div>
        <ul>
          <li className="hover:underline hover:cursor-pointer">Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
