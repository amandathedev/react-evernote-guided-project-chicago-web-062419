import React from "react";

// props not this.props
const Search = props => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange={props.onSearchChange}
      />
    </div>
  );
};

export default Search;
