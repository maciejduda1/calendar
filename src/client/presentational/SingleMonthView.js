import React from 'react';

const SingleMonthView = (props) => (
    <div className="container d-flxe w-100 h-100">
        <div className="col">
            <Month  year={props.chosenYear} month={props.chosenMonth} monthIndex={props.chosenMonthIndex} holidays={staticHolidays(props.chosenYear).concat(movingHolidays(props.chosenYear))} />
        </div>
    </div>
);