import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Griev from "../Components/Home/Griev_Sec";
import Logo from "./logo.png";
import "./NavBar.css";
import { useMediaQuery } from "react-responsive";
import Main from "./NavBar/Hamburger";
import Logout from "./Login/Logout";

const Navbar = (props) => {
  // window.addEventListener("scroll", () => {
  //   var header = document.querySelector("header");
  //   header.classList.toggle("scroll", window.scrollY > 0);
  // });

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

  const handleLogout = () => {
    props.logoutUser();
  };

  return (
    <div>
      {isDesktopOrLaptop && (
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
              <li>
                {/* <span
                  className="middle-main"
                  style={({ float: "right" }, { fontSize: "25" })}
                  href="/login"
                  // onClick={handleLogout}
                > */}
                <Logout />
                {/* SIGN OUT */}
                {/* </span> */}
              </li>
            </ul>
          </header>

          <section className="banner"></section>
        </div>
      )}
      {isTabletOrMobileDevice && <Main />}
    </div>
  );
};

export default Navbar;
