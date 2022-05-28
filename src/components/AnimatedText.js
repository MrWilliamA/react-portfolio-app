import React from "react";
import TypeAnimation from "react-type-animation";
import SocialIcons from "./SocialIcons";

const AnimatedText = () => {
  return (
    <>
      <h2 className="text-4xl font-black text-blue">Hi there!</h2>
      <h1 className="text-6xl font-black my-4 text-blue">
        <span className="text-xl">I'm</span> Will Archer.
      </h1>
      <div style={{ width: "32em" }}>
        <h2 className="text-4xl font-black text-darkblue">
          <span>I am a </span>
          <TypeAnimation
            cursor={true}
            sequence={[
              "Developer",
              2000,
              "Designer",
              2000,
              "Photogrpaher",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </h2>
        <SocialIcons />
      </div>
    </>
  );
};

export default AnimatedText;
