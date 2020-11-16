import React, { Component } from 'react';

import './FullMovie.css';

class FullMovie extends Component {
    render() {
        let post = <p>Please select a Post!</p>;
        post = (
            <div className="FullMovie">
                <h1>Title</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default FullMovie;