import React from 'react';

import "./Modal.css";
import Backdrop from '../BackDrop/Backdrop';
import FullMovie from '../../FullMovie/FullMovie';

const modal = (props) => {
    // console.log(props.fullMovie)
    console.log("This is the modal")
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.ShowHideHandler} />
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <FullMovie title={props.title} imgCover={props.imgCover} />
            </div>

        </React.Fragment>
    )
}


export default modal;