import React from "react";
import { Row, Col } from "reactstrap";
import "./Step1.css";

const Step1 = () => {
  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <div className="formStyle">
            <div className="comp-title">
              <h2>Instruction</h2>
              <p className="test">
                1) Please choose the relevant type of Grievance listed.
                <br />
                2) Be specific to the content.
                <br />
                3) You will recieve response from concerned in-charge.
                <br />
              </p>
              <h2>Note</h2>
              <p className="test">
                - Responsibility of student is taken care by the college
                managment as long as he/she is within the campus.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
};

export default Step1;
