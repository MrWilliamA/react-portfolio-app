import React from "react";
import Az5 from "../../../assets/Photography/az5.jpg";
import Binoculars from "../../../assets/Photography/binoculars.jpg";
import Boots from "../../../assets/Photography/boots.jpg";
import Earmuffs from "../../../assets/Photography/earmuffs.jpg";
import Esprit from "../../../assets/Photography/esprit.jpg";
import LedRound from "../../../assets/Photography/led-round.jpg";
import Led from "../../../assets/Photography/led.jpg";
import Meade from "../../../assets/Photography/packaging.jpg";
import Reddot from "../../../assets/Photography/red-dot.jpg";
import Riflescope from "../../../assets/Photography/riflescope.jpg";
import Spotter from "../../../assets/Photography/spotter.jpg";
import OTA from "../../../assets/Photography/telescope-ota.jpg";

const Photography = () => {
  return (
    <div>
      <p>
        With years of experience in product photography I am able to position,
        photograph and edit just about anything that you want to sell. With my
        trusty camera I will turn your products into the next big thing!
      </p>
      <div className="flex flex-wrap">
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Binoculars} alt="Binoculars" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Earmuffs} alt="Earmuffs" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Meade} alt="Meade" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Reddot} alt="Reddot" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Riflescope} alt="Riflescope" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Spotter} alt="Spotter" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={OTA} alt="OTA" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Led} alt="Led" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Boots} alt="Boots" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={LedRound} alt="LedRound" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Az5} alt="Az5" />
        </div>
        <div className="w-[24%] m-[0.5%] self-center">
          <img className="w-full" src={Esprit} alt="Esprit" />
        </div>
      </div>
    </div>
  );
};

export default Photography;
