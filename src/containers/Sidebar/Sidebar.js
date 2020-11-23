import React from 'react'
import Select from 'react-select'
// // import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';
// import axios from 'axios'

import './Sidebar.css'

const Sidebar = (props) => {
    // const [genre, setgenre] = useState()
    const animatedComponents = makeAnimated();
    // const selectRef = useRef()
    // useEffect(() => {
    //     axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
    //         .then((response) => {
    //             const options = response.data.genres.map(genre => {
    //                 return { key: genre.id, value: genre.name, label: genre.name }
    //             })
    //             setgenre(options)
    //         })
    //         .catch((error) => console.log("this is an " + error))
    //     console.log("Sidebar useEffect")
    //     return () => {
    //         selectRef()
    //     }
    // }, [])

    return (
        <div className="sidebar">
            <Select
                isMulti
                options={props.options}
                components={animatedComponents}
            />
        </div>

    )
}

export default Sidebar
