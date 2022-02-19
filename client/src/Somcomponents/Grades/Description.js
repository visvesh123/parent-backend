import React from "react";
// import { Descriptions } from "antd";
import "./Dropdown.css";

const Desc_som = (props) => {
  const f = props.final_som;
  // console.log(f[0]);
  if (!f[0]) return null;

  var credits = 0;
  for (var i = 0; i < f.length; i++) {
    credits = credits + parseInt(f[i].CREDITS);
  }

  return (
    <div className="container">
      <h2 className="headingsh2">Grades Summary:</h2>
      <h4>Grade: {f[0].SPI}</h4>
      <h4>Credits Gained: {credits}</h4>

      {/* <Descriptions>
        <Descriptions.Item label="Grade">{f[0].SPI}</Descriptions.Item>
        <Descriptions.Item label="Credits Gained">{credits}</Descriptions.Item>
        {/* <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>  */}
      {/* </Descriptions>  */}
      <br />
    </div>
  );
};

export default Desc_som;
