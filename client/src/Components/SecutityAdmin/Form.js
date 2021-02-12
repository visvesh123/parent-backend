import React, { useState } from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { fetchsecDetails, fetchsecUsername ,fetchLatestRecord ,fetchImage } from "../../actions/index";
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
let x =event.target.value.slice(0, 2) + "XJ1A0" + event.target.value.slice(2)
    props.fetchsecUsername(event.target.value);

  };

  const concatanate = (x)=>{
    
    return x.slice(0, 2) + "XJ1A0" + x.slice(2);
   
  }

  return ( 
    <div>
      <Search
        placeholder="input ID Number"
        onSearch={(value) => {
        let y =  concatanate(value)
        
        console.log(y)
          props.fetchsecDetails({ username: y  });
          props.fetchLatestRecord(y)
          props.fetchImage("2018" , y)
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
  fetchLatestRecord : fetchLatestRecord,
  fetchImage : fetchImage
})(SecForm);
