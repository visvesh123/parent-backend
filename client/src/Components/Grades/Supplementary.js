import React from "react";
import { Table, Container } from "reactstrap";
import "./Exams.css";
import "./Dropdown.css";

const Supplementary = (props) => {
  const arr = props.supply;
  if (!arr) return null;
  const renSupply = arr.map((item) => {
    return (
      <tr>
        <td scope="row">{item.SUB_NAME}</td>
        <td>{item.SUB_CODE}</td>
        <td>Backlog</td>
      </tr>
    );
  });
  return (
    <Container>
      <div>
        <h2 className="headingsh2">Supplement Status: &nbsp;</h2>
        <Table className="table">
          <thead>
            <tr>
              <th scope="col" class="col-md-auto">
                Subject
              </th>
              <th scope="col" class="col-md-auto">
                Course Code
              </th>
              <th scope="col" class="col-md-auto">
                Status
              </th>
            </tr>
          </thead>
          <tbody>{renSupply}</tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Supplementary;
