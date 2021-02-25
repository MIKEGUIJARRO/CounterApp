import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

//Functional component
const CounterApp = ({ value }) => {
    //[currentState, updateFunctionState]
    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter((prevCounter) => {
            return prevCounter + 1;
        });
    }

    const handleSubstract = (e) => {
        setCounter((prevCounter) => {
            return prevCounter - 1;
        });
    }

    const handleReset = (e) => {
        setCounter(value);
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAdd}>+1</button>
        </Fragment>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value: 100,
}

export default CounterApp;  