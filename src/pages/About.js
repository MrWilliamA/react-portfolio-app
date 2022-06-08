import React from "react";
import Willprofile from "../components/Willprofile";

const About = () => {
  return (
    <div className="flex flex-wrap py-[80px] px-[20px]">
      <div className="w-full my-[20px]">
        <h1> About Me</h1>
      </div>
      <div className="w-full pr-0 md:pr-[25px] md:w-2/3">
        <p>
          <strong className="text-xl">Hi, I’m Will. Nice to meet you.</strong> 
        </p>
        <p>
          I am a web developer with a background in graphic design and product
          photography. I have worked on a wide range of projects, from blog
          websites to large scale ecommerce websites and customer portals. I
          have worked on packaging design, magazine advertising, social media,
          logos, posters, marquees, catalogues, product photography, photo
          editing and more. Currently I specialise in helping small businesses
          re-brand and set up an online presence.
        </p>
        <br />
        <p>
          Whether you’re looking to redesign your website or just need help with
          an advertising brochure, business card, poster, or logo—I’m here to
          help.
        </p>
        <br />
        <p>
          Do you need a website that you can run yourself? I work with various
          CMS like Wordpress that will get you online fast. Want something a
          little more unique? I work with HTML, CSS, Javascript and React so the
          sky’s the limit! Want to know how to get started? Give me a call on
          0409 468 139 or send me an email. Quotes are free so don’t be shy.
          Thank you for your interest!
        </p>
      </div>
      <div className="mt-[25px] w-full md:pt-o md:w-1/3">
       <Willprofile />
      </div>
    </div>
  );
};

export default About;
