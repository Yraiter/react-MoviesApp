// import React, { Component } from 'react';
import React from 'react'
import { BrowserRouter as Router, Switch, } from 'react-router-dom'; //Route

import Movies from '../Movies/Movies';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

import './MainPage.css';

class MainPage extends React.Component {


    render() {

        return (
            <>
                <Router>
                    <Header />
                    <Switch>

                    </Switch>
                </Router>
                <section className="main">
                    <div id="header">
                        <h3>Studytonight.com</h3>
                    </div>
                    <Sidebar className="sidebar" />
                    <div id="content">
                        <Movies />
                    </div>
                    <div id="footer">&copy; 2017 Studytonight. All rights reserved.</div>
                </section>
            </>
        )
    }
}
export default (MainPage)



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
