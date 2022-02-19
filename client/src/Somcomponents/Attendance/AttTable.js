import React, { useEffect } from "react";
import { Table } from "reactstrap";
import NavBar1 from "../NavBar1";
import { fetchSomAttendance } from "../../actions/index";
import { connect } from "react-redux";
import "./AttTable.css";

const AttTable = (props) => {
  // console.log(props.data);
  const arr = props.data;
  // console.log(arr);
  if (!arr) return null;
  const renAtt = arr.map((item, index) => {
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{item.SUB_NAME}</td>
        <td>{`${item.LEC_P}/${item.LEC_TOT}`}</td>
        <td>{`${item.TUT_P}/${item.TUT_TOT}`}</td>
        <td>{`${item.LAB_P}/${item.LAB_TOT}`}</td>
      </tr>
    );
  });
  return (
    <div>
      <div className="container">
        <Table className="att-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Lectures</th>
              <th>Tutorials</th>
              <th>Labs</th>
            </tr>
          </thead>
          <tbody>{renAtt}</tbody>
        </Table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    attendance: state.attendance_som,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { fetchSomAttendance: fetchSomAttendance })(
  AttTable
);
