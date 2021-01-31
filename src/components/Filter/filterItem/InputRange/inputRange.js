import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import 'react-input-range/src/scss/index.scss';
import InputRange from 'react-input-range';

import './inputRange.scss'
const InputRangeMinMax = ({
    filter,
    selectedRating,
    selectedReleaseYear,
    selectedReleaseYearRange,
    onRatingChange,
    onReleaseYearChange
}) => {
    const [rating, setRating] = useState(selectedRating);
    const [releaseYear, setReleaseYear] = useState(selectedReleaseYear);
    const [releaseYearRange, setReleaseYearRange] = useState(selectedReleaseYearRange);
    useEffect(() => {
        setRating(selectedRating);
    }, [selectedRating])
    useEffect(() => {
        setReleaseYear(selectedReleaseYear);
    }, [selectedReleaseYear])
    useEffect(() => {
        setReleaseYearRange(selectedReleaseYearRange);
    }, [selectedReleaseYearRange])


    if (filter === "rating") {

        let range = {
            label: "rating",
            min: 1.0,
            max: 10,
            step: 0.1,
        }

        return (
            <div>
                <InputRange
                    minValue={range.min}
                    maxValue={range.max}
                    step={range.step}
                    value={rating}
                    onChange={setRating}
                    onChangeComplete={value => onRatingChange(value)}
                />
            </div>
        )
    } else if (filter === "release_year") {
        let range = {
            // min: 2000,
            // max: 2021,
            step: 1
        }

        return (
            <div >
                <InputRange
                    minValue={releaseYearRange.min}
                    maxValue={releaseYearRange.max}
                    step={range.step}
                    value={releaseYear}
                    onChange={setReleaseYear}
                    onChangeComplete={value => onReleaseYearChange(value)}
                />
            </div>
        )
    }

}

const mapStateToProps = state => {
    // console.log("dropdown state: ", state);
    return {
        selectedRating: state.movies.rating,
        selectedReleaseYear: state.movies.release_year,
        selectedReleaseYearRange: state.movies.release_year_range
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRatingChange(rating) {
            dispatch({
                type: 'SET_RATING',
                rating
            });
        },
        onReleaseYearChange(release_year) {
            dispatch({
                type: 'SET_RELEASE_YEAR',
                release_year
            });
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputRangeMinMax)

