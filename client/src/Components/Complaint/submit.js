import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  sendComplaint,
  fetchDescription,
  fetchType,
  fetchStudent,
} from "../../actions/index";

const Submit = (props) => {
  useEffect(() => {
    props.sendComplaint({
      type: !props.complaint.griev ? "" : props.complaint.griev,
      desc: !props.complaint.description ? "" : props.complaint.description,
      mail: !props.complaint.mail ? "" : props.complaint.mail,
      father: !props.student[0][0].FATHER_NAME
        ? ""
        : props.student[0][0].FATHER_NAME,
      name: !props.student[0][0].STUDENT_NAME
        ? ""
        : props.student[0][0].STUDENT_NAME,
      id: !props.student[0][0].HTNO ? "" : props.student[0][0].HTNO,
      batch: !props.student[0][0].BATCH ? "" : props.student[0][0].BATCH,
      mobile: !props.student[0][0].STUDENT_MOBILE
        ? ""
        : props.student[0][0].STUDENT_MOBILE,
      email: !props.student[0][0].STUDENT_EMAIL
        ? ""
        : props.student[0][0].STUDENT_EMAIL,
      p_mail: !props.student[0][0].PARENTS_EMAIL
        ? ""
        : props.student[0][0].PARENTS_EMAIL,
    });
  }, []);
  console.log(props.student[0][0].BATCH);
  return (
    <div>
      <h1>Message has been sent</h1>
      <h1>Thank you for filling out the form.</h1>
      <h1>Our administration will contact you soon.</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    complaint: state.complaint,
    student: state.student,
  };
};

export default connect(mapStateToProps, {
  sendComplaint: sendComplaint,
  fetchDescription: fetchDescription,
  fetchType: fetchType,
  fetchStudent: fetchStudent,
})(Submit);
