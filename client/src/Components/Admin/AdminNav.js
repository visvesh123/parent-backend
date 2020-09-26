import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import AdminLogin from "./AdminLogin";
import Logo from "./logo.png";
import "./AdminNav.css";

const AdminNav = () => {
  // window.addEventListener("scroll", () => {
  //   var header = document.querySelector("header");
  //   header.classList.toggle("scroll", window.scrollY > 0);
  // });

  return (
    <div className="h">
      <header className="hello scroll">
        <a className="logo" href="/admin">
          <img
            src={Logo}
            alt="Mahindra University"
            class="navbar-brand"
            width="240"
          />
        </a>
        <a color="muted">Admin Portal</a>
        <ul>
          {/* <li>
            <Link
              to="home"
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              <span className="middle">Home</span>
            </Link>
          </li>
          <li>
            <Link to="grade" smooth={true} duration={1000}>
              <span className="middle">Grade</span>
            </Link>
          </li>
          <li>
            <Link to="atten" smooth={true} duration={1000}>
              <span className="middle">Attendance</span>
            </Link>
          </li>
          <li>
            <Link to="in" smooth={true} duration={1000}>
              <span className="middle">In & Out</span>
            </Link>
          </li> */}
          <li>
          <a className="middle" href="/adminlogin">Sign Out</a>
          </li>
        </ul>
      </header>
      
    </div>
  );
};

export default AdminNav;
