import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Tabs, Row, Col } from "antd";
import ExampleChart from "./AttChart";
import AttTable from "./AttTable";
import { Container, Portal } from "@material-ui/core";
import "./Attendance.css";
import NavBar1 from "../NavBar1";
import Gif from "../Loading/gif";
import { fetchSomAttendance } from "../../actions/index";
import { connect } from "react-redux";

const { TabPane } = Tabs;

const Att_som = (props) => {
  const [loading, setLoading] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const wait = async (milliseconds = 2000) => {
    await sleep(milliseconds);
    setLoading(false);
  };

  const gap = async (milliseconds = 1000) => {
    await sleep(milliseconds);
  };

  useEffect(() => {
    wait(2000);
    props.fetchSomAttendance(1);
  }, []);

  if (loading) return <Gif />;

  const handleChange = (key) => {
    // console.log(key);
    props.fetchSomAttendance(key);
    gap(1000);
  };
  const arr = [
    { type: "Sem 1", key: 1 },
    { type: "Sem 2", key: 2 },
    { type: "Sem 3", key: 3 },
    { type: "Sem 4", key: 4 },
    { type: "Sem 5", key: 5 },
    { type: "Sem 6", key: 6 },
    { type: "Sem 7", key: 7 },
    { type: "Sem 8", key: 8 },
  ];

  if (!props.attendance[0]) return null;

  const data = props.attendance[0];
  //console.log(data);
  return (
    <div>
      <NavBar1 />
      <Container>
        <h2 className="headingsh2">Attendance:</h2>
        <Tabs defaultActiveKey="1" centered onChange={handleChange}>
          {arr.map((item, index) => {
            return (
              <TabPane tab={item.type} key={item.key}>
                <AttTable data={data} />
                <ExampleChart data={data} />
              </TabPane>
            );
          })}
        </Tabs>
      </Container>
      <footer>
        <p style={{ textAlign: "center", marginBottom: "25px" }}>
          © 2020 Mahindra University, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  //  console.log(state);
  return {
    attendance: state.attendance_som,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { fetchSomAttendance: fetchSomAttendance })(
  Att_som
);
