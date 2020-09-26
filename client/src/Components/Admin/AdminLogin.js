import React, { useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./AdminLogin.css";
import Logo from "./logo.png";
import { loginAdminUser } from "../../actions/authAction";
import { connect } from "react-redux";

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminID: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { adminID, password } = this.state;
    console.log("helo");
    this.props.loginAdminUser({ adminID, password });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    return (
      <div className="resetcard">
        <Card style={{ width: "30rem" }}>
          <img className="logo" src={Logo} alt="Mahindra University" />
          <br />
          <Card.Body>
            <Card.Title>Admin Login</Card.Title>
            <Card.Text>
              <form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Admin ID Number</Form.Label>
                  <Form.Control
                    type="ID number"
                    name="adminID"
                    placeholder="Enter ID"
                    value={this.state.adminID}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                </Form.Group>
              </form>
            </Card.Text>

            <Button variant="success">Submit</Button>
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

export default connect(mapStateToProps, { loginAdminUser: loginAdminUser })(
  AdminLogin
);
