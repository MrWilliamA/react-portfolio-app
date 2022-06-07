import React from "react";
import GithubLinks from "./githubLinks.json";

const Portfolio = () => {
  

  return (
{ 
  GithubLinks.map( link => {
    <p>{link.title}</p>
  })
}

  );
};

export default Portfolio;
