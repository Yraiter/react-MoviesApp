import React, { Component } from 'react';


import FullMovie from '../../components/FullMovie/FullMovie';
import NewMovie from '../../components/NewMovie/NewMovie';
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
                <section>
                    <FullMovie />
                </section>
                <section>
                    <NewMovie />
                </section>
            </div>
        );
    }
}

export default MainPage;