import React, { Component } from 'react';



import Movies from '../Movies/Movies';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './MainPage.css';

class MainPage extends Component {


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