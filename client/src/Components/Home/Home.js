import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { ScrollArea } from "react-scrollbar";
import RegistrationForm from "./GatePass/GatePass";
import "./Home.css";
import Navbar from "../NavBar";
import Griev from "./Griev_Sec";
import Grade_Sec from "./Grade_Sec";
import In_Sec from "./In_Sec";
import Attendance from "./Att_Sec";
import Notifications from "./Notification";
import Gif from "../Loading/gif";
import ScrollAnimation from "react-animate-on-scroll";
import { fetchStudent } from "./../../actions/index";
import { connect } from "react-redux";
import { Layout, Col } from "antd";

const Home = (props) => {
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
    props.fetchStudent();
    wait(2000);
  }, []);

  if (gif) return <Gif />;
  // console.log(props.student[0]);

  const item = props.student[0];
  //console.log(item[0].STUDENT_NAME);
  const name = item[0].STUDENT_NAME;
  const id = item[0].HTNO;

  return (
    <div id="home" className="all">
      {/* {gif && <Gif/>} */}
      <div className="box">
        <Layout>
          <Col span={24}>
            <Navbar />
            <h1 className="name"> {name}</h1>
            <h1 className="id">{id}</h1>
            <Notifications />

            <RegistrationForm />

            <Grade_Sec />

            <Attendance />

            <In_Sec />

            <Griev />
          </Col>
        </Layout>
      </div>
      <Link to="notification" smooth={true} duration={1000} className="sticky">
        Announcements
      </Link>

      <footer>
        <p style={{ textAlign: "center", marginBottom: "25px" }}>
          © 2020 Mahindra University, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

// export default Home;

const mapStateToProps = (state) => {
  // console.log(state.notifications);
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps, { fetchStudent: fetchStudent })(Home);
