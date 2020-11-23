import React, { useState, useEffect } from "react";
import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';
import FullMovie from '../../components/FullMovie/FullMovie';
import Modal from '../../components/UI/Modal/Modal';

import "./Movies.css";

export default function Movies() {

    //create states using hooks
    const [movies, setMovies] = useState('')
    const [selectedMovieId, setSelectedMovieId] = useState(null)
    const [showFull, setShowFull] = useState(false)

    useEffect(() => {
        axios.get('https://api.tvmaze.com/shows')
            .then((response) => {
                const moviesRes = response.data.splice(0, 10)
                setMovies(moviesRes)
            })
            .catch(err => console.log(err))
        // console.log(movies)
    }, [])

    const postSelectedHandler = id => {
        setSelectedMovieId(id);
    }

    const HideShowFullContinueHandler = () => {
        setShowFull(!showFull)
    }



    const moviesTo = Object.keys(movies).map((key, Indexmovie) => {
        // console.log(movies[Indexmovie])
        return <MovieCard
            key={key}
            title={movies[Indexmovie].name}
            img={movies[Indexmovie].image.medium}
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
