import React from "react";
import phase0 from "../../../assets/phase0-website.gif";
import wordle from "../../../assets/wordle.gif";
import SingleFeatured from "./SingleFeatured";
const FeaturedList = () => {
  return (
    <>
      <SingleFeatured
        featuredTitle="Phase0 Website"
        text={
          "My first assignment at AcedemyXi. This is a remake of my old portfolio website using purely HTML, CSS and a small amount of Javascript. I was expected to showcase my understanding of basic HTML markup and CSS principals, so naturally I went overboard and made a fully functional HTML website complete with a parallax banner."
        }
        img={phase0}
        link="https://github.com/MrWilliamA/phase0website"
        linkText="Find it on GitHub"
      />
      <SingleFeatured
        featuredTitle="Wordle Web App"
        text={
          "For my second assignment I had to make a single page web application. I decided to remake the popular game 'Wordle' in my own style. This was made with HTML, CSS, Vanilla Javascript and a local JSON server for keeping score."
        }
        img={wordle}
        link="https://mrwilliama.github.io/Wordle-Like-App/"
        linkText="See it in action"
      />
    </>
  );
};

export default FeaturedList;
