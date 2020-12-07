import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Multiselect } from 'multiselect-react-dropdown';
import './Sidebar.css'

const Sidebar = () => {
    const [genre, setgenre] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ab2fefad2fb133b8288873e93a86f02e&language=en-US`)
            .then((response) => {
                const options = response.data.genres.map(genre => {
                    return { id: genre.id, name: genre.name }
                })
                console.log(options)
                setgenre(options)
            })
            .catch((error) => console.log("this is an " + error))
        console.log("Sidebar useEffect")

    }, [])
    // console.log(Object.keys(genre).map((key, genreIndex) => { return genre[genreIndex].value }))


    return (
        <div className="sidebar">
            <Multiselect
                options={genre}// Options to display in the dropdown
                displayValue="name" // Property name to display in the dropdown options
            // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            // onSelect={this.onSelect} // Function will trigger on select event
            // onRemove={this.onRemove} // Function will trigger on remove event
            />
        </div>

    )
}

export default Sidebar
