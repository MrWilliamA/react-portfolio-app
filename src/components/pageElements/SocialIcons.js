import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialIcons = (props) => {
  const backgroundColor = props.color;
  return (
    <>
      <SocialIcon
        url="https://www.linkedin.com/in/will-archer-792b747a/"
        bgColor={backgroundColor}
        style={{ width: 30, margin: 4 }}
        target="_blank"
      />
      <SocialIcon
        url="https://www.facebook.com/will.archer.562/"
        bgColor={backgroundColor}
        style={{ width: 30, margin: 4 }}
        target="_blank"
      />
      <SocialIcon
        url="https://github.com/MrWilliamA"
        bgColor={backgroundColor}
        style={{ width: 30, margin: 4 }}
        target="_blank"
      />
      <SocialIcon
        url="https://www.pinterest.com.au/will_archer/"
        bgColor={backgroundColor}
        style={{ width: 30, margin: 4 }}
        target="_blank"
      />
      <SocialIcon
        url="mailto:will.archer@hotmail.com"
        bgColor={backgroundColor}
        style={{ width: 30, margin: 4 }}
        target="_blank"
      />
    </>
  );
};

export default SocialIcons;
