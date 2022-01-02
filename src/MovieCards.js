import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  MovieCard,
  ButtonsContainer,
  MovieCardContainer,
  Buttons,
  PosterImg,
} from "./styledComponents";

const MovieCards = ({ data, handleFavClick, handlePrevClick, favHeart }) => {
  const onFavClick = (item, index) => {
    handleFavClick(item, index);
  };
  const onPrevClick = (item) => {
    handlePrevClick(item);
  };

  return (
    <MovieCard>
      {data.map((item, index) => {
        return (
          <MovieCardContainer key={item.id}>
            {/* <h3>{item.title}</h3> */}
            <PosterImg
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`}
              alt="Movie Poster"
            />
            {/* <p>{item.overview}</p>
            <p>
              <b>Release Date:</b> {item.release_date}
            </p>
            <p>
              <b>Popularity:</b> {item.popularity}
            </p>
            <p>
              <b>Rating</b> {item.vote_average}
            </p> */}
            <ButtonsContainer>
              <Buttons onClick={() => onPrevClick(item)}>
                  Preview <i className="far fa-eye"></i>
              </Buttons>
              <Buttons
                className={favHeart.includes(item.id) ? "active" : ""}
                onClick={() => onFavClick(item, item.id)}
              >
                {favHeart.includes(item.id) ? "Favorites" : "Add to Fav"}
                <i className="fas fa-heart"></i>
              </Buttons>
            </ButtonsContainer>
          </MovieCardContainer>
        );
      })}
    </MovieCard>
  );
};

MovieCards.propTypes = {
  data: PropTypes.array,
  handleFavClick: PropTypes.func,
  handlePrevClick: PropTypes.func,
  favHeart: PropTypes.array,
};

export default MovieCards;
