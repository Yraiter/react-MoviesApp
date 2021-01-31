import React from 'react';

import "./Backdrop.scss";

const backdrop = (props) => {

    // console.log(props)
    return (props.show ? <div className="Backdrop Modal-backdrop show" onClick={props.clicked}></div> : null)

};

export default backdrop;