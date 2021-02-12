import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./RadioButton.css";
import { connect } from "react-redux";
import { fetchsecInOut } from "../../actions/index";

const RadioButtons = (props) => {
  const [value, setValue] = React.useState("IN");

  const handleChange = (event) => {
    setValue(event.target.value);
    props.fetchsecInOut(event.target.value);
  };

   

    console.log(props.latestRec[0])
  
  return (
    <div className="padding">
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <strong>Moving</strong>
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="IN" control={<Radio />} label="IN" />
          <FormControlLabel value="OUT" control={<Radio />} label="OUT" />
        </RadioGroup>
      </FormControl>
  
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sec: state.sec,
    latestRec : state.latestRec

  };
};

export default connect(mapStateToProps, { fetchsecInOut: fetchsecInOut })(RadioButtons);
