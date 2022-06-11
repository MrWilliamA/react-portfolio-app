import { useEffect, useState } from "react";
import Data from "./githubLinks.json";
import GitList from "./GitList";
import TableFilter from "./TableFilter";

const Portfolio = () => {
  const [filter, setFilter] = useState("");
  let [gitLinks, setGitLink] = useState([]);
  let [filteredGits, setFilteredGits] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  // const [query, setQuery] = useState("");

  useEffect(() => {
    let gitData = Data.entries;
    setGitLink(gitData);
    setIsLoading(false);
    let gitList =
      filter === "" ? gitData : gitData.filter((git) => git.cat === filter);
    setFilteredGits(gitList);
  }, [filter]);

  if (isLoading) return <h1>Loading!</h1>;

  return (
    <div className="mt-[60px]">
      <h2>Code Training</h2>
      <p>
        Below is a list of GitHub links with various training excerises I have
        worked on. I used these to practice my HTML, CSS, Javascript and React.
        <br /> Please note, <strong>THIS IS NOT EVERYTHING!</strong> For obvious
        reasons I can't add everything I have ever worked on to this website
      </p>
      <div>
        <TableFilter
          // onFilter={setQuery}
          filter={filter}
          setFilter={setFilter}
          data={gitLinks}
        />
      </div>
      <table className="codingTable table-fixed">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <GitList
            filter={filter}
            filteredGits={filteredGits}
            gitLinks={gitLinks}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
