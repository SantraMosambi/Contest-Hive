import React from "react";
import logo from "../img/hive2.webp";

const Navbar = () => {
  return (
    <div className=" navbar ">
      <div className="main-container">
        <div>
          <img className="logo" src={logo} alt="ContestHive" />
        </div>
        <div className="names">
          <a href="/#">About</a>
          <a href="/#">Blog</a>

          <a href="/#">Contact</a>
        </div>
        {/* <div className="new">
          <a href="/#">Login</a> */}
          {/* <button className="but">Get Started for free</button> */}
          {/* <img src={start} alt="" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
