import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import "./Step3.css";
import SimpleSelect from "./dropdown";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { fetchDescription } from "../../actions/index";
import { connect } from "react-redux";

const Step3 = (props) => {
  const [desc, setDesc] = useState("");
  function handleChange(e) {
    setDesc(e.target.value);
    console.log(desc);
    props.fetchDescription(e.target.value);
  }
  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <div className="formStyle">
            <label className="labelComp">Select the type of grievance:</label>
            <SimpleSelect />
            <div className="textComp">
              <label className="labelComp">Brief your Complaint:</label>

              <textarea
                rows="8"
                cols="50"
                value={desc}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* <label className="labelComp">Attachment (if any):</label> */}
            {/* <Form>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                Any relevant files can be attached.
              </FormText>
            </Form> */}
          </div>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
};

export default connect(null, { fetchDescription: fetchDescription })(Step3);
