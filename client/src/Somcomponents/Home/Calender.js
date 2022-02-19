import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Calendar } from "antd";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function onSelect(value) {
  const x = JSON.stringify(value);
  console.log(value["_d"]);
  const arr = x.split("-");
  const [years, month] = arr;
  const year = years.slice(1);
  const d = arr[2];
  const date = d.split("T", 1)[0];
  console.log(`${year},${month},${date}`);
}

const Calender = () => {
  return (
    <div>
      <div className="site-calendar-demo-card">
        <Calendar
          fullscreen={false}
          onPanelChange={onPanelChange}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
};

export default Calender;
