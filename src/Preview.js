import React from 'react'
import { PreviewContainer, PosterImg } from './styledComponents';
import {useLocation, useNavigate } from "react-router-dom";
const Preview = () => {
    const location = useLocation();
    let history = useNavigate ();

    const { data } = location.state;
    console.log(data, history);

    return (
        <PreviewContainer>
            <div className='previewDetails'>
                <h3>{data.title}</h3>
                <PosterImg
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${data.poster_path}`}
                    alt="Movie Poster"
                />
                <p>{data.overview}</p>
                <p>
                    <b>Release Date:</b> {data.release_date}
                </p>
                <p>
                    <b>Popularity:</b> {data.popularity}
                </p>
                <p>
                    <b>Rating</b> {data.vote_average}
                </p>
                <button className='goBackBtn' onClick={() => history(-1)}><i className="fas fa-long-arrow-alt-left"></i></button>
            </div>
        </PreviewContainer>
    )
}

export default Preview
