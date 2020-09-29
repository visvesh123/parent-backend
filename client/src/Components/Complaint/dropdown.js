import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fetchType, fetchMail, fetchStudent } from "../../actions/index";
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
  { val: "Ragging", mail: [] },
  { val: "Academic Probations", mail: [] },
  { val: "Canteen/Transport/Cleanliness", mail: [] },
  { val: "Hostel", mail: [] },
  { val: "IT", mail: [] },
  { val: "Finance", mail: [] },
  { val: "Other", mail: [] },
];
let mail;
function SimpleSelect(props) {
  const classes = useStyles();
  const [type, setType] = React.useState("Other");

  let mail = [
    "sukesh.rakshit@mahindrauniversity.edu.in",
    "yaj.medury@mahindrauniversity.edu.in",
  ];
  const handleChange = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
  };

  // if (type == "Ragging") {
  //   mail = [...mail, "venugopala.dandu@mahindrauniversity.edu.in"];
  // } else if (type == "Academic Probations") {
  //   mail = [...mail, "deanacademics@mahindrauniversity.edu.in"];
  // } else if (type == "Canteen/Transport/Cleanliness") {
  //   mail = [...mail, ""];
  // } else if (type == "Hostel") {
  //   mail = [...mail, "venugopala.dandu@mahindrauniversity.edu.in"];
  // } else if (type == "IT") {
  //   mail = [...mail, "naveen@mahindrauniversity.edu.in"];
  // } else if (type == "Finance") {
  //   mail = [...mail, "ranjan.sardar@mahindrauniversity.edu.in"];
  // } else if (type == "Other") {
  //   mail = [...mail];
  // }

  if (type == "Ragging") {
    mail = ["visveshnaraharisetty@gmail.com", "visvesh18568@mechyd.ac.in"];
  } else if (type == "Academic Probations") {
    mail = ["visveshnaraharisetty@gmail.com", "visvesh18568@mechyd.ac.in"];
  } else if (type == "Canteen/Transport/Cleanliness") {
    mail = ["visveshnaraharisetty@gmail.com", "visvesh18568@mechyd.ac.in"];
  } else if (type == "Hostel") {
    mail = ["visveshnaraharisetty@gmail.com", "visvesh18568@mechyd.ac.in"];
  } else if (type == "IT") {
    mail = ["visveshnaraharisetty@gmail.com", "visvesh18568@mechyd.ac.in"];
  } else if (type == "Finance") {
    mail = ["visveshnaraharisetty@gmail.com", "visvesh18568@mechyd.ac.in"];
  } else if (type == "Other") {
    mail = ["visveshnaraharisetty@gmail.com", "visvesh18568@mechyd.ac.in"];
  }

  props.fetchMail(mail);
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
            <MenuItem value={item.val}>{item.val}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default connect(null, {
  fetchType: fetchType,
  fetchMail: fetchMail,
  fetchStudent,
})(SimpleSelect);
