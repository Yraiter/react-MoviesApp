import React, { Component } from 'react';


import Movies from '../Movies/Movies';
import './MainPage.css';

class MainPage extends Component {


    componentDidMount() {

    }


    render() {

        return (
            <div>
                <section className="Movies">
                    <Movies />
                </section>
            </div>
        );
    }
}

export default MainPage;