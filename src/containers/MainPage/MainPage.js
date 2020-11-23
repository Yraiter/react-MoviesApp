// import React, { Component } from 'react';


import React, { useEffect, useState } from 'react'
import Movies from '../Movies/Movies';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './MainPage.css';
import axios from 'axios'
class MainPage extends React.Component {


    render() {
        return (
            <>
                <section>
                    <Header />
                </section>
                <section className="main">
                    <Sidebar />
                    <Movies />
                </section>
            </>
        );
    }
}

export default MainPage;





// function MainPage() {

//     const [optionsGeners, setOptionGenre] = useState()
//     useEffect(() => {
//         axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
//             .then((response) => {
//                 const options = response.data.genres.map(genre => {
//                     return { key: genre.id, value: genre.name, label: genre.name }
//                 })
//                 setOptionGenre(options)
//             })
//             .catch((error) => console.log("this is an " + error))
//         console.log("Sidebar useEffect")
//     }, [])

//     return (
//         <>
//             <section>
//                 <Header />
//             </section>
//             <section className="main">
//                 <Sidebar options={optionsGeners} />
//                 <Movies />
//             </section>
//         </>
//     );
// }

// export default MainPage
