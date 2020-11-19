import React from 'react';

import './FullMovie.css';

const FullMovie = () => {
    let post = <p>Please select a Post!</p>;

    post = (
        <div className="">
            <h1>Title</h1>
            <p>Content</p>
            <div className="">
                <button className="">Delete</button>
            </div>
        </div>
    );

    return post;
}

export default FullMovie