import React from 'react';
import Backdrop from '../BackDrop/Backdrop';
import FullMovie from '../../Movies/FullMovie/FullMovie';
import "./Modal.scss";

const Modal = (props) => {
    // console.log(props.fullMovie)
    console.log("This is the Modal");

    const handleChildClick = (e) => {
        e.stopPropagation();
        console.log('child');
    }

    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.ShowHideHandler} />
            {/* <div
                className="Modal show"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <FullMovie movieInfo={props.movieInfo} imgCover={props.imgCover} />
            </div> */}

            <div className="Modal show" onClick={props.ShowHideHandler} style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }} id="movieModal" tabIndex="-1" aria-hidden="true">
                <div className="Modal-dialog Modal-lg Modal-dialog-centered" onClick={handleChildClick}>
                    <div className="Modal-content">
                        <div className="Modal-body">
                            <FullMovie movieInfo={props.movieInfo} imgCover={props.imgCover} ShowHideHandler={props.ShowHideHandler} />
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}


export default Modal;