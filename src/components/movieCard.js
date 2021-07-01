import React from 'react';

export default function MovieCard({movie}){

    return(
       
            <div className="card" key={movie.id}>
              <p className="movieTitle">{movie.title}</p>
              <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'}/>
              <p className="movieRelease">Release Date: {movie.release_date}</p>
              <p className="movieRating">Rating: {movie.vote_average}</p>
              <p className="movieOverview">Summary: {movie.overview}</p>
            </div>
    
    )
}