import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import { Tabs, Row, Col } from "antd";
import { fetchSomAttendance } from "../../actions/index";
import { connect } from "react-redux";

const ExampleChart = (props) => {
  const arr = props.data;
  //console.log(arr);
  if (!arr) return null;
  var present = 0;
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    present =
      present +
      (parseInt(arr[i].LEC_P) +
        parseInt(arr[i].TUT_P) +
        parseInt(arr[i].LAB_P));
  }
  for (var i = 0; i < arr.length; i++) {
    total =
      total +
      (parseInt(arr[i].LEC_TOT) +
        parseInt(arr[i].TUT_TOT) +
        parseInt(arr[i].LAB_TOT));
  }
  // console.log(present);
  // console.log(total);
  return (
    <Row>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        //loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["Present", present],
          ["Absent", total - present],
        ]}
        options={{
          title: "Total Sem",
          // Just add this option
          is3D: true,
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    attendance: state.attendance_som,
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { fetchSomAttendance: fetchSomAttendance })(
  ExampleChart
);
