import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import HireMe from "../pages/HireMe";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import Footer from "./Footer";
import NavBar from "./NavBar";

function App() {
  const [nav, setNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const handleClick = () => {
    setMobileNav(!mobileNav);
    setNav(!nav);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar handleClick={handleClick} nav={nav} setNav={setNav} />
      <div className="container w-[90%] m-auto sm:px-3 md:px-12 lg:px-28">
        <Routes>
          <Route path="/" element={<Home nav={nav} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/hireme" element={<HireMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
