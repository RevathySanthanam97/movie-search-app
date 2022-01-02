import React from "react";
import {
  FeaturesBar,
  SearchContainer,
  SortContainer,
} from "./styledComponents";
import PropTypes from "prop-types";

const SearchBar = ({ handleSearch, handleSort }) => {
  const searchValue = (e) => {
    e.preventDefault();
    handleSearch(e.target.value);
  };

  const sortData = (e) => {
    handleSort(e.target.value);
  };

  return (
    <FeaturesBar>
      <SearchContainer className="search__bar">
        <input type="text" placeholder="search" onChange={searchValue} />
        <i className="fas fa-search"></i>
      </SearchContainer>
      <SortContainer>
        <select onChange={sortData}>
          <option value="title">A-Z</option>
          <option value="vote_average">Rating</option>
          <option value="popularity">Popularity</option>
          <option value="release_date">Released</option>
        </select>
      </SortContainer>
    </FeaturesBar>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  handleSort: PropTypes.func,
};

export default SearchBar;
