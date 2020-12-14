import { combineReducers } from 'redux'

import genersReducer from './geners/genersReducer'

const rootReducer = combineReducers({
    geners: genersReducer
})

export default rootReducer