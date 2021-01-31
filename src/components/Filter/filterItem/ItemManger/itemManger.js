import React, { useState, useEffect } from 'react'
import ItemMenu from './ItemMenu/ItemMenu'
import './itemManger.scss'


const ItemManger = (props) => {
    const [selected, setSelected] = useState('Default')

    function handleClick(value) {
        setSelected(value)
    }

    let className = ""
    if (props.className) {
        className += " " + props.className;
    }

    let dropdown = React.Children.map(
        props.children, (child, index) => {
            let clonedProps = {};
            clonedProps.onClick = handleClick;
            clonedProps.typeName = child.type.name;
            return React.cloneElement(child, clonedProps);
        }
    );

    return (
        <div className={className}
            onClick={props.toggleDropdown}>
            <div className="ItemManger-label">
                {props.label}
            </div>
            <ItemMenu toggled={props.toggled} >
                {dropdown}
            </ItemMenu>
        </div>
    )

}

export default ItemManger
