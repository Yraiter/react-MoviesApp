import axios from 'axios'
import {
    FETCH_GENRES_REQUEST,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
    GET_QUALITIES
} from './filtersTypes'

export const fetchGenres = () => {
    return (dispatch) => {
        dispatch(fetchGenresRequest())
        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ab2fefad2fb133b8288873e93a86f02e&language=en-US`)
            .then(response => {
                // const options = response.data.genres.map(genre => {
                //     return { id: genre.id, name: genre.name }
                // })
                dispatch(fetchGenresSuccess(response.data.genres));
                // console.log(response.data.genres[0]);
                // setTimeout(() => {
                //       dispatch({
                //           type: 'SET_GENRE',
                //           genre: response.data.genres[0].id
                //         });
                // }, 500);
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchGenresFailure(error.message))
            })
    }
}

export const fetchQualities = () => {
    return (dispatch) => {
        const qualityList = [
            {id:1, name:"1024HD"}
        ];
        dispatch(fetchQualitiesSuccess(qualityList))

        // setTimeout(() => {
        //     dispatch({
        //         type: 'SET_QUALITY',
        //         quality: qualityList[0].id
        //       });
        // }, 500);
    }
}

export const fetchGenresRequest = () => {
    return {
        type: FETCH_GENRES_REQUEST
    }
}

export const fetchGenresSuccess = genres => {
    return {
        type: FETCH_GENRES_SUCCESS,
        payload: genres
    }
}

export const fetchGenresFailure = error => {
    return {
        type: FETCH_GENRES_FAILURE,
        payload: error
    }
}

export const fetchQualitiesSuccess = qualities => {
    return {
        type: GET_QUALITIES,
        payload: qualities
    }
}