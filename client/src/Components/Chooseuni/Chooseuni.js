import React from "react";
import ReactDOM from "react-dom";
import "./Login.css";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { Row, Col } from "antd";
import { Carousel } from "antd";
import { Tabs, Select, Space } from "antd";
import { Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import Reset from "./Register";
import { loginUser } from "../../actions/authAction";
import { clearErrors } from "../../actions/errorAction";
import Logo from "../Login/logo.png";
import Slide1 from "../Login/slide1.jpg";
import Slide2 from "../Login/slide2.jpg"
import Slide3 from "../Login/slide3.jpg";

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

const Chooseuni = () => {
  
    const history = useHistory();
    // console.log(this.props.error);
    const { Content } = Layout;

    //const { Option } = Select;

    const { Sider } = Layout;
    const finish = (value) => {
        console.log(value)
        if(value.University === "soe"){
            history.push("/login");
        }
    }
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
                <h2>Welcome to Parents Portal!</h2>
                <div className="login-register">
                  <Tabs>
                    <TabPane tab="UNI" key="1">
                      <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                          remember: false,
                        }}
                        onFinish={finish}
                      >
                        <br />
                        <br />
                        <br />

                        <Form.Item
                            name="University"
                            rules={[{ required: true, message: 'Choose University' }]}
                        >
                            <Select placeholder="Select University">
                            <Option value="soe">School of Engineering</Option>
                            <Option value="som">School of Managment</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                          >
                            Choose University
                          </Button>
                        </Form.Item>
                      </Form>
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

export default Chooseuni;


