import React, { useEffect } from 'react'//{/*useState*/ }
import { Multiselect } from 'multiselect-react-dropdown';
import { connect } from 'react-redux'
import { fetchGenres } from '../../redux'


// import './Sidebar.scss'

const Sidebar = ({ genresData, fetchGenres }) => {

    useEffect(() => {
        fetchGenres()
    }, [fetchGenres])

    return (
        <div className="sidebar">
            {/* {sidebar} */}
            <Multiselect
                options={genresData}// Options to display in the dropdown
                displayValue="name" // Property name to display in the dropdown options
            // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            // onSelect={this.onSelect} // Function will trigger on select event
            // onRemove={this.onRemove} // Function will trigger on remove event
            />
        </div>

    )
}


const mapStateToProps = state => {
    return {
        genresData: state.filters.genres
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGenres: async () => await dispatch(await fetchGenres())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)




