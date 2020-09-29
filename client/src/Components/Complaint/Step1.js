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
                1) Please be specific with the content and the type of grievance
                <br />
                listed.
                <br />
                2) After submission, We will reply through the mail ID linked.
                <br />
                3) If student is within the campus, its our responsibility to
                take care, If not then its we can only support.
                <br />
                4) If the Grievance is personal then direct contact to the
                administartion is suggested.
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
