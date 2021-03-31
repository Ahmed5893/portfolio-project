import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./Contact.css";

const Fail = () => {
  const [show, setShow] = useState(true);
  const Reload = () => {
    window.location.reload();
  };

  return (
    <div className="msg">
      <Alert show={show} variant="danger">
        <Alert.Heading>
          <strong>Ouuuups...</strong>
        </Alert.Heading>
        <p>Something Went Wrong,Please Try Again</p>
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

export default Fail;
