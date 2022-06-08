import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedDesk from "../components/AnimatedDesk";
import AnimatedText from "../components/AnimatedText";
import Banner from "../components/Banner";
import ContentSpacing from "../components/ContentSpacing";
import FeaturedList from "../components/portfolio/FeaturedList";

const Home = ({nav}) => {

  return (
    <>
      <Banner />
      <div className="block md:flex p-10 md:p-0 mx-auto mb-4 items-center justify-center h-[60vh]">
        <div className="absolute w-full md:relative md:w-1/2 items-center" className={nav ? 'hideSocials' : null}>
          <AnimatedText />
        </div>
        <div className="absolute w-[330px] md:relative md:w-1/2 items-center top-[300px] md:top-0 z-[-1]">
          <AnimatedDesk />
        </div>
      </div>
      <ContentSpacing value="large" />

      <div className="block px-4 md:px-0 md:flex align-middle">
        <div className="w-half pr-14">
          <p>
            A small gallery of my recent projects. I have singled these out
            because they are purely my own, from concept to completion. I
            designed all the relevent assets, handpicked the fonts and colours
            and codeded them from scratch. It's only a drop in the ocean
            compared to my entire portfolio, however only a small portion wil
            ever make it onto my website. Visit my
            <NavLink to="/portfolio" className="text-blue font-bold mx-2">
              Portfolio Page
            </NavLink>
            for more.
          </p>
        </div>
        <div className="w-1/2">
          <NavLink to="/portfolio" className="text-blue font-bold">
            <button className="bg-blue px-6 py-4 hover:bg-darkblue ">
              See More
            </button>
          </NavLink>
        </div>
      </div>
      <FeaturedList />
    </>
  );
};

export default Home;
