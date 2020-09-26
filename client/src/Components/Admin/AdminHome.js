import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Gif from "../Loading/gif";
import PostExams from "./Exam";
import PostNoti from "./Announcement";
import PostAtt from "./Attendance";
import AdminNav from './AdminNav';


const AdminHome = () => {
    const [loading, setLoading] = useState(true);
  
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
      
      <div id="home" className="all">
        {/* {gif && <Gif/>} */}
        <AdminNav />
        
        <PostNoti />
        <PostExams/>
        <PostAtt/>
        <footer>
          <p style={{ textAlign: "center", marginBottom: "25px" }}>
            © 2020 Mahindra University, All Rights Reserved.
          </p>
        </footer>
      </div>
    );
  };
  
  export default AdminHome;
  