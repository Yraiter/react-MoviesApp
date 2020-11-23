import React from 'react';
// import Flippy, { FrontSide, BackSide } from 'react-flippy';
import MovieDetails from './MovieDetails/MovieDetails'
import './movieCard.css';

const movieCard = (props) => {
    // const imageUrl = `https://image.tmdb.org/t/p/w342/${props.img}`

    const imageUrl = "https://image.tmdb.org/t/p/" + "w342/" + props.img
    return (
        <li className="movie-item" onClick={props.ShowHide}>
            <img src={imageUrl} alt="" />
            <div className="movie-description">
                <h2>{props.title}</h2>
                <MovieDetails />
            </div>
        </li>
    )
}



export default movieCard;





