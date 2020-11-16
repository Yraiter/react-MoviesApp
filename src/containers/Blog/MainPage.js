import React, { Component } from 'react';

import Post from '../../components/Movie/Post';
import FullPost from '../../components/FullMovie/FullPost';
import NewPost from '../../components/NewMovie/NewPost';
import './Blog.css';

class MainPage extends Component {
    render() {
        return (
            <div>
                <section className="Movies">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default MainPage;