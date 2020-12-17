import { combineReducers } from 'redux'

import genersReducer from './geners/genersReducer'
import moviesReducer from './movies/moviesReducer'

const rootReducer = combineReducers({
    geners: genersReducer,
    movies: moviesReducer
})

export default rootReducer