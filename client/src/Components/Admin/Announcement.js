import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Col, Row, Container } from "reactstrap";
import "./Announcement.css";

const PostNoti = (props) => {
  const [datee, setDatee] = useState("");
  const [timee, setTimee] = useState("");
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <Container>
      <div className="dropdown">
        <h2 style={{ paddingTop: "25%" }}>Announcements</h2>
        <a href="/ViewNoti">View Announcements</a>
        <br />
        <br />

        <Form className="form">
          <Col>
            <FormGroup row>
              <Label for="exampleDate"> Till Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
                value={datee}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Label for="exampleTime">Time</Label>
              <Input
                type="time"
                name="time"
                id="exampleTime"
                placeholder="time placeholder"
                value={timee}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0" row>
              <Label for="exampleEmail" className="mr-sm-2">
                Subject
              </Label>
              <Input value={subject} />
            </FormGroup>
          </Col>

          <FormGroup>
            <Label for="exampleText">Description</Label>
            <Input type="textarea" name="text" id="exampleText" value={desc} />
          </FormGroup>

          <Button color="success">Submit</Button>
        </Form>
      </div>
    </Container>
  );
};
export default PostNoti;
