import React from "react";
import SkillBar from "react-skillbars";

const SkillChart = () => {
  const skills = [
    { type: "Html5", level: 100 },
    { type: "Css3", level: 75 },
    { type: "Bootstrap", level: 65 },
    { type: "figma", level: 60 },

    { type: "javascript", level: 70 },
    { type: "React", level: 80 },
    { type: "Redux", level: 60 },
    { type: "Axios", level: 100 },
    { type: "Express", level: 100 },
    { type: "Mongoose", level: 70 },
  ];
  const colors = {
    bar: "#ce5f38",
    title: {
      text: "white",
      background: "#770f05",
    },
  };
  return (
    <div className="container">
      <SkillBar
        skills={skills}
        animationDelay={13000}
        animationDuration={8000}
        colors={colors}
      />
    </div>
  );
};

export default SkillChart;
