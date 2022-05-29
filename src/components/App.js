import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Footer from "./Footer";
import HireMe from "./HireMe";
import Home from "./Home";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Router>
      <NavBar />
      <div class="container m-auto sm:px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/hireme" element={<HireMe />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

// >>header Component
// >> navigation

// >>body Component

// >>footer Component

// >>home page
// various parts it body e.g banner, brands i worked with, services etc
// make as resuable components
// >>about page
// >>contact page
// >>blog page?
// blog list
// single blog
// >>404 page
