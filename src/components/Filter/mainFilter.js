import React, { useState, useEffect } from 'react'
import Item from './filterItem/filterItem'
import './mainFilter.css';

const Filter = (ptops) => {

    const [generMenuClass, setgenerMenuCls] = useState(["filter__item-btn", false])
    const [raitingMenuClass, setRaitingMenuCls] = useState(["filter__item-btn", false])
    const [realeseMenuClass, setRealeseMenuCls] = useState(["filter__item-btn", false])
    const [isOpenNow, setIsOpenNow] = useState(0);

    //?: this funcion constrol the menu open and close functionality
    const menuHandler = (menuFlag) => {
        console.log(menuFlag)
        if (menuFlag === 1) {
            if (isOpenNow !== 1) {
                setgenerMenuCls(["filter__item-btn true", true])
                setIsOpenNow(1)
            }
            else {
                setgenerMenuCls(["filter__item-btn", false])
                setIsOpenNow(0)

            }
            setRaitingMenuCls(["filter__item-btn", false])
            setRealeseMenuCls(["filter__item-btn", false])
        }
        else if (menuFlag === 2) {
            if (isOpenNow !== 2) {
                setRaitingMenuCls(["filter__item-btn true", true])
                setIsOpenNow(2)
            }
            else {
                setRaitingMenuCls(["filter__item-btn", false])
                setIsOpenNow(0)

            }

            setgenerMenuCls(["filter__item-btn", false])
            setRealeseMenuCls(["filter__item-btn", false])
        }
        else {
            if (isOpenNow !== 3) {
                setRealeseMenuCls(["filter__item-btn true", true])
                setIsOpenNow(3)

            }
            else {
                setRealeseMenuCls(["filter__item-btn", false])
                setIsOpenNow(0)

            }

            setgenerMenuCls(["filter__item-btn", false])
            setRaitingMenuCls(["filter__item-btn", false])
        }
    }

    useEffect(() => {
        console.log("useEffect")
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
    return (
        <div className="mainFilteContainer">
            <div className="filter__content">
                <div className="filter__items">
                    <Item label="GENRE" menuHandlerOpen={() => menuHandler(1)} menuOpenFlag={generMenuClass} />
                    <Item label="RAITING" menuHandlerOpen={() => menuHandler(2)} menuOpenFlag={raitingMenuClass} />
                    <Item label="RELEASE YEAR" menuHandlerOpen={() => menuHandler(3)} menuOpenFlag={realeseMenuClass} />
                </div>
                <button className="apply_filter__btn">apply filter</button>
            </div>
        </div>

    )
}

export default Filter

