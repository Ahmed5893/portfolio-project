import React from "react";
import { Button } from "react-bootstrap";
import "./AboutMe.css";
import AbsoluteWrapper from "./AbsoluteWrapper";

const AboutMe = () => {
  return (
    <AbsoluteWrapper>
      
      <div className="container" style={{ backgroundColor: "#171717"}}>
        <h1 id='h1'>Who I'm</h1>
        <p>
          Hello,
          <br />
          I'm a 27 years old junior front-end React developer located in
          Tunisia with a good knowledge of back-end too.
          <br />
          Well-organised person, problem solver, independent employee with high
          attention to detail. Fan of Soccer, outdoor activities and Fishing. A
          family person and junior husband,
          <br />
          Interested in the entire frontend spectrum and working on ambitious
          projects with positive people.
        </p>

        <Button variant="secondary" className="cv">
          My Cv
        </Button>
      </div>
      
    </AbsoluteWrapper>
  );
};

export default AboutMe;
