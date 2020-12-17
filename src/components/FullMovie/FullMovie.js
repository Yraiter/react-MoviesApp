import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import ReadMore from 'read-more-react';

import './FullMovie.css';

const FullMovie = (props) => {

    const imageCoverUrl = "https://image.tmdb.org/t/p/original" + props.movieInfo.backdrop_path
    const imagePosterUrl = "https://image.tmdb.org/t/p/w342/" + props.movieInfo.poster_path;
    const year = props.movieInfo.release_date.split("-")[0]
    const genres = props.movieInfo.genre_ids
    const overview = props.movieInfo.overview

    useEffect(() => {
        console.log("UseEffect in full movies")
    }, [])

    let genresList = genres.map(generID => {
        let res = props.genersData.geners.find(gener => {
            // eslint-disable-next-line eqeqeq
            if (gener.id == generID) {
                return gener.name
            }
            else return null
        })
        // console.log(res)
        return res.name
    })

    console.log(genresList)
    let generToShow = genresList.join(', ')


    // TODO: Need to divide to components 
    return (
        <div className="container">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={imagePosterUrl} alt=" " />
                    <h1>{props.movieInfo.title}</h1>
                    <h4>{year}, David Ayer</h4>
                    <p className="type">{generToShow}</p>
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
        genersData: state.geners
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchGeners: async () => await dispatch(await fetchGeners())
//     }
// }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(FullMovie)

