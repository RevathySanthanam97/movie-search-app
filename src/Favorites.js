import React from "react";
import MovieCards from "./MovieCards";
import { FavoritesEmpty, FavoriteEmptyImg } from "./styledComponents";
import PropTypes from "prop-types";
const Favorites = ({ data, handleFavClick,handlePrevClick, favHeart }) => {
  console.log(data)
  return (
    <div>
      {data != "" ? (
        <MovieCards
          data={data}
          favHeart={favHeart}
          handleFavClick={handleFavClick}
          handlePrevClick={handlePrevClick}
        />
      ) : (
        <FavoritesEmpty>
          <h1>Favorites list is empty</h1>
          <FavoriteEmptyImg></FavoriteEmptyImg>
        </FavoritesEmpty>
      )}
    </div>
  );
};

Favorites.propTypes = {
  data: PropTypes.array,
  handleFavClick: PropTypes.func,
  favHeart: PropTypes.array,
};

export default Favorites;
