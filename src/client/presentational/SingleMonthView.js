import React from 'react';

const SingleMonthView = (props) => (
    <div className="container d-flxe w-100 h-100">
        <div className="col-12">
            <Month  
                key={month} 
                year={props.currentYear} 
                month={month} 
                monthIndex={index} 
                holidays={staticHolidays(props.currentYear).concat(movingHolidays(props.currentYear))}
                selectMonth={(i) => props.selectMonth(i)}
                userLoggedIn={props.userLoggedIn}
                tasks={props.userTasks}
                col='col-12' />
        </div>
    </div>
);

export default SingleMonthView;
