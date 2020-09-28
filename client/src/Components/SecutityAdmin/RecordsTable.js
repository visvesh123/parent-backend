import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import "./RecordsTable.css";
import axios from "axios";
import { connect } from "react-redux";
import { allStudents } from "../../actions/index";
const RecordsTable = (props) => {
  useEffect(() => {
    props.allStudents();
  }, []);
  const columns = [
    {
      title: "HTNO",
      dataIndex: "HTNO",
      width: 100,
    },
    {
      title: "STUDENT_NAME",
      dataIndex: "STUDENT_NAME",
      width: 100,
    },
    {
      title: "BRANCH",
      dataIndex: "BRANCH",
      width: 50,
    },
    {
      title: "MOVING",
      dataIndex: "MOVING",
      width: 50,
    },
    {
      title: "REMARKS",
      dataIndex: "REMARKS",
      width: 100,
    },
    {
      title: "DATE",
      dataIndex: "DATE",
      width: 100,
    },
    {
      title: "BATCH",
      dataIndex: "BATCH",
      width: 50,
    },
  ];

  // const data = [];
  // for (let i = 0; i < 100; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edward King ${i}`,
  //     age: 32,
  //     address: `London, Park Lane no. ${i}`,
  //   });
  console.log(props.records[0]);
  if (!props.records) {
    return null;
  }

  const data = props.records[0];
  let arr = new Array();
  arr.map((item, index) => {
    console.log(item);
  });
  return (
    <div>
      <h4>Student In-Out</h4>
      <Table
        className="margin-table"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 500 }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    records: state.records,
  };
};

export default connect(mapStateToProps, { allStudents: allStudents })(
  RecordsTable
);
