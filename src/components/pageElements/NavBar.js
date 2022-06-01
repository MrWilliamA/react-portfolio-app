import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="navBar w-screen md:px-20 lg:px-40 h-[100px] z-10 drop-shadow-lg ">
      <div className="flex items-center justify-between space-y-0.5 h-[100px]">
        <div>
          <a href="/">
            <img src={logo} alt="Will Archer Logo" className="w-[75px]" />
          </a>
        </div>
        <div>
          <ul className="hidden md:flex">
            <li className="text-darkblue lg:text-white">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-darkblue menu:text-white">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li className=" md:text-white">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className=" md:text-white">
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li className="md:text-white">
              <NavLink to="/hireme">Hire Me</NavLink>
            </li>
          </ul>
        </div>

        <div
          className="md:hidden mr-4 hover:cursor-pointer"
          onClick={handleClick}
        >
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-white w-full px-8"}>
        <li className="text-blue border-b-2 border-zinc-300 w-full">
          <NavLink onClick={handleClose} to="/">
            Home
          </NavLink>
        </li>
        <li className="text-blue border-b-2 border-zinc-300 w-full">
          <NavLink onClick={handleClose} to="about">
            About
          </NavLink>
        </li>
        <li className="text-blue border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="portfolio"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="text-blue border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="blog"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Blog
          </NavLink>
        </li>
        <li className="text-blue border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="hireme"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Hire me
          </NavLink>
        </li>

        <div className="text-blue flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            GitHub
          </button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
