import React from "react";
import { BiCaretRight } from "react-icons/bi";

const SingleFeatured = (props) => {
  const featuredTitle = props.featuredTitle;
  const text = props.text;
  const img = props.img;
  const link = props.link;
  const linkText = props.linkText;

  console.log(featuredTitle);
  return (
    <div className="block px-5 md:flex my-8 items-center">
      <div className="w-full md:w-1/2 md:pr-5">
        <img src={img} alt="abc" className="w-auto"></img>
      </div>
      <div className="w-full mt-2 md:w-1/2 ">
        <p className="my-5 bg-blue inline-block px-4 py-2 text-white ">
          <strong>{featuredTitle}:</strong>
        </p>
        <p>{text}</p>
        <a href={link} className="hover:text-darkblue my-2 inline-block">
          {linkText}
          <BiCaretRight className="inline" />
        </a>
      </div>
    </div>
  );
};

export default SingleFeatured;
