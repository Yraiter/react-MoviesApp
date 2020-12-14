import axios from 'axios'
import {
    FETCH_GENERS_REQUEST,
    FETCH_GENERS_SUCCESS,
    FETCH_GENERS_FAILURE
} from './genersTypes'

export const fetchGeners = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ab2fefad2fb133b8288873e93a86f02e&language=en-US`)
            .then(response => {
                const options = response.data.genres.map(genre => {
                    return { id: genre.id, name: genre.name }
                })
                dispatch(fetchUsersSuccess(options))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_GENERS_REQUEST
    }
}

export const fetchUsersSuccess = geners => {
    return {
        type: FETCH_GENERS_SUCCESS,
        payload: geners
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_GENERS_FAILURE,
        payload: error
    }
}