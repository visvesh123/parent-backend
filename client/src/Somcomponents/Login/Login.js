import React from "react";
import ReactDOM from "react-dom";
import "./Login.css";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import { Row, Col } from "antd";
import { Carousel } from "antd";
import { Tabs, Select, Space } from "antd";
import { Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Reset from "./Register";
import { loginUser } from "../../actions/authAction";
import { clearErrors } from "../../actions/errorAction";
import Logo from "./logo.png";
import Slide1 from "./slide1.jpg";
import Slide2 from "./slide2.jpg";
import Slide3 from "./slide3.jpg";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 6,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

const { TabPane } = Tabs;
const { Option } = Select;

class NormalLoginFormSom extends React.Component {
  constructor(props) {
    super(props);
    this.Finish = this.Finish.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  Finish(values) {
    this.props.loginUser(values);
  }

  render() {
    // console.log(this.props.error);
    const { Content } = Layout;

    //const { Option } = Select;

    const { Sider } = Layout;
    return (
      <Layout>
        <img
          src={Logo}
          alt="Mahindra University"
          class="navbar-brand"
          width="280"
        />
        <Layout>
          <Content className="borders">
            <Row>
              <Col xs={24} md={12}>
                <Carousel autoplay>
                  <div className="carousel">
                    <img src={Slide1} alt="Slide1" />
                  </div>
                  <div className="carousel">
                    <img src={Slide2} alt="Slide2" />
                  </div>
                  <div className="carousel">
                    <img src={Slide3} alt="Slide3" />
                  </div>
                </Carousel>
              </Col>
              <Col xs={24} md={12} className="loginpart">
                <h2>Welcome to SOM Parents Portal!</h2>
                <div className="login-register">
                  <Tabs>
                    <TabPane tab="Login" key="1">
                      <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                          remember: false,
                        }}
                        onFinish={this.Finish}
                      >
                        <br />
                        <br />
                        <br />

                        <Form.Item
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Username!",
                            },
                          ]}
                        >
                          <Input
                            style={{ borderRadius: "10px" }}
                            prefix={
                              <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Student ID"
                          />
                        </Form.Item>

                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Password!",
                            },
                          ]}
                        >
                          <Input
                            style={{ borderRadius: "10px" }}
                            prefix={
                              <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Item>
                        {this.props.error == "Incorrect details!" && (
                          <div
                            className="alert-danger"
                            style={{ margin: 20 + "px" }}
                          >
                            Incorrect details!
                          </div>
                        )}

                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                          >
                            Log in
                          </Button>
                        </Form.Item>
                      </Form>
                    </TabPane>
                    <TabPane disabled tab="Forgot Password" key="2">
                      <Reset />
                    </TabPane>
                  </Tabs>
                </div>
              </Col>
            </Row>
          </Content>
        </Layout>
        <footer className="footer">
          <p style={{ textAlign: "center", marginBottom: "25px" }}>
            © 2020 Mahindra University, All Rights Reserved.
          </p>
        </footer>
      </Layout>
    );
  }
}

NormalLoginFormSom.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    auth: state.auth,
    error: state.errors,
  };
};

export default connect(mapStateToProps, { loginUser: loginUser })(
  NormalLoginFormSom,
);
