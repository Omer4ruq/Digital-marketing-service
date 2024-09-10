import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        Bro <span className="underline">Media</span> <span>Solution</span>
      </div>
      <div>
        <ul>
          <li className="underline">Home</li>
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
