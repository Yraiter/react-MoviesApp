import React, { } from 'react';
// import Flippy, { FrontSide, BackSide } from 'react-flippy';
import MovieDetails from './MovieDetails/MovieDetails'
// import Modal from '../../components/UI/Modal/Modal';

import './movieCard.css';

const movieCard = (props) => {
    // const imageUrl = `https://image.tmdb.org/t/p/w342/${props.img}`
    const clickHandler = (event) => {
        console.log(event.target.alt)
        props.ShowHideHandler();
        props.SelectedMovieHandler(event.target.alt);

    }

    const imageUrl = "https://image.tmdb.org/t/p/w342/" + props.img;
    return (
        <>
            <li className="movie-item" onClick={clickHandler} >
                <img src={imageUrl} alt={props.id} />
                <div className="movie-description">
                    <h2 value={props.id}>{props.title} </h2>
                    <MovieDetails />
                </div>
            </li>
        </>
    )
}


export default movieCard;



