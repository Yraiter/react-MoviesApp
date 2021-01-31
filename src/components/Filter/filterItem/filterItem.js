import React from 'react'
import FilterButton from '../filterButton/filterButton';
import ItemManger from './ItemManger/itemManger'
import Dropdown from './Dropdown/dropdown'
import InputRange from './InputRange/inputRange'
import './filterItem.scss'


const FilterItem = ({ menuHandlerOpen, selectedGenre, selectedQuality, selectedRating, selectedReleaseYear, filter, menuOpenFlag, label, toggle }) => {

    /*
    TODO: DropDown should receive another props: range or dropdown option 
    ? -> range: create rage component -> dropdown: create item dropdown coponnt
    */
    //TODO: Name this component

    return (
        <div className="filter__item">
            <span className="filter__item-label">{label}</span>
            <div className="filter__item-btn filter-toggle">
                {filter === "genre" &&
                    <ItemManger className="filter__item-btn " label={selectedGenre ? selectedGenre.name : "Select"} toggleDropdown={menuHandlerOpen} toggled={menuOpenFlag[1]}>
                        <Dropdown filter={filter} />
                    </ItemManger>
                }
                {filter === "quality" &&
                    <ItemManger className="filter__item-btn " label={selectedQuality ? selectedQuality.name : "Select"} toggleDropdown={menuHandlerOpen} toggled={menuOpenFlag[1]}>
                        <Dropdown filter={filter} />
                    </ItemManger>
                }
                {filter === "rating" &&
                    <ItemManger className="filter__item-btn " label={selectedRating ? `${Math.round(selectedRating.min * 10) / 10}-${Math.round(selectedRating.max * 10) / 10}`: "Select"} toggleDropdown={menuHandlerOpen} toggled={menuOpenFlag[1]}>
                        <InputRange filter={filter} toggled={menuOpenFlag[1]} />
                    </ItemManger>
                }
                {filter === "release_year" &&
                    <ItemManger className="filter__item-btn " label={selectedReleaseYear ? `${selectedReleaseYear.min}-${selectedReleaseYear.max}`: "Select"} toggleDropdown={menuHandlerOpen} toggled={menuOpenFlag[1]}>
                        <InputRange filter={filter} toggled={menuOpenFlag[1]} />
                    </ItemManger>
                }
                <FilterButton menuHandlerOpen={menuHandlerOpen} menuOpenFlag={menuOpenFlag[0]} />

            </div>

        </div>
    )
}

export default FilterItem
