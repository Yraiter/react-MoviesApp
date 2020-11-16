import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import './movieCard.css';


const movieCard = (props) => (
    <li>
        <Flippy
            flipOnHover={true}     // default false
            flipOnClick={false} // default
            flipDirection="horizontal">

            <FrontSide
                className="">
                <h1>{props.title}</h1>
                {console.log(props)}
            </FrontSide>
            <BackSide
                // className=""
                img={props.img}
                alt="" >
            </BackSide>
        </Flippy >
    </li>

);

export default movieCard;
