import React from 'react';
import Month from './Month';
import { months, staticHolidays, movingHolidays } from '../utill/getTime'

console.log(months);

const Calendar = (props) => ( 
    <div id="root" className="album py-5 w-100">
        <div className = "row">
            <h1 className="w-100">Rok
               <button className="btn btn-primary ml-2 mr-2" onClick={ () => props.subtractYear() }>-</button>  
               <span className="badge badge-secondary">{props.currentYear}
               </span>
               <button className="btn btn-primary ml-2 mr-2" onClick={ () => props.addYear() }>+</button>
            </h1>
        </div>  
        <div className="row">
            { months.map((month, index) => <Month 
                                                key={month} 
                                                year={props.currentYear} 
                                                month={month} 
                                                monthIndex={index} 
                                                holidays={staticHolidays(props.currentYear).concat(movingHolidays(props.currentYear))}
                                                selectMonth={(i) => props.selectMonth(i)}
                                                userLoggedIn={props.userLoggedIn}
                                                tasks={props.userTasks}
                                                col='col-sm-12 col-md-6 col-lg-4 col-xl-3'
                                            />)} 
        </div>
    </div>
);

export default Calendar;
