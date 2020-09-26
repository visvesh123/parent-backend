import React, { useState } from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { fetchsecDetails, fetchsecUsername } from "../../actions/index";
const SecForm = (props) => {
  const { Search } = Input;
  const [username, setUsername] = useState("");
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const handleUsername = (event) => {
    setUsername(event.target.value);
    props.fetchsecUsername(event.target.value);
  };

  return (
    <div>
      <Search
        placeholder="input ID Number"
        onSearch={(value) => {
          props.fetchsecDetails({ username: value });
        }}
        onChange={handleUsername}
        enterButton
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sec: state.sec,
  };
};

export default connect(mapStateToProps, {
  fetchsecDetails: fetchsecDetails,
  fetchsecUsername: fetchsecUsername,
})(SecForm);
