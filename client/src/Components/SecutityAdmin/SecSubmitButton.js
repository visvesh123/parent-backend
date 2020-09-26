import React from "react";
import "antd/dist/antd.css";
import { message, Button, Space } from "antd";
import { connect } from "react-redux";
import { addCheckingDetails } from "../../actions/index";
message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});

const SuccessButton = (props) => {
  // console.log(props.det);
  const items = props.det;

  const success = () => {
    console.log(items.remarks);
    props.addCheckingDetails({
      username: items.username,
      MOVING: items.inout,
      REMARKS: !items.remarks ? "-" : items.remarks,
    });
    message.success("Successfull!");
    window.location.reload(false);
  };
  return (
    <Space>
      <Button style={{ marginTop: "20px" }} onClick={success}>
        Submit
      </Button>
    </Space>
  );
};
const mapStateToProps = (state) => {
  return {
    det: state.secSubmit,
  };
};
export default connect(mapStateToProps, {
  addCheckingDetails: addCheckingDetails,
})(SuccessButton);
