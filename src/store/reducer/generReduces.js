//action - json
//mandtory - type - the action type
//optinal - payload - data send with the action


import { GET_GENERS } from '../types'

const initialState = {
    geners: [],
    loading: true
}
// console.log("Reducer")
const genresReducer = (state = initialState, action) => {
    console.log(action)
    // console.log(state)
    switch (action.type) {
        case GET_GENERS:
            // console.log(action)
            // console.log(state)
            return {
                ...state,
                geners: action.payload,
                loading: false
            }
        // case 'GET_SPECIFIC_GENER':
        //     return {
        //         ...state,
        //         choosenGeners: action.payload
        //     };
        default:
            return state;
    }
}
export default genresReducer;
