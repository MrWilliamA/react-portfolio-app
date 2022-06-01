import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pageElements/Footer";
import NavBar from "./pageElements/NavBar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import HireMe from "./pages/HireMe";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <NavBar />
      <div class="container m-auto sm:px-3 md:px-12 lg:px-28">
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
