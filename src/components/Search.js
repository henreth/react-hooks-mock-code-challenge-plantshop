import React from "react";

function Search({onSearchChange,searchText}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchText}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;
