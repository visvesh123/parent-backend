import React from "react";
import { connect } from "react-redux";
import {
  sendComplaint,
  fetchDescription,
  fetchType,
} from "../../actions/index";

const Submit = () => {
  return (
    <div>
      <h1>Submitted bruh..</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    complaint: state.complaint,
    student: state.student,
  };
};

export default connect(mapStateToProps, {
  sendComplaint: sendComplaint,
  fetchDescription: fetchDescription,
  fetchType: fetchType,
})(Submit);
