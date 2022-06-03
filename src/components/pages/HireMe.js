import React from "react";

const HireMe = () => {
  return (
    <div className="py-[80px]">
<h1>Hire Me</h1>
<p>Looking for a hard working creative to tackle your next front-end web project?</p>
<div className="flex flex-wrap items-center">
    <div className="w-1/2 flex flex-wrap my-[50px]">
      <div className="w-full mb-[25px]">
        <h2>Will Archer</h2>
      </div>
      <div className="w-1/2">
        <h3>Call Me</h3>
        <p><a href="tel:0409468139">0409 468 139</a></p>
      </div>
      <div className="w-1/2">
        <h3>Email Me</h3>
        <p><a href="mailto:will.archer@hotmail.com">will.archer@hotmail.com</a></p>
      </div>
    </div>
<div className="w-1/2">
    <p>image will go here</p>
</div>
</div>
</div>
  )
};

export default HireMe;
