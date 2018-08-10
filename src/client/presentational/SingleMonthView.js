import React from 'react';

const SingleMonthView = (props) => (
    <div className="container d-flxe w-100 h-100">
        <div className="col-12">
            <Month  year={props.chosenYear} month={props.selectedMonth} monthIndex={props.chosenMonthIndex} holidays={staticHolidays(props.chosenYear).concat(movingHolidays(props.chosenYear))} />
        </div>
    </div>
);

export default SingleMonthView;
