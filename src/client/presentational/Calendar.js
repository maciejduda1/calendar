import React from 'react';
import Month from './Month';
import { months, staticHolidays, movingHolidays } from '../utill/getTime'

console.log(months);

const Calendar = (props) => ( 
    <div className = "row">
        <h1 className="w-100">Rok
           <button className="btn btn-primary ml-2 mr-2" onClick={ () => props.subtractYear() }>-</button>  
           <span className="badge badge-secondary">{props.currentYear}
           </span>
           <button className="btn btn-primary ml-2 mr-2" onClick={ () => props.addYear() }>+</button>
        </h1>
        { months.map((month, index) => <Month key={month} year={props.currentYear} month={month} monthIndex={index} holidays={staticHolidays(props.currentYear).concat(movingHolidays(props.currentYear))} />)} 
    </div>
);

export default Calendar;
