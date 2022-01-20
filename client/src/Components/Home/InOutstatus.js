import { useSpring, animated } from "react-spring";
import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./InOutstatus.css";
const Status = (props) => {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const wait = async (milliseconds = 1000) => {
    await sleep(milliseconds);
  };

  useEffect(() => {
    wait(1000);
  }, []);

  function getSafe(fn, defaultVal) {
    try {
      return fn();
    } catch (e) {
      return defaultVal;
    }
  }

  return (
    <div className="status">
      <ScrollAnimation animateIn="fadeIn">
        <div className="heading-out">Current status</div>
        <span style={{ color: "#E31138" }}>
          {getSafe(() => props.item.MOVING, "OUT")}
        </span>
      </ScrollAnimation>
    </div>
  );
};

export default Status;
