import React, { useEffect, Fragment } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import { fetchMinor1, fetchMinor2, fetchSomFinal } from "../../actions/index";
import { connect } from "react-redux";
import "./Exams.css";

const Exams_som = (props) => {
  const m1 = props.m1;
  const m2 = props.m2;
  const [f] = props.final_som                                                                                                                                                                                                                                                                             ;
  const int = props.int;
  const maj = props.maj;
  // console.log(int);
  // console.log(maj);

  // const renM1 = m1.map((item, index) => {
  //   return (
  //     <Fragment>
  //       <tr>
  //         <td>{item.SUB_NAME}</td>
  //         <td>{`${item.MARKS}/${item.MARKS_TOT}`}</td>
  //       </tr>
  //     </Fragment>
  //   );
  // });
 
  // const renM2 = m2.map((item, index) => {
  //   return (
  //     <Fragment>
  //       <tr>
  //         <td>{`${item.MARKS}/${item.MARKS_TOT}`}</td>
  //       </tr>
  //     </Fragment>
  //   );
  // });

  // const renInt = int.map((item) => {
  //   return (
  //     <Fragment>
  //       <tr>
  //         <td>{`${item.INT_M}/${item.INT_TOT}`}</td>
  //         <td>{`${item.LAB_M}/${item.LAB_TOT}`}</td>
  //       </tr>
  //     </Fragment>
  //   );
  // });

  // const renMaj = maj.map((item) => {
  //   return (
  //     <Fragment>
  //       <tr>
  //         <td>{`${item.MAJOR_M}/${item.MAJOR_TOT}`}</td>
  //       </tr>
  //     </Fragment>
  //   );
  // });
  const renF = f.map((item) => {
    return (
      <Fragment>
        <tr>
          <td>{item.SUB_NAME}</td>
          <td>{item.GRADE}</td>
          <td>{item.POINTS}</td>
          <td>{item.CREDITS}</td>
        </tr>
      </Fragment>
    );
  });
  return (
    <Container>
      <div>
        <div class="container">
          <div class="row">
            {/* <div class="col-sm-24">
              <Table className="table">
                <thead>
                  <tr>
                    <th scope="col" class="col-md-auto">
                      Subject
                    </th>
                    <th scope="col" class="col-md-auto">
                      Minor-1
                    </th>
                  </tr>
                </thead>

                <tbody>{renM1}</tbody>
              </Table>
            </div> */}
            {/* <div class="col-sm-24">
              <Table className="table">
                <thead>
                  <tr>
                    <th>Minor-2</th>
                  </tr>
                </thead>
                <tbody>{renM2}</tbody>
              </Table>
            </div> */}
            {/* <div class="col-sm-24">
              <Table className="table">
                <thead>
                  <tr>
                    <th>Internals</th>
                    <th>Lab</th>
                  </tr>
                </thead>
                <tbody>{renInt}</tbody>
              </Table>
            </div> */}
            {/* <div class="col-sm-24">
              <Table className="table">
                <thead>
                  <tr>
                    <th>Major</th>
                  </tr>
                </thead>
                <tbody>{renMaj}</tbody>
              </Table>
            </div> */}
            <div class="col-sm-24">
              <Table className="table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                    <th>Points</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>{renF}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    minor1: state.minor1,
    minor2: state.minor2,
    final_som                                                                                                                                                                                                                                                                             : state.final_som                                                                                                                                                                                                                                                                             ,
  };
};

export default connect(mapStateToProps, {
  fetchMinor1: fetchMinor1,
  fetchMinor2: fetchMinor2,
  fetchSomFinal: fetchSomFinal,
})(Exams_som);
