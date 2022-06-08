import React from "react";

const TableFilter = ({ onFilter, filter, setFilter, data }) => {
  let handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filter);
  };

  let handleChange = (e) => {
    setFilter(e.target.value);
  };

  const options = [];

  // eslint-disable-next-line
  const uniqueOptions = data.filter((element) => {
    const isDuplicate = options.includes(element.cat);
    if (!isDuplicate) {
      options.push(element.cat);

      return true;
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="search">Filter list by category:</label>
          <select
            type="select"
            id="search"
            className="border-2 border-[#1197BA] mx-[5px] h-[35px] px-[5px]"
            value={filter}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>

          {/* <button
            className="text-white bg-blue hover:bg-darkblue px-4 py-2 text-sm"
            type="submit"
          >
            FILTER
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default TableFilter;
