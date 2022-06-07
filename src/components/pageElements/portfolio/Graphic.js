import React from "react";
import Archery from "../../../assets/Graphics/archery.jpg";
import BannerAd from "../../../assets/Graphics/bannerAd.jpg";
import FotoTable from "../../../assets/Graphics/fotopro-table.jpg";
import Fotopro from "../../../assets/Graphics/fotopro.jpg";
import Meade from "../../../assets/Graphics/meade.jpg";
import NewRelease from "../../../assets/Graphics/new-release.jpg";
import Rangefinder from "../../../assets/Graphics/rangefinder.jpg";
import StarAdventurer from "../../../assets/Graphics/Star-Adventurer-Mount.jpg";
import Sunnies from "../../../assets/Graphics/sunnies.jpg";
import Trailcam from "../../../assets/Graphics/trailcam.jpg";

const Graphic = () => {
  return (
    <div>
      <p className="my-6">
        I have years of experience working wth the leading graphic technologies.
        I have a background in graphic design, making everything from magazine
        ads, posters, catalogues, tents, signage, logos and more!
      </p>
      <div className="flex flex-wrap">
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={StarAdventurer} alt="Star Adventurer" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={FotoTable} alt="Foto Tripod" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Fotopro} alt="Foto Tripod" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Meade} alt="Meade Telescope" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={NewRelease} alt="New Release Product" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Rangefinder} alt="Rangefinder" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Sunnies} alt="Sunnies" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Trailcam} alt="Trail Camera" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Archery} alt="Archery" />
        </div>
        <div className="w-[74%] m-[0.5%] self-center">
          <img className="w-full" src={BannerAd} alt="Social Media Banner" />
        </div>
      </div>
    </div>
  );
};

export default Graphic;
