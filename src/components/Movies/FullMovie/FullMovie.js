import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import ReadMore from 'read-more-react';

import './FullMovie.scss';

const FullMovie = (props) => {

    const imageCoverUrl = "https://image.tmdb.org/t/p/original" + props.movieInfo.backdrop_path
    const imagePosterUrl = "https://image.tmdb.org/t/p/w342/" + props.movieInfo.poster_path;
    const year = props.movieInfo.release_date.split("-")[0]
    const genres = props.movieInfo.genre_ids
    const overview = props.movieInfo.overview

    // useEffect(() => {
    //     console.log("UseEffect in full movies")
    // }, [])
    // console.log("Props from fullmovie", props)

    // console.log("genres of movie", genres)

    let genresList = genres.map(genreID => {
        // console.log("FullMovie genreID", genreID)
        let res = props.genresData.genres.find(genre => {
            // eslint-disable-next-line eqeqeq
            // console.log("this is genre in FullMovie", genre)
            if (genre.id == genreID) {
                return genre.name
            }
            else return null
        })
        // console.log(res)
        return res.name
    })

    // console.log(genresList)
    let genreToShow = genresList.join(', ')


    // TODO: Need to divide to components 
    return (
        <div className="fullMovieContainer">
            <button type="button" className="close" data-dismiss="Modal" aria-label="Close" onClick={props.ShowHideHandler}>
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={imagePosterUrl} alt=" " />
                    <h1>{props.movieInfo.title}</h1>
                    <h4>{year}, David Ayer</h4>
                    <p className="type">{genreToShow}</p>
                    <span className="minutes">117 min</span>
                </div>
                <div className="movie_desc">
                    <ReadMore
                        text={overview}
                        min={50}
                        ideal={60}
                        max={80}
                        readMoreText={"Read more..."}
                    />
                </div>
                {/* TODO: Need to create movie Social buttons and use functionality */
                /* <div className="movie_social">
                    <ul>
                        <li><i className="material-icons">share</i></li>
                        <li><i className="material-icons"></i></li>
                        <li><i className="material-icons">chat_bubble</i></li>
                    </ul>
                </div> */}
            </div>
            <img className="blur_back" src={imageCoverUrl} alt="" />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        genresData: state.filters
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchGenres: async () => await dispatch(await fetchGenres())
//     }
// }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(FullMovie)

