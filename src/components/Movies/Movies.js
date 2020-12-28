import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { fetchMovies } from '../../redux'
import MovieCard from './MovieCard/MovieCard';
import Modal from '../UI/Modal/Modal';
import "./Movies.css";

const Movies = ({ moviesData, fetchMovies }) => {

    //create states using hooks
    // const [movies, setMovies] = useState('')
    const [selectedMovieId, setSelectedMovieID] = useState(null)
    const [showFull, setShowFull] = useState(false)


    useEffect(() => {
        console.log("Use useEffect in Movies")
        fetchMovies()
    }, [fetchMovies])

    const SelectedHandler = id => {
        console.log(id)
        setSelectedMovieID(id);
    }

    const HideShowHandler = () => {
        setShowFull(!showFull)
    }

    const findMovieByID = (id) => {
        console.log("findMovie BY ID: " + id)
        return moviesData.movies.filter((key, Indexmovie) => {
            // eslint-disable-next-line eqeqeq
            if (moviesData.movies[Indexmovie].id == id) {
                return moviesData.movies[Indexmovie]
            }
            else return null
        })
    }

    const moviesList = Object.keys(moviesData.movies).map((key, Indexmovie) => {
        return <MovieCard
            key={key}
            ShowHideHandler={HideShowHandler}
            SelectedMovieHandler={SelectedHandler}
            SelectedMovie={selectedMovieId}
            show={showFull}
            movieInfo={moviesData.movies[Indexmovie]}
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



const mapStateToProps = state => {
    return {
        moviesData: state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: async () => dispatch(await fetchMovies())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies)

