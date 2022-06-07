import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CodingTable from "../pageElements/portfolio/CodingTable";
import FeaturedList from "../pageElements/portfolio/FeaturedList";
import Graphic from "../pageElements/portfolio/Graphic";
import Photography from "../pageElements/portfolio/Photography";

const Portfolio = () => {
  const [coding, setCoding] = useState(true);
  const [graphics, setGraphics] = useState(false);
  const [photography, setPhotography] = useState(false);

  const handleClick = (tab) => {
    if (tab === "coding") {
      setCoding((coding) => true);
      setGraphics((graphics) => false);
      setPhotography((photography) => false);
    } else if (tab === "graphics") {
      setCoding((coding) => false);
      setGraphics((graphics) => true);
      setPhotography((photography) => false);
    } else if (tab === "photography") {
      setCoding((coding) => false);
      setGraphics((graphics) => false);
      setPhotography((photography) => true);
    }
  };

  function codingComponents() {
    return (
      <>
        <p>
          My journey as a web developer had humble beginnings. I started
          teaching myself basic HTML and CSS back in the days when Content
          Management Systems were a new and exciting invention. I hacked away
          for years before I discovered what's really possible on the world wide
          web. Now I use everything and anything to make a website, nothing gets
          me more excited than trying something new!
        </p>
        <br />
        <p>
          Currently (but not for long), my skills include HTML, CSS, Javscript,
          JQuery, React, JSON, GitHub, VScode, Tailwind, Responsive design,
          browser DevTools, API, accessiblity, SEO, speed optimisation,
          Wordpress, Shopify, Cpanel, SQL, basic PHP (hopefully not for long)
          and alot more.
        </p>
        <br />
        <p>
          Here a few creations, my first ever javascrit project and my most
          recent experiments.
        </p>
        <FeaturedList />
        <CodingTable />
      </>
    );
  }

  return (
    <div className="pt-[80px]">
      <div>
        <h1>Portfolio</h1>
        <p>
          Click on the tabs below to browse my portfolio. Not everything made it
          in here, so if you are looking for something different{" "}
          <NavLink to="/hireme">send me a message</NavLink> and I can talk about
          what you are looking for.
        </p>
      </div>
      <div className="flex flex-wrap my-[10px] relative">
        <button
          className="bg-blue py-[5px] px-[14px] rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none mx-[4px] hover:bg-darkblue"
          onClick={() => handleClick("coding")}
        >
          Coding
        </button>
        <button
          className="bg-blue py-[5px] px-[14px] rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none mx-[4px] hover:bg-darkblue"
          onClick={() => handleClick("graphics")}
        >
          Graphics
        </button>
        <button
          className=" bg-blue py-[5px] px-[14px] rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none mx-[4px] hover:bg-darkblue"
          onClick={() => handleClick("photography")}
        >
          Photography
        </button>
      </div>
      <div className="py-[40px]">
        {coding ? codingComponents() : null}
        {graphics ? <Graphic /> : null}
        {photography ? <Photography /> : null}
      </div>
    </div>
  );
};

export default Portfolio;
