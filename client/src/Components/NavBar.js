import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Griev from "../Components/Home/Griev_Sec";
import Logo from "./logo.png";
import "./NavBar.css";

const Navbar = () => {
  // window.addEventListener("scroll", () => {
  //   var header = document.querySelector("header");
  //   header.classList.toggle("scroll", window.scrollY > 0);
  // });

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
            <Link
              to="home"
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              <span className="middle-main">Home</span>
            </Link>
          </li>
          <li>
            <Link to="grade" smooth={true} duration={1000}>
              <span className="middle-main">Grade</span>
            </Link>
          </li>
          <li>
            <Link to="atten" smooth={true} duration={1000}>
              <span className="middle-main">Attendance</span>
            </Link>
          </li>
          <li>
            <Link to="in" smooth={true} duration={1000}>
              <span className="middle-main">In & Out</span>
            </Link>
          </li>
          <li>
            <Link to="griev" smooth={true} duration={1000}>
              <span className="middle-main">Grievance</span>
            </Link>
          </li>
        </ul>
      </header>
      <section className="banner"></section>
    </div>
  );
};

export default Navbar;
