import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Contact.css";

const Success = () => {
  const [show, setShow] = useState(true);
  const history = useHistory();
  const Reload = () => {
    history.go(0);
  };
  return (
    <div className="msg">
      <Alert show={show} variant="success">
        <Alert.Heading>Message Successfuly Sent</Alert.Heading>
        <p>Thank You For Your Email,I Will Contact You Soon</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Back
          </Button>
        </div>
      </Alert>
      {!show && Reload()}
    </div>
  );
};

export default Success;
