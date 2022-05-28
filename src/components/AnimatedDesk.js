import React from "react";
import { animated, useSpring } from "react-spring";
import desk from "../assets/desk.png";

const AnimatedDesk = () => {
  const animate = useSpring({
    from: { x: 0, y: -10 },
    to: { x: 0, y: 10 },
    config: {
      duration: 2000,
    },
    loop: { reverse: true },
  });
  return (
    <>
      <animated.div style={animate}>
        <img
          src={desk}
          alt="Will Archer Developer, Designer, Photographer"
          className=""
        />
      </animated.div>
    </>
  );
};

export default AnimatedDesk;
