import React, { useState } from "react";
import MovieCard from "./movieCard";
import { BsSearch } from "react-icons/bs";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // handleSearch
  const handleSearch = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  };
  return (
    <React.Fragment>
      <div className="formSection">
        <form className="form" onSubmit={handleSearch}>
          <input
            className="input"
            type="text"
            name="query"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
          ></input>
          <button className="button">
            <BsSearch />
          </button>
        </form>
      </div>
      <div className="cardList">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </React.Fragment>
  );
}
