import React from "react";
import { animated, useSpring } from "react-spring";
import cloud from "../assets/cloud.png";
import desk from "../assets/desk.png";
import envelope from "../assets/envelope.png";
import lightbulb from "../assets/lightbulb.png";
import tablet from "../assets/tablet.png";

const AnimatedDesk = () => {
  const animate = useSpring({
    from: { x: 0, y: -10 },
    to: { x: 0, y: 10 },
    config: {
      duration: 2000,
    },
    loop: { reverse: true },
  });

  const animateSmall = useSpring({
    from: { x: 0, y: 10 },
    to: { x: 0, y: -10 },
    config: {
      duration: 2000,
    },
    loop: { reverse: true },
  });

  const animatebulb = useSpring({
    from: { x: 0, y: 25, filter: "brightness(0.5)" },
    to: { x: 0, y: -25, filter: "brightness(1)" },
    config: {
      duration: 2000,
    },
    loop: { reverse: true },
  });

  return (
    <>
      <animated.div style={animate}>
        <img src={desk} alt="Will Archer Developer, Designer, Photographer" />
      </animated.div>
      <animated.div
        style={animateSmall}
        className="absolute bottom-[24%] left-[59%] smallPhone:bottom-[30%] md:bottom-[41%] md:left-[73%]"
      >
        <img src={tablet} alt="Will Archer Developer, Designer, Photographer" />
      </animated.div>
      <animated.div
        style={animateSmall}
        className="absolute bottom-[50%] md:bottom-[60%]"
      >
        <img
          src={envelope}
          alt="Will Archer Developer, Designer, Photographer"
        />
      </animated.div>

      <animated.div
        style={animatebulb}
        className="absolute bottom-[56%] left-[74%] md:bottom-[73%] md:left-[82%]"
      >
        <img
          src={lightbulb}
          alt="Will Archer Developer, Designer, Photographer"
        />
      </animated.div>

      <animated.div
        style={animateSmall}
        className="absolute bottom-[53%] left-[70%] md:bottom-[70%] md:left-[80%]"
      >
        <img src={cloud} alt="Will Archer Developer, Designer, Photographer" />
      </animated.div>
    </>
  );
};

export default AnimatedDesk;
