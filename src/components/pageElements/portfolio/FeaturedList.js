import React from "react";
import phase0 from "../../../assets/phase0-website.gif";
import shipping from "../../../assets/shipping.gif";
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
      <SingleFeatured
        featuredTitle="Free Shipping Countdown"
        text={
          "Looking for a way to drive sales on a customer portal, I decided to build a conditional progress bar to gamify the cart process. It works by grabbing the dollar value of the users cart and comparing it to the amount remaining to free shipping. Tricker than it sounds, this free shipping amount is dependent on the users login type."
        }
        img={shipping}
        link="#"
        linkText="Classified"
      />
      <SingleFeatured
        featuredTitle="Pet Name Picker"
        text={
          "My first ever Javascript project. I made this one for my soon to be wife, never ask a developer for something unless you really mean it. With no formal training and barely any experience, I hacked this together peace by peace. The result...glorious."
        }
        img={shipping}
        link="#"
        linkText="Play the Quiz"
      />
    </>
  );
};

export default FeaturedList;
