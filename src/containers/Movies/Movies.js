import React, { useState, useEffect } from "react";
import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';
import Modal from '../../components/UI/Modal/Modal';

import "./Movies.css";

export default function Movies() {

    //create states using hooks
    const [movies, setMovies] = useState('')
    const [selectedMovieId, setSelectedMovieID] = useState(null)
    const [showFull, setShowFull] = useState(false)


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ab2fefad2fb133b8288873e93a86f02e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then((response) => {
                console.log("this is api jet" + process.env.REACT_APP_TMDB_API_KEY)
                const moviesRes = response.data.results
                // console.log(moviesRes)
                // console.log(moviesRes)
                setMovies(moviesRes)
            })
            .catch(err => console.log("this is an error" + err))
    }, [])

    const SelectedHandler = id => {
        console.log(id)
        setSelectedMovieID(id);
    }

    const HideShowHandler = () => {
        setShowFull(!showFull)
    }

    const findMovieByID = (id) => {
        console.log("findMovie BY ID: " + id)
        return movies.filter((key, Indexmovie) => {
            if (movies[Indexmovie].id == id) {
                return movies[Indexmovie]
            }
        })
    }

    const moviesList = Object.keys(movies).map((key, Indexmovie) => {
        // console.log(movies[Indexmovie])
        return <MovieCard
            key={key}
            ShowHideHandler={HideShowHandler}
            SelectedMovieHandler={SelectedHandler}
            SelectedMovie={selectedMovieId}
            show={showFull}
            movieInfo={movies[Indexmovie]}
        />
    })

    let modal;
    if (showFull === true) {
        let selecedMovie = findMovieByID(selectedMovieId)
        console.log(selecedMovie[0])//backdrop_path
        modal =
            <Modal
                show={showFull}
                ShowHideHandler={HideShowHandler}
                movieInfo={selecedMovie[0]}
            />
    }
    else modal = null;

    return (
        <>
            { modal}
            <ul className="movies">
                {moviesList}
            </ul>
        </>
    )
}
