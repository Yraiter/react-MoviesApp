import './inputRange.css'
import React, { useState } from 'react'
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

const Slidebar = (props) => {
    const [value, setVal] = useState({ min: 2007, max: 2013 });


    let range = {
        label: "rating",
        min: 2000,
        max: 2020,
        step: 1,
        value: { min: 2010, max: 2017 }
    }

    return (
        <div >
            <InputRange
                minValue={range.min}
                maxValue={range.max}
                step={range.step}
                value={value}
                onChange={setVal}
                onChangeComplete={value => console.log(value)}
            />
        </div>
    )
}

export default Slidebar
