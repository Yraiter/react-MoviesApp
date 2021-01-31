import React, { useState, useEffect } from 'react'
import Item from './filterItem/filterItem'
import { connect } from 'react-redux'
import './mainFilter.scss';

const Filter = ({selectedGenre, selectedQuality, selectedRating, selectedReleaseYear}) => {

    const [generMenuClass, setGenerMenuCls] = useState(["filter__item-btn", false])
    const [qualityMenuClass, setQualityMenuCls] = useState(["filter__item-btn", false])
    const [ratingMenuClass, setRatingMenuCls] = useState(["filter__item-btn", false])
    const [realeseMenuClass, setRealeseMenuCls] = useState(["filter__item-btn", false])
    const [isOpenNow, setIsOpenNow] = useState(0);

    //?: this funcion control the menu open and close functionality
    const menuHandler = (menuFlag) => {
        // console.log(menuFlag)
        if (menuFlag === 1) {
            if (isOpenNow !== 1) {
                setGenerMenuCls(["filter__item-btn true", true])
                setIsOpenNow(1)
            }
            else {
                setGenerMenuCls(["filter__item-btn", false])
                setIsOpenNow(0)

            }
            setQualityMenuCls(["filter__item-btn", false])
            setRatingMenuCls(["filter__item-btn", false])
            setRealeseMenuCls(["filter__item-btn", false])
        }
        else if (menuFlag === 2) {
            if (isOpenNow !== 2) {
                setQualityMenuCls(["filter__item-btn true", true])
                setIsOpenNow(2)
            }
            else {
                setQualityMenuCls(["filter__item-btn", false])
                setIsOpenNow(0)

            }

            setGenerMenuCls(["filter__item-btn", false])
            setRatingMenuCls(["filter__item-btn", false])
            setRealeseMenuCls(["filter__item-btn", false])
        }
        else if (menuFlag === 3) {
            if (isOpenNow !== 3) {
                setRatingMenuCls(["filter__item-btn true", true])
                setIsOpenNow(3)
            }
            else {
                setRatingMenuCls(["filter__item-btn", false])
                setIsOpenNow(0)

            }

            setGenerMenuCls(["filter__item-btn", false])
            setQualityMenuCls(["filter__item-btn", false])
            setRealeseMenuCls(["filter__item-btn", false])
        }
        else {
            if (isOpenNow !== 4) {
                setRealeseMenuCls(["filter__item-btn true", true])
                setIsOpenNow(4)

            }
            else {
                setRealeseMenuCls(["filter__item-btn", false])
                setIsOpenNow(0)

            }

            setGenerMenuCls(["filter__item-btn", false])
            setQualityMenuCls(["filter__item-btn", false])
            setRatingMenuCls(["filter__item-btn", false])
        }
    }

    useEffect(() => {
        return function cleanup() {
            console.log("cleNuP")
        }
    }, [])

    /*
        *Item: recives:
        label: Name of Item 
        Handler: function that activate-diactivate the popup menu item
        MenuFlag: name of atributs in Item 
        TODO: ->  Info: can be a input range values or dropdown items 
    */
//    console.log({selectedGenre});
    return (
        <div className="mainFilteContainer">
            <div className="filter__content">
                <div className="filter__items">
                    <Item filter="genre" label="GENRE" selectedGenre={selectedGenre} menuHandlerOpen={() => menuHandler(1)} menuOpenFlag={generMenuClass} />
                    <Item filter="quality" label="QUALITY" selectedQuality={selectedQuality} menuHandlerOpen={() => menuHandler(2)} menuOpenFlag={qualityMenuClass} />
                    <Item filter="rating" label="RATING" selectedRating={selectedRating} menuHandlerOpen={() => menuHandler(3)} menuOpenFlag={ratingMenuClass} />
                    <Item filter="release_year" label="RELEASE YEAR" selectedReleaseYear={selectedReleaseYear} menuHandlerOpen={() => menuHandler(4)} menuOpenFlag={realeseMenuClass} />
                </div>
                <button className="apply_filter__btn">apply filter</button>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    // console.log({ Filterstate: state });
    return {
        selectedGenre: state.movies.genre,
        selectedQuality: state.movies.quality,
        selectedRating: state.movies.rating,
        selectedReleaseYear: state.movies.release_year,
    }
}

export default connect(
    mapStateToProps
)(Filter)

