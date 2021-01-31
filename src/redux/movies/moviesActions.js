import axios from 'axios'
import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    SET_SEARCH_TERM
} from './moviesTypes'

const featchMoviesAjax = (dispatch) => {
    axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=ab2fefad2fb133b8288873e93a86f02e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(response => {
                const moviesRes = response.data.results;
                let lowestYear = 2006;
                let tmp;
                moviesRes.filter(m => {
                    if(m.release_date){
                        m["release_year"] = parseInt(m.release_date.split('-')[0]);
                        tmp = parseInt(m.release_year);
                        if (tmp < lowestYear) lowestYear = tmp;
                        return m;
                    }
                });
                dispatch(fetchMoviesSuccess({ movies: moviesRes, lowestYear }))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchMoviesFailure(error.message))
            })
}

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest())
        // console.log("fetch movies from axios and redux")
        featchMoviesAjax(dispatch);
    }
}

export const searchMovies = (query) => {
    return (dispatch) => {
        dispatch(searchMoviesRequest(query))
        // console.log("fetch movies from axios and redux")
        if (query.length > 0) {
            axios
                .get(`https://api.themoviedb.org/3/search/movie?api_key=ab2fefad2fb133b8288873e93a86f02e&query=${query}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
                .then(response => {
                    const moviesRes = response.data.results;
                    let lowestYear = 2006;
                    let tmp;
                    moviesRes.forEach(m => {
                        moviesRes.filter(m => {
                            if(m.release_date){
                                m["release_year"] = parseInt(m.release_date.split('-')[0]);
                                tmp = parseInt(m.release_year);
                                if (tmp < lowestYear) lowestYear = tmp;
                                return m;
                            }
                        });
                    });
                    dispatch(fetchMoviesSuccess({ movies: moviesRes, lowestYear }))
                })
                .catch(error => {
                    // error.message is the error message
                    dispatch(fetchMoviesFailure(error.message))
                })
        } else {
            featchMoviesAjax(dispatch);
        }
    }
}

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

export const fetchMoviesSuccess = data => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: data
    }
}

export const fetchMoviesFailure = error => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error
    }
}

export const searchMoviesRequest = search_term => {
    return {
        type: SET_SEARCH_TERM,
        search_term
    }
}

// export const searchMoviesSuccess = data => {
//     return {
//         type: SEARCH_MOVIES_SUCCESS,
//         payload: data
//     }
// }

// export const searchMoviesFailure = error => {
//     return {
//         type: SEARCH_MOVIES_FAILURE,
//         payload: error
//     }
// }