import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Checkbox, Button } from "antd";
import "./reset.css";
import Logo from "./logo.png";
import { Card, Row, Col } from "react-bootstrap";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { updatePassword } from "../../actions/index";
import { connect } from "react-redux";

const ResetPassword = (props) => {
  useEffect(() => {
    const {
      match: {
        params: { token },
      },
    } = props;
  }, []);

  // console.log(props);
  const finish = (values) => {
    //console.log(values);
    const { password } = values;
    // console.log(password);
    props.updatePassword({
      password: password,
      token: props.match.params.token,
    });
  };

  return (
    <div className="resetcard">
      <Card style={{ width: "30rem" }}>
        <img className="logo-reset" src={Logo} alt="Mahindra University" />
        <br />
        <Card.Body>
          <Card.Title>Reset Password</Card.Title>
          <Card.Text>
            <Col>
              <Form onFinish={finish}>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          "The two passwords that you entered do not match!"
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Confirm Password" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Update
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Card.Text>

          <br />
          <br />
          <Card.Link href="/Login">Sign In</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default connect(null, { updatePassword: updatePassword })(ResetPassword);
