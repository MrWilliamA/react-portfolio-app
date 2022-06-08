import React from "react";

const GitList = ({ filter, filteredGits, gitLinks }) => {
  // console.log(options);

  return (
    <>
      {filter
        ? filteredGits.map((item) => {
            return (
              <tr key={item.title}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.cat}</td>
                <td>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    Find on GitHub
                  </a>
                </td>
              </tr>
            );
          })
        : gitLinks.map((item) => {
            return (
              <tr key={item.title}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.cat}</td>
                <td>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    Find on GitHub
                  </a>
                </td>
              </tr>
            );
          })}
    </>
  );
};

export default GitList;
