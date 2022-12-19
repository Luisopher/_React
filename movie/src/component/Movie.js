import React from 'react';

<<<<<<< HEAD
function Movie() {
    return (
        <div>영화</div>
=======
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({title, poster_path,vote_average}) {
    return (
        <div className='movie-container'>
            <img src={IMG_BASE_URL+poster_path} alt='영화 포스터'/>
            <div className='movie-info'>
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
        </div>
>>>>>>> origin/main
    );
}

export default Movie;