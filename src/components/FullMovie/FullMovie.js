import React, { useEffect } from 'react';

import './FullMovie.css';

const FullMovie = (props) => {


    const imageUrl = "https://image.tmdb.org/t/p/original" + props.imgCover


    useEffect(() => {
        console.log("UseEffect in full movies")

    }, [])
    // <img src={imageUrl} alt={props.id} />
    return (
        <div className="container">
            <img className="hero" src={imageUrl} alt=""
                style={{
                    height: "50%", width: "100%", transform: "skewY(-2.2deg)", "transform-origin": "0 0"
                }} />
            <div className="details">
                <div className="title1">{props.title} <span>PG-13</span></div>

            </div>
        </div >
    );
}

export default FullMovie