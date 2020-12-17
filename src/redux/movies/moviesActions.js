import axios from 'axios'
import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE
} from './moviesTypes'

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=ab2fefad2fb133b8288873e93a86f02e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(response => {
                const moviesRes = response.data.results
                dispatch(fetchUsersSuccess(moviesRes))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

export const fetchUsersSuccess = movies => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error
    }
}