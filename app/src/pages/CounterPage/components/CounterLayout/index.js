import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {ROUTES} from '../../../../routes/routesNames';

import "./style.css";

const CounterLayout = ({filling, countValue, parityType, handleIncrement, handleDecrement, handleReset }) => {
    return (
        <div>
            <div className="counter_wrapper" style={filling}>
                <div className="count_screen">{countValue}</div>
                <div className='count_output'>{parityType}</div>
                <div className='buttons_wrapper'>
                    <button onClick={handleDecrement}>-</button>
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
            <div className = 'content_home'>
                <Link to={ROUTES.HOME_PAGE}>
                    <button>GO TO HOME PAGE</button>
                </Link>
            </div>
        </div>
    )
};
CounterLayout.propTypes ={
    countValue: PropTypes.number.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
}
export default CounterLayout;
