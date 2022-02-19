import React, { useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import axios from "axios";
import "./GatePass/GatePass.css";
import Accordion from "./Accordion/Accordion";
import Content from "./Accordion/Content";
import Chart_CGPA from "./Chart";
import { Link } from "react-router-dom";
import "./Grade_Sec.css";
import { connect } from "react-redux";
import { fetchFina, fetchSomCGPA } from "../../actions/index";
import Number_tick from "./Number";

const Grade_Sec = (props) => {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const wait = async (milliseconds = 2000) => {
    await sleep(milliseconds);
  };

  useEffect(() => {
    props.fetchSomCGPA();
  }, []);

  if (!props.cgpa[0]) return null;

  const data = props.cgpa[0];
  //console.log(data);

  return (
    <div>
      <hr />
      <section classID="grade_id" id="grade">
        <div className="grades">
          <Container>
            <Row>
              <Col xs="12" sm="12" md="12" lg="12">
                <div className="left">
                  <h2 className="head_p h2">Grades Summary</h2>
                  <Link to="/som/grade" className="more-info">
                    Click Here for Semester Details
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12" lg="6">
                <Chart_CGPA results={data} />
              </Col>
              <Col md="12" lg="6">
                <Number_tick results={data} />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cgpa: state.cgpa_som,
  };
};

export default connect(mapStateToProps, { fetchSomCGPA: fetchSomCGPA })(Grade_Sec);
