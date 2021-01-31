import React from 'react'
import './dropdownItem.scss'

const DropdownItem = (props) => {
    // console.log("DropdownItem props", props.value)
    return (
        <li
            className="dropdown-option"
            onClick={() => props.onDropDownItemClick(props.value)}>
            { props.label}
        </li >
    );
}

export default DropdownItem
