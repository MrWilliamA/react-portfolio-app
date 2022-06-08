import React from "react";
import { NavLink } from "react-router-dom";
import Willprofile from "../components/Willprofile";

const HireMe = () => {
  return (
    <div className="py-[80px] px-[25px] flex flex-wrap items-center">
      <div className="w-full md:w-1/2 pr-0 md:pr-[25px]">
        <h1>Hire Me</h1>
        <p>Looking for a hard-working creative to tackle your next front-end web project? Don't be shy, contact me!</p>
        <p>While you're at it, take a look at my  <NavLink to="/portfolio" className="text-blue font-bold">
portfolio page</NavLink> for some examples.</p><br/>
        <p>Not sure what you want? Not a problem, give me a call and we can work something out that suits you. There are plenty of options, choose a CMS like Wordpress for a quick website that you can manage yourself (or i can manage it for you). If you want something more unique, we can talk about alternatives, your needs are the first priority!</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap pt-[25px] md:pt-0 md:pl-[50px] my-[50px]">
          <Willprofile />
        </div>
    <div className="w-full flex flex-wrap pt-[25px] md:pt-0 my-[50px]">
    <form method='POST' action="https://getform.io/f/edecc139-1701-45f6-8fc7-207025dfb7fd" className='flex flex-col max-w-[600px] w-full'>
            <input className='bg-[#1197ba26] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#1197ba26]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#1197ba26] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
</div>
  )
};

export default HireMe;
