import React, { useState, useEffect } from "react";
import Table from "./Table";

const SearchField = ({ val, handleDelete, handleEdit, handleView }) => {
  const [search, setSearch] = useState("");

  const [sortingMethod, setSortingMethod] = useState("None");
  const [filteredData, setFilteredData] = useState(val);
  useEffect(() => {
    let timeoutId;

    if (search.length >= 3) {
      // Set a timeout to execute the filter after 1 second
      timeoutId = setTimeout(() => {
        const filteredData = val.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filteredData);
      }, 1000);
    } else {
      // If the input is less than 3 characters, reset filtered data
      setFilteredData(val);
    }

    // Cleanup the timeout when the component unmounts or search changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [search, val, filteredData]);

  useEffect(() => {
    if (sortingMethod === "Most Upvoted") {
      const sortedByUpvotes = [...filteredData].sort(
        (a, b) => b.upvote - a.upvote
      );
      setFilteredData(sortedByUpvotes);
    } else if (sortingMethod === "Most Recent") {
      const sortedByDate = [...filteredData].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setFilteredData(sortedByDate);
    }
  }, [sortingMethod, filteredData]);

  const handleSort = (method) => {
    setSortingMethod(method);
  };

  //

  //

  const handleSearch = (event) => {
    const inputVal = event.target.value;
    setSearch(inputVal);
  };

  return (
    <div className="mt-5 justify-content-center ">
      <div className="d-flex justify-content-center">
        <input
          type="search"
          className="form-control col-lg-6 col-6 pt-4 pb-4 "
          placeholder="Search the record ..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="mt-5 d-flex justify-content-center align-items-center ">
        <h6 class="text-muted mt-2">SORT BY</h6>
        <button
          type="button"
          className="btn btn-success mr-4 ml-3"
          onClick={() => handleSort("Most Upvoted")}
        >
          Most Upvoted{" "}
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleSort("Most Recent")}
        >
          Most Recent
        </button>
      </div>
      <Table
        val={filteredData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default SearchField;
