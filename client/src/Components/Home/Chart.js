import React from "react";
import Chart from "react-google-charts";
import "./Chart.css";

const Chart_CGPA = (props) => {
  // console.log(props.results);

  const arr = props.results;
  const temp = new Array();

  for (var i = 0; i < arr.length; i++) {
    temp.push([parseInt(arr[i].SEM), parseFloat(arr[i].CGPA)]);
  }

  // console.log(temp);

  return (
    <div className="chart">
      <Chart
        width={"600px"}
        height={"500px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[["x", "CGPA"], ...temp]}
        options={{
          hAxis: {
            title: "Semester",
          },
          vAxis: {
            title: "CGPA",
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default Chart_CGPA;
