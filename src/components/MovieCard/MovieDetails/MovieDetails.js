import React from 'react'

import './MovieDetails.css'

const movieDetail = (props) => (
    <div className="card-stats">
        <div className="stat">
            <div className="value">4<sup>m</sup></div>
            <div className="type">read</div>
        </div>
        <div className="stat border">
            <div className="value">5123</div>
            <div className="type">views</div>
        </div>
        <div className="stat">
            <div className="value">32</div>
            <div className="type">comments</div>
        </div>
    </div>
)

export default movieDetail