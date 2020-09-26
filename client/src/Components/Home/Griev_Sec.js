import React from "react";
import "./Griev_Sec.css";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Griev = () => {
  return (
    <div>
      <section classID="griev_id" id="griev">
        <div className="griev">
          <Container>
            <Row>
              <Col xs="6" className="griev-img">
                <h1 className="griev-title">
                  Grievance <br />
                  Redressal System
                </h1>
              </Col>
              <Col xs="6">
                <div className="griev-click">
                  <p className="griev-text">
                    Hello! <br /> We Understand your situation, thanks for
                    taking time to lodge your complaint. <br />
                    We strive our best to make your complaints solved
                  </p>
                  <div className="newcomp">
                    <Link className="a-comp" to="/complaint">
                      New Complaint
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Griev;
