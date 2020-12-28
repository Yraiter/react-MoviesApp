import React from 'react'
import './ItemMenu.css'


const DropdownMenu = (props) => {
    // console.log(props.children[0].props.typeName)

    let className = "ItemMenu-select";
    if (props.toggled) {
        if (props.children[0].props.typeName === 'DropdownItem')
            className += " open-dropdown";
        else className += " open-range";
    }

    return (
        <ul className={className}>
            {props.children}
        </ul>
    )
}

export default DropdownMenu
