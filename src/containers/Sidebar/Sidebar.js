import React, { useEffect } from 'react'//{/*useState*/ }
import { Multiselect } from 'multiselect-react-dropdown';
import { connect } from 'react-redux'
import { fetchGeners } from '../../redux'


import './Sidebar.css'

const Sidebar = ({ genersData, fetchGeners }) => {



    useEffect(() => {
        fetchGeners()
    }, [fetchGeners])

    return (
        <div className="sidebar">
            {/* {sidebar} */}
            <Multiselect
                options={genersData.geners}// Options to display in the dropdown
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
        genersData: state.geners
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGeners: async () => await dispatch(await fetchGeners())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)




