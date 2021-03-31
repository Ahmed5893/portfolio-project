import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import AbsoluteWrapper from "../AbsoluteWrapper";
import SkillChart from "./SkillChart";
import Skills from "./Skills";
import "./Skills.css";
const Card = () => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <AbsoluteWrapper>
      <div onClick={() => set((state) => !state)}>
        <img
          src="https://www.pinclipart.com/picdir/big/43-432588_arrow-clip-art-see-other-side-arrow-png.png"
          alt="click on the card"
          width="50px"
        />
        <a.div
          className="back"
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
        >
          <Skills />
        </a.div>
        <a.div
          className="front"
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
        >
          <SkillChart />
        </a.div>
      </div>
    </AbsoluteWrapper>
  );
};

export default Card;
