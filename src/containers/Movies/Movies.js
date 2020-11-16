import React from "react";
import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';

import "./Movies.css";

class Movies extends React.Component {

    //State can be initialized within Constructor after calling super
    state = {
        movies: [],
        selectedMovieId: null
    }

    componentDidMount() {
        console.log("Movies Page: componentDidMount")
        axios.get('https://api.tvmaze.com/shows')
            .then((response) => {
                const moviesRes = response.data.slice(0, 5)
                console.log(moviesRes)
                this.setState({ movies: moviesRes })
                console.log(this.state.movies)
            });
    }


    //Thanks to ES7, we can skip the constructor and use a simpler syntax to declare methods:
    postSelectedHandler = id => {
        this.setState({ selectedPostId: id });
    }

    render() {
        // const movies = this.state.movies.map(movie => {
        //     return <MovieCard
        //         key={movie.id}
        //         title={movie.name}
        //         genres={movie.genres}
        //         img={movie.image.medium}
        //         clicked={() => this.postSelectedHandler(movie.id)} />;
        // });

        const movies = this.state.movies.map(movie => {
            return <MovieCard
                key={movie.id}
                title={movie.title}
                img={movie.image.medium}
            />
        });

        return (
            <section>
                <ul className="movies">
                    {movies}
                </ul>
            </section>
        )
    }
}

export default Movies;