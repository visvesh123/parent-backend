import React, { useEffect } from "react";
import { Table } from "reactstrap";
import NavBar1 from "../NavBar1";
import { connect } from "react-redux";
import { fetchInOut } from "../../actions/index";
import "./Security.css";
import moment from "moment";

const Sec_Summary = (props) => {
  useEffect(() => {
    props.fetchInOut();
  }, []);

  if (!props.sec[0]) return null;
  const items = props.sec[0];
  //console.log(items);
  // console.log(items[0].DATE);
  const ren = items.map((item, index) => {
    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{item.MOVING}</td>
        <td>{moment(item.DATE).format("MMMM Do YYYY, h:mm:ss a")}</td>
        <td>{item.REMARKS}</td>
      </tr>
    );
  });

  return (
    <div>
      <NavBar1 />

      <h2 className="headingsh2">In-Out Register:</h2>

      <div className="container">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Moving</th>
              <th>Date</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>{ren}</tbody>
        </Table>
      </div>
      <footer>
        <p style={{ textAlign: "center", marginBottom: "25px" }}>
          © 2020 Mahindra University, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sec: state.security,
  };
};

export default connect(mapStateToProps, { fetchInOut: fetchInOut })(
  Sec_Summary
);
