import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";
import water from "../water.json";
import water3 from "../water3.json";
import "./Projects.css";

const Loader = () => {
  const [play, setPlay] = useState();
  const mountedRef = useRef(true);
  useEffect(() => {
    setTimeout(() => {
      setPlay(water);
    }, 3000);
    setTimeout(() => {
      setPlay(water3);
    }, 5000);
    mountedRef.current = false;
  }, []);

  return (
    <div className="loader">
      <>
        <Lottie
          loop={false}
          animationData={play}
          play
          style={{ width: 300, height: 80 }}
        />

        <Lottie
          loop={false}
          play
          animationData={play}
          style={{ width: 200, height: 150 }}
        />
      </>
    </div>
  );
};

export default Loader;
