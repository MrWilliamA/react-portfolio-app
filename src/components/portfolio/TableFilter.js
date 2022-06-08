import React, { useState } from "react";

const TableFilter = ({ onFilter, filter, setFilter, data }) => {


  let handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filter);
  };

  let handleChange = (e) => {
    setFilter(e.target.value); 

  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="search">Filter list by category:</label>
          <select
            type="select"
            id="search"
            className="border-2 border-[#1197BA] mx-[5px] h-[35px] px-[5px]"
            value="React"
            onChange={handleChange}
          >
              {
              data.filter((option) => {
                option !== option
              }).map((data) => (
                  <option value={data.cat}>{data.cat}</option>
              ))
              }

              {/* {data.map((data) => (
                  <option value={data.cat}>{data.cat}</option>
              ))} */}
              </select>

          <button className="text-white bg-blue hover:bg-darkblue px-4 py-2 text-sm" type="submit">
            FILTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default TableFilter;