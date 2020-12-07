// Header.js

import React from "react";
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import "./Header.css";

const Header = () => {
    return (
        <>
            <nav className="Nav">
                <Link to='/'></Link>
                <FaBars className="FaBars" />
                <div className='NavMenu'>
                    <Link className="NavLink"
                        to='/about'
                    >
                        About
                    </Link>
                    <Link className="NavLink"
                        to='/services'
                    >
                        Services
                    </Link>
                    <Link className="NavLink"
                        to='/contact-us'
                    >
                        Contact Us
                    </Link>
                    <Link className="NavLink"
                        to='/sign-up'
                    >
                        Sign Up
                    </Link>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </div>
                <nav className='NavBtn'>
                    <Link className="NavBtnLink" to='/signin'> Sign In</Link>
                </nav>
            </nav>
        </>
    )
};

export default Header;
