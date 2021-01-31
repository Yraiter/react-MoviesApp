import { combineReducers } from 'redux'

import filtersReducer from './filters/filtersReducer'
import moviesReducer from './movies/moviesReducer'

const rootReducer = combineReducers({
    filters: filtersReducer,
    movies: moviesReducer
})

export default rootReducer