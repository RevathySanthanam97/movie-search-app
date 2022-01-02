import React, { useState, useEffect } from "react";
import axios from "axios";
import { Nav, AppContainer, Logo } from "./styledComponents";
import Home from "./Home";
import Favorites from "./Favorites";
import Preview from "./Preview";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import LogoSrc from "./images/logo.png";

const App = () => {
  const [movies, setMovies] = useState([]);

  // navlink active
  const [activeLink, setActiveLink] = useState("home");
  // navlink active

  // search and its filtered list
  const [filteredList, setFilteredList] = useState([]);
  const [query, setQuery] = useState("");
  // search and its filtered list

  // favorites and heart button
  const [favItem, setFavItem] = useState([]);
  const [favHeart, setFavHeart] = useState([]);
  // favorites and heart button

  // sort and storted array
  const [sortType, setSortType] = useState("title");
  // sort and storted array

  // Preview display
  const [isPreview, SetIsPreview] = useState(false);
  const [previewMovie, SetPreviewMovie] = useState([]);
  // Preview display


  const handleSort = (type) => {
    const sortProperty = type;
    let sorted;
    if(sortProperty === "release_date"){
     sorted = [...movies].sort(
        (a, b) => Number(new Date(b[sortProperty])) - Number(new Date(a[sortProperty]))
      )
    } else if(sortProperty === "title"){
     sorted = [...movies].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]))
    } 
    else{
      sorted = [...movies].sort(
        (a, b) => b[sortProperty] - a[sortProperty])
    }
    setMovies(sorted);
  };

  const handlePrevClick = (item) => {
    if(isPreview === true){
      SetIsPreview(false)
    } 
    else{
      SetIsPreview(true)
    }
    SetPreviewMovie(item)
  }

  const handleFavClick = (item, index) => {
    let prevAdded = favItem;
    let prevFavState = favHeart;
    if (favItem.length === 0) {
      setFavItem([...favItem, item]);
      setFavHeart([...favHeart, index]);
    } else {
      if (prevAdded.indexOf(item) !== -1) {
        prevAdded = prevAdded.filter((task) => task !== item);
        prevFavState = prevFavState.filter((el) => el !== index);
        setFavItem(prevAdded);
        setFavHeart(prevFavState);
      } else {
        setFavItem([...favItem, item]);
        setFavHeart([...favHeart, index]);
      }
    }
  };

  const handleSearch = (query) => {
    setQuery(query);
    const search = movies.filter((movie) => {
      return Object.values(movie.title).join("").toLowerCase().includes(query);
    });
    setFilteredList(search);
  };

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=marvel&movie?sort_by=popularity&page=1&include_adult=false`
      );
      setMovies(response.data.results);
    }
    fetchMovies();
  }, []);

  return (
    <BrowserRouter>
      <AppContainer>
        <header>
          <Nav>
            <Logo src={LogoSrc}></Logo>
            <NavLink
              className={activeLink === "home" ? "activeLink" : ""}
              onClick={() => setActiveLink("home")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={activeLink === "favorites" ? "activeLink" : ""}
              onClick={() => (setActiveLink("favorites"), setQuery(''))}
              to="/favorites"
            >
              Favorites
            </NavLink>
          </Nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={query.length === 0 ? movies : filteredList}
                handleSearch={handleSearch}
                handleFavClick={handleFavClick}
                handlePrevClick={handlePrevClick}
                favHeart={favHeart}
                handleSort={handleSort}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                data={favItem}
                handleFavClick={handleFavClick}
                handlePrevClick={handlePrevClick}
                favHeart={favHeart}
              />
            }
          />
        </Routes>
        <Preview activatePreview={isPreview === true ? "active" : "inactive"} handlePrevClick={handlePrevClick} movie={previewMovie} />
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
