import React, { useEffect } from 'react'//{/*useState*/ }
import { connect } from 'react-redux'
import { fetchGenres, fetchQualities } from '../../../../redux'
import DropdownItem from './dropdownItem'


// import './dropdown.scss''

const Dropdown = ({
    filter,
    selectedGenre,
    selectedQuality,
    genresData,
    qualitiesData,
    fetchGenres,
    fetchQualities,
    onGenreChange,
    onQualityChange
}) => {

    useEffect(() => {
        fetchGenres()
    }, [fetchGenres])

    useEffect(() => {
        fetchQualities()
    }, [fetchQualities])

    // const onDropDownItemClick = (id) => {
    //     onGenreChange(id);
    // }
    if (filter === "genre") {
        return (
            <>
                {genresData.map((genre) => {
                    return <DropdownItem
                        key={genre.id}
                        label={genre.name}
                        value={genre.id}
                        // selected={selectedGenre}
                        onDropDownItemClick={() => onGenreChange(genre)}
                    />
                })}
            </>

        )
    } else if (filter === "quality") {
        return (
            <>
                {qualitiesData.map((item) => {
                    return <DropdownItem
                        key={item.id}
                        label={item.name}
                        value={item.id}
                        selected={selectedQuality}
                        onDropDownItemClick={() => onQualityChange(item)}
                    />
                })}
            </>

        )
    }
}


const mapStateToProps = state => {
    // console.log("dropdown state: ", state);
    return {
        genresData: state.filters.genres,
        qualitiesData: state.filters.qualities,
        selectedGenre: state.movies.genre,
        selectedQuality: state.movies.quality
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGenres: async () => await dispatch(await fetchGenres()),
        fetchQualities: async () => await dispatch(await fetchQualities()),
        onGenreChange(genre) {
            dispatch({
                type: 'SET_GENRE',
                genre
            });
        },
        onQualityChange(quality) {
            dispatch({
                type: 'SET_QUALITY',
                quality
            });
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dropdown)




