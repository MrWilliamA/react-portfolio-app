import React from "react";
import Banner from "./Banner";
const Home = () => {
  return (
    <>
      <Banner />
      <div className="flex mb-4 items-center justify-center h-[50vh]">
        <div className="w-1/3 items-center">
          <p>Hi there!</p>
          <h1>I'm Will Archer</h1>
          <p>I am a </p>
        </div>
        <div className="w-1/3"></div>
      </div>
    </>
  );
};

export default Home;
