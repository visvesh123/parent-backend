import React, { useState, useEffect } from "react";
import { Select, Row, Col } from "antd";

import Exams_som from "./Exams";
import Supplementary from "./Supplementary";
import Desc_som from "./Description";

import { Container } from "reactstrap";
import "./Dropdown.css";

import {
  fetchMinor1,
  fetchMinor2,
  fetchSomFinal,
  fetchSupplementary,
  fetchInternals,
  fetchMajor,
} from "../../actions/index";
import { connect } from "react-redux";

const { Option, OptGroup } = Select;

const Dropdown = (props) => {
  useEffect(() => {
    props.fetchMinor1(1);
    props.fetchMinor2(1);
    props.fetchSomFinal(1);
    props.fetchSupplementary(1);
    props.fetchInternals(1);
    props.fetchMajor(1);
  }, []);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const [opt, setOpt] = useState(1);
  const gap = async (milliseconds = 1000) => {
    await sleep(milliseconds);
  };

  function handleChange(value) {
    // console.log(`selected ${value}`);
    setOpt(value);
    props.fetchMinor1(value);
    props.fetchMinor2(value);
    props.fetchSomFinal(value);
    props.fetchSupplementary(value);
    props.fetchInternals(value);
    props.fetchMajor(value);
    gap(1000);
  }

  const arr = [
    { type: "1-1-1", value: 1, label: "First year" },
    { type: "1-1-2", value: 2, label: "First year" },
    { type: "1-2-1", value: 3, label: "Second year" },
    { type: "1-2-2", value: 4, label: "Second year" },
    { type: "2-1-1", value: 5, label: "Third year" },
    { type: "2-1-2", value: 6, label: "Third year" },
    { type: "2-2-1", value: 7, label: "Fourth year" },
    { type: "2-2-2", value: 8, label: "Fourth year" },
  ];

  if (!props.minor1[0]) return null;
  if (!props.minor2[0]) return null;
  if (!props.final_som[0]) return null;
  if (!props.supplementary[0]) return null;
  if (!props.internals[0]) return null;
  if (!props.major[0]) return null;

  const m1 = props.minor1[0];
  const m2 = props.minor2[0];
  const f = props.final_som[0];
  const s = props.supplementary[0];
  const maj = props.major[0];
  const int = props.internals[0];
  // console.log(m1);
  // console.log(m2);
  // console.log(f);
  // console.log(s);
  return (
    <div>
      <Container>
        <h3 className="headingsh2">Select Semester: &nbsp;</h3>

        <Select defaultValue={1} style={{ width: 200 }} onChange={handleChange}>
          <OptGroup label="First year">
            <Option value={1}> 1-1</Option>
            <Option value={2}> 1-2</Option>
          </OptGroup>
          <OptGroup label="Second year">
            <Option value={3}> 2-1</Option>
            <Option value={4}> 2-2</Option>
          </OptGroup>
          <OptGroup label="Third year">
            <Option value={5}> 3-1</Option>
            <Option value={6}> 3-2</Option>
          </OptGroup>
          <OptGroup label="Fourth  year">
            <Option value={7}> 4-1</Option>
            <Option value={8}> 4-2</Option>
          </OptGroup>
        </Select>

        <div style={{ marginTop: 30 + "px" }}>
          {/* {(opt=== "1")&& <Semwise/>} */}
          <Row>
            <Col>
              <div className="exam">
                <Exams_som m1={m1} m2={m2} final_som={f} int={int} maj={maj} />
              </div>
              <div className="sem">
                <Supplementary supply={s} />
              </div>
            </Col>
            <div style={{ marginLeft: 50 + "px" }}>
              <Col>
                <Desc_som final_som={f} />
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.final_som);
  return {
    minor1: state.minor1,
    minor2: state.minor2,
    final_som: state.final_som,
    internals: state.internals,
    major: state.major,
    supplementary: state.supplementary,
  };
};

export default connect(mapStateToProps, {
  fetchMinor1: fetchMinor1,
  fetchMinor2: fetchMinor2,
  fetchSomFinal: fetchSomFinal,
  fetchSupplementary: fetchSupplementary,
  fetchInternals: fetchInternals,
  fetchMajor: fetchMajor,
})(Dropdown);
