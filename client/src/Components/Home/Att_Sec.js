import React, { useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import ExampleChart from "../Attendance/AttChart";
import AttTable from "../Attendance/AttTable";
import "./Att_Sec.css";
import { Link } from "react-router-dom";
import { fetchAttendance } from "../../actions/index";
import { connect } from "react-redux";

const Attendance = (props) => {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const wait = async (milliseconds = 2000) => {
    await sleep(milliseconds);
  };

  useEffect(() => {
    wait(2000);
    props.fetchAttendance(3);
  }, []);

  if (!props.attendance[0]) return null;

  const data = props.attendance[0];
  //console.log(data);

  return (
    <div>
      <hr />
      <section className="att" id="atten">
        <div className="attendance">
          <Container>
            <Row>
              <Col xs="12">
                <div className="left">
                  <h2 className="head_p h2">Current Sem Attendance</h2>
                  <Link to="/attendance" className="more-info ">
                    Click here for Semester Wise Details
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12" lg="6">
                <ExampleChart data={data} />
              </Col>
              <Col md="12" lg="6">
                <AttTable data={data} />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => {
  //  console.log(state);
  return {
    attendance: state.attendance,
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { fetchAttendance: fetchAttendance })(
  Attendance
);
