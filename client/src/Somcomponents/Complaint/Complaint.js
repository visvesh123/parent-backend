import React, { useState, useEffect } from "react";
import "./Complaint.css";
import HorizontalLinearStepper from "./Stepper";
import NavBar1 from "../NavBar1";
//import Loading from "../Animation/loading";
import Gif from "../Loading/gif";

const Complaint = () => {
  const [gif, setGif] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const wait = async (milliseconds = 2000) => {
    await sleep(milliseconds);
    setGif(false);
  };

  useEffect(() => {
    wait(2000);
  }, []);

  if (gif) return <Gif />;

  return (
    <div>
      <NavBar1 />
      <div className="gri-title-div">
        <h1 className="gri-title">GRIEVANCE REDRESSAL Cell</h1>
      </div>

      <HorizontalLinearStepper />
      <footer>
        <p style={{ textAlign: "center", marginBottom: "25px" }}>
          © 2020 Mahindra University, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Complaint;
