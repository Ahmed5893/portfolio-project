import React from "react";
import Lottie from "react-lottie-player";
import email from "../email.json";

const Loading = () => {
  return (
    <div id="email">
      <Lottie
        loop
        animationData={email}
        play
        style={{ width: 350, height: 350 }}
      />
    </div>
  );
};

export default Loading;
