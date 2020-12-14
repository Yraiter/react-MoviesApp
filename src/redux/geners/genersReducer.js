import {
    FETCH_GENERS_REQUEST,
    FETCH_GENERS_SUCCESS,
    FETCH_GENERS_FAILURE
} from './genersTypes'

const initialState = {
    loading: false,
    geners: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GENERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_GENERS_SUCCESS:
            return {
                loading: false,
                geners: action.payload,
                error: ''
            }
        case FETCH_GENERS_FAILURE:
            return {
                loading: false,
                geners: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer