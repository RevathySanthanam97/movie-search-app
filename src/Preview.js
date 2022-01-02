import React from 'react'
import { PreviewContainer, PosterImg } from './styledComponents';

const Preview = ({activatePreview, movie, handlePrevClick}) => {
    const onPrevClose = (item) => {
        handlePrevClick(item);
      };
    return (
        <PreviewContainer className={activatePreview}>
            {movie !== undefined ?
                 <div className='previewDetails'>
                 <h3>{movie.title}</h3>
                 <PosterImg
                     src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                     alt="Movie Poster"
                 />
                 <p>{movie.overview}</p>
                 <p>
                     <b>Release Date:</b> {movie.release_date}
                 </p>
                 <p>
                     <b>Popularity:</b> {movie.popularity}
                 </p>
                 <p>
                     <b>Rating</b> {movie.vote_average}
                 </p>
                 <button className='goBackBtn' onClick={() => onPrevClose(movie)}><i className="fas fa-long-arrow-alt-left"></i></button>
             </div>
            : <p>Preview not available</p>}
           
        </PreviewContainer>
    )
}

export default Preview
