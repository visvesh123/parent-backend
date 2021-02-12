import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Divider, Descriptions } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import SecNavBar from "./SecNavBar";
import SecForm from "./Form";
import RadioButtons from "./RadioButton";
import { Input, Button } from "antd";
import RecordsTable from "./RecordsTable";
import SuccessButton from "./SecSubmitButton";
import { connect } from "react-redux";
import { fetchsecRemarks } from "../../actions/index";

import ReasonSelect from './ReasonSelect'
const style = { background: "#ffffff", padding: "8px 0" };

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [remarks, setRemarks] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRem = (event) => {
    setRemarks(event.target.value);
    props.fetchsecRemarks(event.target.value);
  };
  console.log(remarks);
  // console.log(props.sec);
  const items = props.sec[0];
  console.log(props.image[0])
  // console.log(items);
  // if (items != null) {
  //   setId(items.id);
  //   sets_name(items.s_name);
  //   sets_mobile(items.s_mobile);
  //   setBatch(items.batch);
  //   setf_name(items.f_name);
  //   setpar_mobile(items.par_mobile);
  // }

  const desc = !items ? null : (
    <div className="desc-sec">
      <Descriptions
        title="Description"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Student ID"><b>{items.id}</b></Descriptions.Item>
        <Descriptions.Item label="Student Name">
         <b>{items.s_name}</b>
        </Descriptions.Item>
        <Descriptions.Item label="Student_phone">
          {items.s_mobile}
        </Descriptions.Item>
        <Descriptions.Item label="Batch">{items.batch}</Descriptions.Item>
        <Descriptions.Item label="Father Name">
          {items.f_name}
        </Descriptions.Item>
        <Descriptions.Item label="Parent Email">
          {items.par_email}
        </Descriptions.Item>
       
        <Descriptions.Item label="Picture">
        {/* <img src={`'data:image/jpeg;base64,${props.image.img}'`}/> */}
        <img src="/18XJ1A0537.JPG" />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );

  return (
    <div style={{ marginTop: "95px" }} className={classes.root}>
      <SecNavBar />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Check In-Out" {...a11yProps(0)} />
        <Tab label="Records" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col flex={3}>
            <div>
              <SecForm />
              <RadioButtons />
              {/* <Input
                placeholder="Reason"
                value={remarks}
                onChange={handleRem}
              /> */}

             
            </div>
            <Col flex={3}>
            <FormLabel component="legend">
          <strong>  Reasons : </strong>
        </FormLabel>
            <ReasonSelect/>
            </Col>
           
            <SuccessButton />
          </Col>
          <Col flex={2}>{desc}</Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <RecordsTable />
        </div>
      </TabPanel>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sec: state.sec,
    image : state.image
  };
};

export default connect(mapStateToProps, { fetchsecRemarks: fetchsecRemarks })(
  VerticalTabs
);
