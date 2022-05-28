import React from "react";
import AnimatedDesk from "./AnimatedDesk";
import AnimatedText from "./AnimatedText";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="flex max-w-[1200px] mx-auto mb-4 items-center justify-center h-[60vh]">
        <div className="w-1/2 items-center">
          <AnimatedText />
        </div>
        <div className="w-1/2 items-center">
          <AnimatedDesk />
        </div>
      </div>
    </>
  );
};

export default Home;
