import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import About from "../pages/About";
import HireMe from "../pages/HireMe";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import NotFound from '../pages/NotFound';
import { useState } from "react";

function App() {

  const [nav, setNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  
  const handleClick = () => {
    setMobileNav(!mobileNav)
    setNav(!nav);
  }


  return (
    <Router>
      <NavBar handleClick={handleClick} nav={nav} setNav={setNav}/>
      <div class="container m-auto sm:px-3 md:px-12 lg:px-28">
        <Routes>
          <Route path='*' element={<NotFound />} />  
          <Route path="/" element={<Home nav={nav}/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/hireme" element={<HireMe />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
