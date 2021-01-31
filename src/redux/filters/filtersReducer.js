import {
    FETCH_GENRES_REQUEST,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
    GET_QUALITIES
} from './filtersTypes'

const initialState = {
    loading: false,
    genres: [],
    qualities: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GENRES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_GENRES_SUCCESS:
            return {
                // ...state,
                loading: false,
                genres: action.payload,
                qualities: state.qualities,
                error: ''
            }
        case FETCH_GENRES_FAILURE:
            return {
                loading: false,
                genres: [],
                error: action.payload
            }
        case GET_QUALITIES:
            return {
                ...state,
                loading: false,
                qualities: action.payload,
                error: ''
            }
        default: return state
    }
}

export default reducer