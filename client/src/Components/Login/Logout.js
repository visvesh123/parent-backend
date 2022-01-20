import React, { Fragment } from "react";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
import "./Logout.css";

export const Logout = ({ loginUser }) => {
  return (
    <Fragment>
      <NavLink
        className="middle-main"
        style={({ float: "right" }, { fontSize: "25" })}
        onClick={loginUser()}
        href="/login"
      >
        Logout
      </NavLink>
    </Fragment>
  );
};

export default connect(null, { loginUser })(Logout);
