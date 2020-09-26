import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fetchType } from "../../actions/index";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const arr = [
  "Ragging",
  "Academic Probations",
  "Hostel",
  "Canteen",
  "Transport",
  "Cleanliness",
  "Other",
];

function SimpleSelect(props) {
  const classes = useStyles();
  const [type, setType] = React.useState("Other");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  props.fetchType(type);
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
        >
          {arr.map((item, index) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default connect(null, { fetchType: fetchType })(SimpleSelect);
