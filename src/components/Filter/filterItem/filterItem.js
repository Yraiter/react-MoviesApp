import React from 'react'
import FilterButton from '../filterButton/filterButton';
import ItemManger from './ItemManger/itemManger'
// import DropdownItem from '../../Dropdown/DropdownItem/dropdownItem'
import InputRange from './InputRange/inputRange'
import './filterItem.css'


const FilterItem = ({ menuHandlerOpen, menuOpenFlag, label, toggle }) => {

    /*
    TODO: DropDown should receive another props: range or dropdown option 
    ? -> range: create rage component -> dropdown: create item dropdown coponnt
    */
    //TODO: Name this component


    return (
        <div className="filter__item">
            <span className="filter__item-label">{label}</span>
            <div className="filter__item-btn filter-toggle">
                <ItemManger className="filter__item-btn " label="filter Label" toggleDropdown={menuHandlerOpen} toggled={menuOpenFlag[1]}>
                    {/* <DropdownItem label="Choice 1" value="Number 1" />
                    <DropdownItem label="Choice 2" value="2" />
                    <DropdownItem label="Choice 3" value="3" />
                    <DropdownItem label="Choice 4" value="4" />
                    <DropdownItem label="Choice 5" value="5" />
                    <DropdownItem label="Choice 6" value="6" />
                    <DropdownItem label="Choice 7" value="7" />
                    <DropdownItem label="Choice 8" value="8" /> */}
                    <InputRange toggled={menuOpenFlag[1]} />
                </ItemManger>
                <FilterButton menuHandlerOpen={menuHandlerOpen} menuOpenFlag={menuOpenFlag[0]} />

            </div>

        </div>
    )
}

export default FilterItem
