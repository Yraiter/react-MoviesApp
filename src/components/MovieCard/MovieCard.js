import React from 'react';
// import Flippy, { FrontSide, BackSide } from 'react-flippy';
import MovieDetails from '../MovieDetails/MovieDetails'
import './movieCard.css';

const movieCard = (props) => {
    return (
        <li className="movie-item">
            <img src={props.img} alt="" />
            <div className="movie-description">
                <h2>{props.title}</h2>
                <MovieDetails />
            </div>
        </li>
    )
}



export default movieCard;





