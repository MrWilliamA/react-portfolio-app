import React, { useEffect, useState } from "react";

const Portfolio = () => {
  let [gitLinks, setGitLink] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3004/entries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGitLink(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading!</h1>;
  // return <img src={dogImages.message} alt="A Random Dog" />;
  // return <p>data: {{gitLink}}</p>;

  const linkList = gitLinks.map((link) => <p key={link.title}>{link.title}</p>);

  return (
    <div className="mt-[60px]">
      <div>{linkList}</div>
      <h2>Code Training</h2>
      <p>
        Below is a list of GitHub links with various training excerises I have
        worked on. I used these to priactive my HTML, CSS, Javascript and React.
      </p>
      <table className="codingTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
            <td>1961</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
