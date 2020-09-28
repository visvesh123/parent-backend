import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../logo.png";
import "./SecNavBar.css";
import { logoutUser } from "../../actions/authAction";
const SecNavbar = () => {
  // window.addEventListener("scroll", () => {
  //   var header = document.querySelector("header");
  //   header.classList.toggle("scroll", window.scrollY > 0);
  // });

  const handleLogout = (props) => {
    props.logoutUser();
  };

  return (
    <div>
      <header className="hello scroll">
        <a className="logo" href="">
          <img
            src={Logo}
            alt="Mahindra University"
            class="navbar-brand"
            width="240"
          />
        </a>
        <ul>
          <li>
            <h1 className="sec-portal">Security Portal</h1>
          </li>

          <li>
            {/* <Link to="griev" smooth={true} duration={1000}>
              <span className="middle-main">Sign Out</span>
            </Link> */}
            <a
              className="middle1"
              style={({ float: "right" }, { fontSize: "25" })}
              href="/security-login"
              onClick={handleLogout}
            >
              Sign Out
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default SecNavbar;
