import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Iframe from "react-iframe";
const Timetable = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle} className={className}>
        {buttonLabel}
      </Button>
      <Modal
        centered={false}
        isOpen={modal}
        toggle={toggle}
        className={className}
        scrollable={true}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Iframe
            url="https://docs.google.com/document/d/e/2PACX-1vTtBdTSiwWA9DrVXVCojhx1W-UeGngSc2WP4MufsVHXbVxGwA3caZpi8eQxmErThw/pub?embedded=true"
            width="800px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Timetable;
