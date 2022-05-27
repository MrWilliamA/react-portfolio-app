import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen md:px-20 lg:px-40 h-[100px] z-10 drop-shadow-lg ">
      <div className="flex items-center justify-between space-y-0.5 h-[100px]">
        <div>
          <img
            src={logo}
            alt="Will Archer Logo"
            className="w-[75px] menu:hidden" //this works
          />
        </div>
        <div>
          <ul className="hidden md:flex">
            {/* //this no longer works */}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/hireme">Hire Me</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="md:hidden mr-4 hover:cursor-pointer"
        onClick={handleClick}
      >
        {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </NavLink>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
