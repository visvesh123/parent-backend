import React, { useState, useEffect } from "react";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authAction";
import "./NavBar1.css";

const Navbar1 = (props) => {
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

  // window.addEventListener("scroll", () => {
  //   var header = document.querySelector("hello");
  //   header.classList.toggle("scroll", window.scrollY > 0);
  // });

  return (
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
        <ul>
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
      </header>
      <section className="banner"></section>
    </div>
  );
};

export default Navbar1;
