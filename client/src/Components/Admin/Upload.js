import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from "reactstrap";
import axios from "axios";
import { render } from "react-dom";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClick() {
    let fd = new FormData();
    fd.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:3001/admin/uploads", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };

  render() {
    return (
      <Form action="/upload" method="POST" encType="multipart/form-data">
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input
            type="file"
            name="file"
            id="exampleFile"
            onChange={this.handleChange}
          />
          <FormText color="muted">
            This file must be a CSV file.
          </FormText>

          <Button onClick={this.onClick} color="success">Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Upload;
