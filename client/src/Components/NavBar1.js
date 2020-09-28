import React, { useState, useEffect } from "react";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authAction";
import { useMediaQuery } from "react-responsive";
import Main1 from "./NavBar/Hamburger1";
import "./NavBar1.css";

const Navbar1 = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const handleClick = () => {
    return window.scroll({
      top: 700,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleLogout = () => {
    props.logoutUser();
  };

  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  // window.addEventListener("scroll", () => {
  //   var header = document.querySelector(".hello");
  //   header.classList.toggle("scroll", window.scrollY > 0);
  // });

  return (
    <div>
      {isDesktopOrLaptop && (
        <div>
          <header className="hello scroll">
            <a className="logo" href="">
              {" "}
              <img
                src={Logo}
                alt="Mahindra University"
                class="navbar-brand"
                width="240"
              />
            </a>
            {/* <a className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a> */}
            <div className="navbar-links">
              <ul className="list-nav1">
                <li>
                  <Link to="/home">
                    <span className="middle1">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/grade">
                    <span className="middle1">Grade</span>
                  </Link>
                </li>
                <li>
                  <Link to="/attendance">
                    <span className="middle1">Attendance</span>
                  </Link>
                </li>
                <li>
                  <Link to="/summary">
                    <span className="middle1">In and Out</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to="/complaint">
                    <span className="middle1">Grievance</span>
                  </Link>
                </li>
                <li>
                  <a
                    className="middle1"
                    style={({ float: "right" }, { fontSize: "25" })}
                    href="/login"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </header>

          <section className="banner1" />
        </div>
      )}

      {isTabletOrMobileDevice && <Main1 />}
    </div>
  );
};

export default Navbar1;
