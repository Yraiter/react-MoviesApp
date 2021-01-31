import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { fetchMovies } from '../../redux'
import MovieCard from './MovieCard/MovieCard';
import Modal from '../UI/Modal/Modal';
import "./Movies.scss";

const Movies = ({ moviesData, fetchMovies, loader }) => {

    // const [movies, setMovies] = useState('')
    const [selectedMovieId, setSelectedMovieID] = useState(null)
    const [showFull, setShowFull] = useState(false)
    const [loading, setLoading] = useState(loader)


    useEffect(() => {
        console.log("Use useEffect in Movies")
        fetchMovies()
    }, [fetchMovies])
    useEffect(() => {
        setLoading(loader)
    }, [loader])

    const SelectedHandler = id => {
        setSelectedMovieID(id);
    }

    const HideShowHandler = () => {
        setShowFull(!showFull)
    }

    const findMovieByID = (id) => {
        return moviesData.filter((key, Indexmovie) => {
            // eslint-disable-next-line eqeqeq
            if (moviesData[Indexmovie].id == id) {
                return moviesData[Indexmovie]
            }
            else return null
        })
    }

    const moviesList = moviesData.map((movie) => {
        return <MovieCard
            key={movie.id}
            ShowHideHandler={HideShowHandler}
            SelectedMovieHandler={SelectedHandler}
            SelectedMovie={selectedMovieId}
            show={showFull}
            movieInfo={movie}
        />
    })

    let modal;
    if (showFull === true) {
        let selecedMovie = findMovieByID(selectedMovieId)
        // console.log(selecedMovie[0])//backdrop_path
        modal =
            <Modal
                show={showFull}
                ShowHideHandler={HideShowHandler}
                movieInfo={selecedMovie[0]}
            />
    }
    else modal = null;

    if (loading) {
        return <div id="searchNotFound">Loading movies...</div>
    }
    if (moviesData.length === 0) {
        return <div id="searchNotFound">Sorry, No Movies found related to search term</div>
    }
    return (
        <>
            { modal}
            <ul className="movies">
                {moviesList}
            </ul>
        </>
    )
}

function getVisibleMovies(data) {
    return data.movies
        .filter(m => {
            // console.log("title_searchterm", m.title, data.search_term)
            return (
                // (data.search_term === '' || m.title.toLowerCase().indexOf(data.search_term.toLowerCase()) > -1) &&
                (data.genre === '' || m.genre_ids.includes(data.genre.id)) &&
                // (data.quality === 'all' || m.genre_ids.includes(data.quality)) && 
                (m.vote_average >= data.rating.min && m.vote_average <= data.rating.max) &&
                (m.release_year >= data.release_year.min && m.release_year <= data.release_year.max)
            );
        });
}

const mapStateToProps = state => {
    // console.log({ state });
    return {
        moviesData: getVisibleMovies(state.movies),
        loader: state.movies.loading
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

