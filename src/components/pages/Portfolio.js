import React from "react";
import FeaturedList from "../pageElements/portfolio/FeaturedList";
import Graphic from "../pageElements/portfolio/Graphic";
import Photography from "../pageElements/portfolio/Photography";
import {useState} from 'react';
import { NavLink } from "react-router-dom";
import CodingTable from "../pageElements/portfolio/CodingTable";

const Portfolio = () => {
  const [coding, setCoding] = useState(true);
  const [graphics, setGraphics] = useState(false);
  const [photography, setPhotography] = useState(false);

  const handleClick = (tab) => {
      if (tab === 'coding') {
        setCoding(coding => true);
        setGraphics(graphics => false);
        setPhotography(photography => false);
      } else if (tab === 'graphics') {
        setCoding(coding => false);
        setGraphics(graphics => true);
        setPhotography(photography => false);;

      } else if (tab === 'photography') {
        setCoding(coding => false);
        setGraphics(graphics => false);
        setPhotography(photography => true);
      }
};

function codingComponents() {
  return (
    <>
<FeaturedList />
<CodingTable />
</>
  )
}

  return (
    <div className="pt-[80px]">
      <div>
      <h1>Portfolio</h1>
      <p>Click on the tabs below to browse my portfolio. Not everything made it in here, so if you are looking for something different <NavLink to="/hireme">send me a message</NavLink> and I can talk about what you are looking for.</p>
      </div>
      <div className="flex flex-wrap my-[10px] relative">
     <button className="bg-blue py-[5px] px-[14px] rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none mx-[4px] hover:bg-darkblue" onClick={() => handleClick('coding')}>Coding</button>
       <button className="bg-blue py-[5px] px-[14px] rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none mx-[4px] hover:bg-darkblue" onClick={() => handleClick('graphics')}>Graphics</button>
        <button className=" bg-blue py-[5px] px-[14px] rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none mx-[4px] hover:bg-darkblue" onClick={() => handleClick('photography')}>Photography</button>
       </div><div className="py-[40px]">
       {coding ? codingComponents() : null}
       {graphics ? <Graphic /> : null}
       {photography ? <Photography /> : null}
       </div>
    </div>
  )
};

export default Portfolio;
