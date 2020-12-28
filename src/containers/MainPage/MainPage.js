import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, } from 'react-router-dom'; //Route
import Movies from '../../components/Movies/Movies';
import Sidebar from '../Sidebar/Sidebar';
import Filter from '../../components/Filter/mainFilter';
// import Header from '../Header/Header';

import './MainPage.css';

function MainPage() {
    const [filterbar, setFilterbar] = useState("filterbar");
    const [content, setContent] = useState("content");

    const [toggleFlag, settoggleFlag] = useState(true);

    let setToggle = () => {
        if (toggleFlag === true) {
            setFilterbar("filterbar collapse")
            setContent("content content-expand")
            settoggleFlag(false)
        }
        else {
            setFilterbar("filterbar")
            setContent("content")
            settoggleFlag(true)
        }
    }

    useEffect(() => {
        console.log("UseEffect")
    }, [])



    //     <>
    //     <Router>
    //         <Header />
    //         <Switch>

    //         </Switch>
    //     </Router>
    //     <section className="main">
    //         <div className="header">
    //         </div>
    //         <div id="content">
    //             <div className="mianContent">
    //                 <Movies />
    //             </div>
    //         </div>
    //         <div id="footer2">&copy; 2020 YairRaiter. All rights reserved.</div>
    //     </section>
    // </>

    return (
        <div className="mainContainer">
            <div className="header">Header</div>
            <div className={filterbar}>
                <Filter />
            </div>
            <div className={content}>
                <Movies />
            </div>
            <div className="sidebar">Sidebar
            <button
                    type="button"
                    onClick={setToggle}>
                    toggle
                </button>
            </div>
            <Sidebar />
        </div>
    );
}

export default MainPage;






