import React, { } from 'react';
//import MovieDetails from './MovieDetails/MovieDetails'

import './movieCard.css';

const movieCard = (props) => {


    const clickHandler = (id, event) => {
        event.preventDefault();
        console.log(event)
        console.log(id)
        props.ShowHideHandler();
        props.SelectedMovieHandler(id);
    }
    // console.log(props)
    const imageUrl = "https://image.tmdb.org/t/p/w342/" + props.movieInfo.poster_path;
    return (
        <>
            <li className="card" onClick={(event) => clickHandler(props.movieInfo.id, event)} >
                <img src={imageUrl} alt=" " />
                <div className="cardContent">
                    {/* <h2 className="title">{props.movieInfo.title}</h2> */}
                    <button className="btn" onClick={(event) => clickHandler(props.movieInfo.id, event)}>Read More</button>
                </div>
            </li>
        </>
    )
}


export default movieCard;



