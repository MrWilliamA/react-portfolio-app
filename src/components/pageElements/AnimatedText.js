import React from "react";
import TypeAnimation from "react-type-animation";
import SocialIcons from "./SocialIcons";

const AnimatedText = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-black text-blue">Hi there!</h2>
      <h1 className="text-[2.5rem] my-1 md:my-4 md:text-6xl font-black  text-blue">
        <span className="text-xl">I'm</span>Will Archer.
      </h1>
      <div className="w-300px md:w-[32em]">
        <h2 className="text-2xl md:text-4xl font-black text-darkblue">
          <span>I am a </span>
          <TypeAnimation
            cursor={true}
            sequence={[
              "Developer",
              2000,
              "Designer",
              2000,
              "Photographer",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </h2>
        <SocialIcons color="#1197BA" />
      </div>
    </>
  );
};

export default AnimatedText;
