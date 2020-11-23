import React, { useEffect, useState } from 'react'
import Select from 'react-select'
// // import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';
import axios from 'axios'

import './Sidebar.css'

const Sidebar = () => {
    const newLocal = makeAnimated();
    const [genre, setgenre] = useState()
    const animatedComponents = newLocal;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ab2fefad2fb133b8288873e93a86f02e&language=en-US`)
            .then((response) => {
                const options = response.data.genres.map(genre => {
                    return { key: genre.id, value: genre.name, label: genre.name }
                })
                setgenre(options)
                console.log(genre)
            })
            .catch((error) => console.log("this is an " + error))
        console.log("Sidebar useEffect")

    }, [])

    return (
        <div className="sidebar">
            <Select
                isMulti
                options={genre}
                components={animatedComponents}
            />
        </div>

    )
}

export default Sidebar
