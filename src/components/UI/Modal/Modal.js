import React from 'react';


import "./Modal.css";
import Backdrop from '../BackDrop/Backdrop';

const modal = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.ShowHideBackD} />
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </React.Fragment>
    )
}


export default modal;