import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Projects from "./Projects";

const Project = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
   setTimeout(() => {
     setShow(true)
   }, 8000);
    }
  , [])
  return (
    <div >
      <Projects />
      <Loader />
      {show ?
      <a href='https://github.com/Ahmed5893?tab=repositories' target='_blank' rel='noopener noreferrer'>
      <button id='btn-git'>
        <span id='github'>Check Me</span>
      </button></a> : null}
    </div>
  );
};

export default Project;
