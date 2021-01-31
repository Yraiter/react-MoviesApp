import React from 'react'
import './filterButton.scss'

const FilterButton = (props) => {
    return (
        <div className={props.menuOpenFlag} onClick={props.menuHandlerOpen}>
            <span className="span"></span>
        </div>
    )
}

export default FilterButton