import React from "react";
import PropTypes from "prop-types";

export const SearchField = ({ search, setSearch, setSearchType }) => {
  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  const changeSearchType = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div className="d-flex flex-row w-100 justify-content-end">
      <div className="d-flex flex-row justify-content-center mb-3">
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search"
          className="rounded p-2 mx-3 border"
          onChange={changeSearch}
          style={{ outline: "none" }}
        />
        <select
          className="rounded p-2 border"
          style={{ marginRight: "1rem" }}
          onChange={changeSearchType}
        >
          <option value="general" default>
            General search
          </option>
          <option value="capital">Capital search</option>
        </select>
      </div>
    </div>
  );
};

SearchField.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.any.isRequired,
  setSearchType: PropTypes.any.isRequired,
};

export default SearchField;
