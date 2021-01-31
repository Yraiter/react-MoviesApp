import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { searchMovies } from '../../redux'


import './Header.scss';

const Header = ({search_term, changeSearchTerm}) => {
    const [openDrawer, toggleDrawer] = useState(false);
    const [openSearch, toggleSearch] = useState(false);
    const [searchTerm, setSearchTerm] = React.useState(search_term);
    const drawerRef = useRef(null);

    useEffect(() => {
        const closeDrawer = event => {
            if (drawerRef.current && drawerRef.current.contains(event.target)) {
                return;
            }

            toggleDrawer(false);
        };

        document.addEventListener("mousedown", closeDrawer);
        return () => document.removeEventListener("mousedown", closeDrawer);
    }, []);
    useEffect(() => {
        setSearchTerm(search_term);
    }, [search_term])

    // const onSearchChange = e => {
    //     setSearchTerm(e.target.value);
    //   };

    const handleSearch = e => {
        changeSearchTerm(e.target.value);
      };

    return (
        <>
            <div className={`navWrapper ${openDrawer ? "drawerOpen" : ""} ${openSearch ? "searchOpen" : ""}`}>
                <nav role="navigation">
                    {!openSearch && <div className="logo">Logo</div>}

                    <ul className={`nav-items left`} >
                        <li className="nav-item"><a href="#">HOME</a></li>
                        <li className="nav-item"><a href="#">CATELOG</a></li>
                        <li className="nav-item"><a href="#">PRICING PLAN</a></li>
                        <li className="nav-item"><a href="#">HELP</a></li>
                        <li className="nav-item">
                            <a href="#" aria-haspopup="true">...</a>
                            <ul className="dropdown" aria-label="submenu">
                                <li><a href="#">Sub-1</a></li>
                                <li><a href="#">Sub-2</a></li>
                                <li><a href="#">Sub-3</a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="nav-items right" >
                        <li className="nav-item">
                            <div className="searchWrapper">
                                <span className="searchIcon"><FontAwesomeIcon icon={faSearch} /></span>
                                <input placeholder="search..." value={searchTerm} onChange={handleSearch} className="searchInput" type="text" />
                            </div>
                            <div className="searchWrapper_M">
                                <span className="searchIcon" onClick={() => toggleSearch(true)}><FontAwesomeIcon icon={faSearch} /></span>
                                {openSearch && <input placeholder="search..." value={searchTerm}  onChange={handleSearch} className="searchInput" type="text" />}
                            </div>
                        </li>
                        {!openSearch &&
                            <li className="nav-item">
                                <button className="btn loginBtn"><span className="loginBtnText">LOGIN</span><FontAwesomeIcon className="loginIcon_M" icon={faSignInAlt} /></button>
                            </li>
                        }
                    </ul>
                    {!openSearch &&
                        <button className="hamburgerButton" onClick={() => toggleDrawer(true)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    }
                    {openDrawer &&
                        <button className="closeDrawer_M" onClick={() => toggleDrawer(false)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    }
                    {openSearch && <span className="closeSearchIcon_M" onClick={() => toggleSearch(false)}><FontAwesomeIcon icon={faTimes} /></span>}
                </nav>
            </div>
            <div id="menuDrawer_M">
                {openDrawer &&
                    <ul className={`nav-items drawer ${openDrawer ? "open" : ""}`} ref={drawerRef} >
                        <li className="nav-item"><a href="#">HOME</a></li>
                        <li className="nav-item"><a href="#">CATELOG</a></li>
                        <li className="nav-item"><a href="#">PRICING PLAN</a></li>
                        <li className="nav-item"><a href="#">HELP</a></li>
                        <li className="nav-item">
                            <a href="#" aria-haspopup="true">...</a>
                            <ul className="dropdown" aria-label="submenu">
                                <li><a href="#">Sub-1</a></li>
                                <li><a href="#">Sub-2</a></li>
                                <li><a href="#">Sub-3</a></li>
                            </ul>
                        </li>
                    </ul>
                }
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        search_term: state.movies.search_term,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // changeSearchTerm(search_term) {
        //     dispatch({
        //         type: 'SET_SEARCH_TERM',
        //         search_term
        //     });
        // }
        changeSearchTerm: async (search_term) => dispatch(await searchMovies(search_term))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
