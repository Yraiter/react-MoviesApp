import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    SET_GENRE,
    SET_QUALITY,
    SET_RATING,
    SET_RELEASE_YEAR,
    SET_SEARCH_TERM
} from './moviesTypes'

const initialState = {
    loading: true,
    movies: [],
    genre: '',
    quality: '',
    search_term: '',
    rating: {min: 1, max: 10},
    release_year: {min: 2007, max: 2021},
    release_year_range: {min: 2007, max: 2021}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            // console.log("payload: ", action.payload);
            initialState.movies = action.payload.movies;
            initialState.release_year_range = {min: action.payload.lowestYear, max: state.release_year_range.max};
            initialState.release_year = {min: action.payload.lowestYear, max: state.release_year.max};
            return {
                loading: false,
                movies: action.payload.movies,
                release_year_range: initialState.release_year_range,
                release_year: initialState.release_year,
                genre: state.genre,
                quality: state.quality,
                rating: state.rating,
                search_term: state.search_term,
                error: ''
            }
        case FETCH_MOVIES_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload
            }
        case SET_GENRE:
            // console.log({initialState});
            return {
                ...state,
                genre: action.genre,
            }
        case SET_QUALITY:
            return {
                ...state,
                quality: action.quality,
            }
        case SET_RATING:
            return {
                ...state,
                rating: action.rating,
            }
        case SET_RELEASE_YEAR:
            return {
                ...state,
                release_year: action.release_year,
            }
        case SET_SEARCH_TERM:
            return {
                ...state,
                ...initialState,
                search_term: action.search_term,
            }
        default: return state
    }
}

export default reducer