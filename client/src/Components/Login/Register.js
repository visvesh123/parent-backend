import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Layout } from "antd";
import Password from "antd/lib/input/Password";
import { resetPassword } from "../../actions/index";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import "./Login.css";


// const layout = {
//   labelCol: {
//     span: 6,
//   },
//   wrapperCol: {
//     span: 10,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 10,
//     span: 10,
//   },
// };


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};


const Reset = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    props.resetPassword(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div className="loginpart">
    <Row>
    <Col span={14}>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Student ID:"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input student ID!",
          },
        ]}
      >
        <Input placeholder="Student ID"/>
      </Form.Item>

      {/* <div className="alert-danger">
        {this.props.error.message}
      </div> */}

      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your registered E-mail!",
          },
        ]}
      >
        <Input placeholder="E-mail"/>
      </Form.Item>
      {/* <div className="alert-danger">
        {this.props.error.message}
      </div> */}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Col>
    </Row>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    reset: state.reset,
  };
};

export default connect(mapStateToProps, { resetPassword: resetPassword })(
  Reset
);
