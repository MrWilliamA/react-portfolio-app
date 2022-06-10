import React from "react";
import portrait from "../assets/will-archer-portrait.jpg";

const Willprofile = () => {
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 p-[10px]">
        <img src={portrait} alt="Will Archer" className="w-[300px]" />
      </div>
      <div className="w-full md:w-1/2 p-[10px]">
        <h2>Will Archer</h2>
        <h3>Call Me</h3>
        <p>
          <a href="tel:0409468139">0409 468 139</a>
        </p>
        <h3>Email Me</h3>
        <p>
          <a href="mailto:will.archer@hotmail.com">will.archer@hotmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Willprofile;
