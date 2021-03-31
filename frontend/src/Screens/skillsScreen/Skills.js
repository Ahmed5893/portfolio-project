import React, { useState, useMemo } from "react";
import { useTransition, a } from "react-spring";
import useMeasure from "./useMeasure";
import useMedia from "./useMedia";
import data from "./data";
import "./Skills.css";
import AbsoluteWrapper from "../AbsoluteWrapper";
import { Promise } from "es6-promise";

const Skills = () => {
  // function  timeout(ms) {
  //   return new Promise(resolve=>setTimeout(resolve,ms));
  // }
  
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    3
  );
  const [bind, { width }] = useMeasure();
  const [items, set] = useState(data);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = items.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const xy = [
        (width / columns) * column,
        (heights[column] += child.height / 3) - child.height / 3,
      ];
      return { ...child, xy, width: width / columns, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, items, width]);

  let transitions = useTransition(gridItems, (item) => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    trail: 400,
  });

  return (
    <AbsoluteWrapper>
      <div className="container">
        <div
          {...bind}
          className="list"
          style={{ height: Math.max(...heights) }}
        >
          {transitions.map(({ item, props: { xy, ...rest }, key }) => (
            <a.div
              key={key}
              style={{
                transform: xy.interpolate(
                  (x, y) => `translate3d(${x}px,${y}px,0)`
                ),
                ...rest,
              }}
            >
              {<div style={{ backgroundImage: item.css }} />}
            </a.div>
          ))}
        </div>
      </div>
    </AbsoluteWrapper>
  );
};

export default Skills;
