import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import "./Step4.css";
import { connect } from "react-redux";
import { fetchStudent } from "../../actions/index";

const out = [
  { field: "Grievance Type", value: "" },
  { field: "Message", value: "" },
];

const Step4 = (props) => {
  useEffect(() => {
    props.fetchStudent();
  }, []);

  // console.log(props.complaint);
  if (!props.complaint) {
    return null;
  }

  if (!props.student) {
    return null;
  }
  const item = props.student[0];
  // console.log(item[0].STUDENT_NAME);
  const name = item[0].STUDENT_NAME;
  const id = item[0].HTNO;
  const father = item[0].FATHER_NAME;
  const batch = item[0].BATCH;
  const mobile = item[0].PARENTS_MOBILE;
  const email = item[0].PARENTS_EMAIL;
  const type = props.complaint.griev;
  const desc = props.complaint.description;

  out[0].value = type;
  out[1].value = desc;
  //   det[0].value = student.FATHER_NAME;
  //   det[1].value = student.STUDENT_NAME;
  //   det[2].value = student.HTNO;
  //   det[3].value = student.PARENTS_MOBILE;
  //   det[4].value = student.PARENTS_EMAIL;
  const det = [
    { field: "Applier Name", value: father },
    { field: "Student Name", value: name },
    { field: "ID No", value: id },
    { field: "Batch", value: batch },
    { field: " Parent Mobile number", value: mobile },
    { field: " Parent Email", value: email },
  ];

  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <div className="formStyle">
            <div className="comp-title">
              <h2>Summary</h2>
            </div>
            <table className="griev-table" style={{ border: 1 + "px" }}>
              <thead>
                <tr>
                  <th>Details:</th>
                  <th>-----</th>
                </tr>
              </thead>
              <tbody>
                {det.map((item, index) => (
                  <tr>
                    <td>
                      <strong>{item.field}</strong>
                    </td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="griev-table">
              <tbody>
                {out.map((item, index) => (
                  <tr>
                    <td>
                      <strong>{item.field}</strong>
                    </td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* 
                <label htmlFor="otp">Enter OTP</label>
                <input id="otp" type="text"></input>
                <hr/>
                <a href="#">Resend OTP</a> */}
          </div>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { complaint: state.complaint, student: state.student };
};

export default connect(mapStateToProps, { fetchStudent: fetchStudent })(Step4);
