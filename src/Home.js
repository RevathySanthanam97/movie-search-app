import React from "react";
import SearchBar from "./SearchBar";
import MovieCards from "./MovieCards";
import PropTypes from "prop-types";
const Home = ({ handleSearch, data, handleFavClick, favHeart, handleSort }) => {
  return (
    <div>
      <div className="dummyText">
        <p>About Movie List</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          repudiandae ducimus magni eaque quae, voluptatibus sed dolorum amet
          voluptates culpa eum nulla. Dolore voluptatem quasi eveniet velit
          dolores molestias doloribus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolore nam soluta excepturi eos iure, consequuntur
          dolorem eum ut fugit minima? Ex repellat dolorem voluptatibus tenetur,
          provident in consectetur saepe animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugit natus repudiandae eum iste
          consequuntur voluptas asperiores iusto consectetur illum molestias
          voluptate, ullam ab esse minima? Atque in saepe reiciendis
          consequatur.
        </p>
      </div>

      <SearchBar handleSearch={handleSearch} handleSort={handleSort} />
      <MovieCards
        data={data}
        favHeart={favHeart}
        handleFavClick={handleFavClick}
      />
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array,
  handleSearch: PropTypes.func,
  handleFavClick: PropTypes.func,
  favHeart: PropTypes.array,
};

export default Home;
