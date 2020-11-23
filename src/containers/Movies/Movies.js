import React, { useState, useEffect } from "react";
import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';
import FullMovie from '../../components/FullMovie/FullMovie';
import Modal from '../../components/UI/Modal/Modal';

import "./Movies.css";

export default function Movies() {

    //create states using hooks
    const [movies, setMovies] = useState('')
    // const [selectedMovieId, setSelectedMovieId] = useState(null)
    const [showFull, setShowFull] = useState(false)


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ab2fefad2fb133b8288873e93a86f02e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then((response) => {
                console.log("this is api jet" + process.env.REACT_APP_TMDB_API_KEY)
                const moviesRes = response.data.results
                // console.log(moviesRes)
                setMovies(moviesRes)
            })
            .catch(err => console.log("this is an error" + err))
    }, [])

    // const postSelectedHandler = id => {
    //     setSelectedMovieId(id);
    // }

    const HideShowFullContinueHandler = () => {
        setShowFull(!showFull)
    }



    const moviesTo = Object.keys(movies).map((key, Indexmovie) => {
        // console.log(movies[Indexmovie])

        return <MovieCard
            key={key}
            title={movies[Indexmovie].title}
            img={movies[Indexmovie].poster_path}
            ShowHide={HideShowFullContinueHandler}
            purchaseContinued={HideShowFullContinueHandler}
        />
    })


    return (
        < >
            <Modal
                show={showFull}
                ShowHideBackD={HideShowFullContinueHandler}
            >
                <FullMovie />
            </Modal>
            <ul className="movies">
                {moviesTo}
            </ul>
        </ >
    )
}
