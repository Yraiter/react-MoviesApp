import React from 'react';

import "./Backdrop.css";

const backdrop = (props) => {

    console.log("this is a backdrop")
    console.log(props)
    return (props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null)

};

export default backdrop;