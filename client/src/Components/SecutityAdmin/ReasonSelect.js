import React from 'react'
import { Radio } from 'antd';
import { connect } from "react-redux";
import { fetchsecRemarks } from "../../actions/index";


const ReasonSelect  =  (props)=>{

    function onChange(e) {
        console.log(`radio checked:${e.target.value}`);
        props.fetchsecRemarks(e.target.value);
      }

    return (

        <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="Leave"> Leave </Radio.Button>
        <Radio.Button value="Eating"> Eating </Radio.Button>
        <Radio.Button value="Emergency">  Emergency </Radio.Button>
        <Radio.Button value="Family Outing"> Family Outing </Radio.Button>
        <Radio.Button value="Shopping">  Shopping  </Radio.Button>
      </Radio.Group>

    )
}

const mapStateToProps = (state) => {
    return {
      sec: state.sec,
    };
  };

export default connect(mapStateToProps, { fetchsecRemarks: fetchsecRemarks })(
    ReasonSelect
  );