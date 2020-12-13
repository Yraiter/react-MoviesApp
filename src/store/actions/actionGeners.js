import { GET_GENERS, GENERS_ERROR } from '../types' //need to add GET_SPECIFIC_GENER
import axios from 'axios'


export const getGeners = () => async dispatch => {
    await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ab2fefad2fb133b8288873e93a86f02e&language=en-US`)
        .then((response) => {
            const options = response.data.genres.map(genre => {
                return { id: genre.id, name: genre.name }
            })
            console.log("dispatch")
            console.log(dispatch)
            dispatch({
                type: GET_GENERS,
                payload: options
            })
        })
        .catch(error => dispatch({
            type: GENERS_ERROR,
            payload: console.log(error),
        }))
}


// export function getGeners() {
//     return function (dispatch) {
//         console.log("GET_GENERS")
//         return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ab2fefad2fb133b8288873e93a86f02e&language=en-US`)
//             .then(({ data }) => {
//                 dispatch({
//                     type: GET_GENERS,
//                     payload: data.data
//                 });
//             })
//             .catch(error => dispatch({
//                 type: GENERS_ERROR,
//                 payload: console.log(error)
//             }))
//     }
// }

