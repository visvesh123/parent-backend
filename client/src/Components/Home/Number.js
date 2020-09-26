import { useSpring, animated } from "react-spring";
import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Number.css";
const Number_tick = (props) => {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const wait = async (milliseconds = 1000) => {
    await sleep(milliseconds);
  };

  useEffect(() => {
    wait(1000);
  }, []);
  //console.log(props.results);

  const arr = props.results;

  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + parseFloat(arr[i].CGPA);
  }

  //console.log(sum);

  const avg = sum / arr.length;

  return (
    <div>
      <div className="tick">
        <ScrollAnimation animateIn="fadeIn">
          <div className="heading-spi">Average SPI</div>
          <span>{avg.toFixed(2)}</span>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Number_tick;
