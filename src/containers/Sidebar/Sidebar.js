import React, { useState, useEffect, useRef } from 'react'
import Select from 'react-select'
// // import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';
import axios from 'axios'

import './Sidebar.css'

const Sidebar = () => {
    const [genre, setgenre] = useState()
    const animatedComponents = makeAnimated();
    const selectRef = useRef()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
            .then((response) => {
                const options = response.data.genres.map(genre => {
                    return { key: genre.id, value: genre.name, label: genre.name }
                })
                setgenre(options)
            })
            .catch((error) => console.log("this is an " + error))
        console.log("Sidebar useEffect")
        return () => {
            selectRef()
        }
    }, [])



    return (
        <section className="sidebar">
            <Select
                isMulti
                options={genre}
                components={animatedComponents}
                ref={selectRef}
            />
        </section>
    )
}

export default Sidebar


// class Sidebar extends React.Component {
//     state = {
//         genre: []
//     }

//     componentDidMount() {
//         axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
//             .then((response) => {
//                 const options = response.data.genres.map(genre => {
//                     return { key: genre.id, value: genre.name, label: genre.name }
//                 })
//                 this.setState({ genre: options })
//             })
//             .catch((error) => console.log("this is an " + error))
//         console.log("Sidebar useEffect")
//     }

//     render() {
//         return (
//             <section className="sidebar">
//                 <Select
//                     isMulti
//                     options={this.state.genre}
//                 // components={animatedComponents}
//                 // ref={selectRef}
//                 />
//             </section>
//         )
//     }

// }
// export default Sidebar