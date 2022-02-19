import React, { useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import "./In_Sec.css";
//import Calender from "./Calender";
import Status from "./InOutstatus";
import Desc from "./Description";
import { Link } from "react-router-dom";
import { fetchInOut } from "../../actions/index";
import { connect } from "react-redux";
import "./GatePass/GatePass.css";

const In_Sec = (props) => {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const wait = async (milliseconds = 2000) => {
    await sleep(milliseconds);
  };

  useEffect(() => {
    wait(2000);
    props.fetchInOut();
  }, []);

  if (!props.sec[0]) return null;

  const data = props.sec[0];

  const item = data[0];
  const items = [data[0], data[1]];

  return (
    <div>
      <hr />
      <section classID="In_id" id="in" className="outingdata">
        <Container>
          <Row>
            <Col xs="12">
              <div className="left">
                <h2 className="head_p h2">Outing Details</h2>
                <Link to="/summary" className="more-info ">
                  More info
                </Link>

                {/* 
                <ul class="legend">
                  <li>
                    <span class="kindaawesome"></span> Selected
                  </li>
                </ul> */}
              </div>
            </Col>
          </Row>
        </Container>

        <div className="In">
          <Container>
            <Row>
              <Col md="12" lg="6">
                <div className="cal">
                  {/* <ul class="legend">
                    {/* <li>
                      <span className="kindaawesome"></span>
                    </li> */}
                  {/* </ul>
                  <Calender />  */}
                  <Status item={item} />
                </div>
              </Col>
              <Col md="12" lg="6">
                <Desc items={items} />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.notifications);
  return {
    sec: state.security,
    auth: state.auth,
  };
};

// Notifications.propTypes = {
//   sec: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps, { fetchInOut: fetchInOut })(In_Sec);
