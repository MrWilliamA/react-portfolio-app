import React from "react";
import { NavLink } from "react-router-dom";

const HireMe = () => {
  return (
    <div className="py-[80px] flex flex-wrap items-center">
      <div className="w-1/2">
        <h1>Hire Me</h1>
        <p>Looking for a hard-working creative to tackle your next front-end web project? Don't be shy, contact me!</p>
        <p>While you're at it, take a look at my  <NavLink to="/portfolio" className="text-blue font-bold">
portfolio page</NavLink> for some examples.</p><br/>
        <p>Not sure what you want? Not a problem, give me a call and we can work something out that suits you. There are plenty of options, choose a CMS like Wordpress for a quick website that you can manage yourself (or i can manage it for you). If you want something more unique, we can talk about alternatives, your needs are the first priority!</p>
        </div>
        <div className="w-1/2">
    <p>image will go here</p>
</div>
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
</div>
  )
};

export default HireMe;
