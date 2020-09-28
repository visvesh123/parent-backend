import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Input, Checkbox, Button } from "antd";
import "./SecLogin.css";
import Logo from "../logo.png";
import { Card, Row, Col } from "react-bootstrap";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { secloginUser } from "../../actions/authAction";

class SecLogin extends Component {
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed(this);
  }

  onFinish(values) {
    console.log("Success:", values);
    const { username, password } = values;
    this.props.secloginUser({ username, password });
  }

  onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/security-portal");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/security-portal");
    }
  }

  render() {
    return (
      <div className="resetcard">
        <Card style={{ width: "30rem" }}>
          <img className="logo-reset" src={Logo} alt="Mahindra University" />
          <br />
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Card.Text>
              <Col>
                <Form
                  // {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Card.Text>

            <br />
            <br />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    auth: state.auth,
    error: state.errors,
  };
};

export default connect(mapStateToProps, { secloginUser: secloginUser })(
  SecLogin
);
