import React, { useState, useEffect } from "react";
import Dropdown_som from "./Dropdown";
import NavBar1 from "../NavBar1";
import "./Grade.css";
import Exams from "./Exams";
import Gif from "../Loading/gif";

import "antd/dist/antd.css";

const Grade_som = (props) => {
  const [gif, setGif] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const wait = async (milliseconds = 2000) => {
    await sleep(milliseconds);
    setGif(false);
  };

  useEffect(() => {
    wait(1000);
  }, []);

  if (gif) return <Gif />;

  return (
    <div>
      <NavBar1 />
      <div className="semtab">
        <Dropdown_som />
      </div>{" "}
      <footer>
        <p style={{ textAlign: "center", marginBottom: "25px" }}>
          © 2020 Mahindra University, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Grade_som;
