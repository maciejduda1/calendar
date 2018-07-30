import React, { Component } from 'react';
import { weekdaysShort, daysInMonth, firstDayOfMonth, dayOfWeek, holidayNamesPL } from '../utill/getTime';

class Month extends Component {
    constructor(props) {
        super(props)
    }

    getBlanksBefore() {
        const emptySpots = [];
      //  console.log('blanks Before');
        for (let i = 1; i < firstDayOfMonth([this.props.year, this.props.monthIndex]); i++ ) {
            emptySpots.push(<td key={i - 50} className="day prev-month">{daysInMonth([this.props.year, this.props.monthIndex -1]) - firstDayOfMonth([this.props.year, this.props.monthIndex]) + i + 1}</td>)
        }
        return emptySpots;
    }

    getMonthDays() {
        const fullSpots = [];
            
            
        // console.log(' holidays ', holidays);
        // console.log('Wielkanoc: ', movingHolidays(this.props.year)); 
        /*
        for ( let d = 1; d <= daysInMonth([this.props.year, this.props.monthIndex]); d++ ) {
            if (holidaysStatic[0] !== undefined) {
                const searchedHoliday = holidaysStatic[0].day.toString();
               // console.log('Święta', holidaysStatic);
                (searchedHoliday.indexOf(d) > -1) ? fullSpots.push(<td key={d + this.props.month} className="day bg-danger">{d}</td>) : fullSpots.push(<td key={d + this.props.month} className="day">{d}</td>) 
            } else {
                fullSpots.push(<td key={d + this.props.month} className="day">{d}</td>)   
            }        
        }
        */
        //tu zmieniam! 
        for ( let d = 1; d <= daysInMonth([this.props.year, this.props.monthIndex]); d++ ) {
            // console.log(dayOfWeek(this.props.year, this.props.monthIndex, d));
            if ( this.props.holidays.indexOf(`${(d < 10) ? '0'+ d : d }.${((this.props.monthIndex+1 < 10) ? '0'+(this.props.monthIndex+1) : (this.props.monthIndex+1))}.${this.props.year}`) > -1 ) {
                fullSpots.push(<td key={d + this.props.month} className="day bg-danger border border-secondary" data-container="body" data-toggle="tooltip" data-placement="top" title={`${holidayNamesPL[d]}`}>{d}</td>)
            } else if (dayOfWeek(this.props.year, this.props.monthIndex, d) === 0 && this.props.holidays.indexOf(`${(d < 10) ? '0'+ d : d }.${((this.props.monthIndex+1 < 10) ? '0'+(this.props.monthIndex+1) : (this.props.monthIndex+1))}.${this.props.year}`) === -1 ) {
                fullSpots.push(<td key={d + this.props.month} className="day border border-danger">{d}</td>)
            } else {
                fullSpots.push(<td key={d + this.props.month} className="day">{d}</td>)
            }



        //    console.log(' index: ', this.props.holidays.indexOf(`${d}.${(this.props.monthIndex+1)}.${this.props.year}`), 'hasło: ',`${d}.${(this.props.monthIndex+1)}.${this.props.year}` );
        //    (this.props.holidays.indexOf(`${(d < 10) ? '0'+ d : d }.${((this.props.monthIndex+1 < 10) ? '0'+(this.props.monthIndex+1) : (this.props.monthIndex+1))}.${this.props.year}`) > -1) ? fullSpots.push(<td key={d + this.props.month} className="day bg-danger">{d}</td>) : fullSpots.push(<td key={d + this.props.month} className="day">{d}</td>)       
        }

        return fullSpots;
    }

    getBlanksAfter(blanksBefore, monthDays) {
        const emptySpots = [],
            blanksBeforeLength = blanksBefore.length,
            monthDaysLength = monthDays.length;

       // console.log('blanks After');
        
        for (let i = blanksBeforeLength + monthDaysLength; i < 42; i++ ) {
            emptySpots.push(<td key={i - 50} className="day next-month">{i + 1 - blanksBeforeLength - monthDaysLength}</td>)
        }
        return emptySpots;
    }

    getFullMonth() {
        const blanksBefore = this.getBlanksBefore(),
            monthDays = this.getMonthDays(),
            blanksAfter = this.getBlanksAfter(blanksBefore, monthDays),
            monthWithBlanks = [...blanksBefore, ...monthDays, ...blanksAfter];
       // console.log('całość : ', monthWithBlanks);
        return monthWithBlanks;
    }

    getRowsOfCalendar() {
        const emptyRows = [],
            fullMonth = this.getFullMonth();
        
        for( let i = 0; i < 6; i++) {
            emptyRows.push(<tr key={"row" + (i + 1)}>{fullMonth.filter((td, index) => {
                if ( index >= i*7 &&  index < i*7 + 7) {
                    switch (index + 1 % 7 ) {
                        case 0 && td.props.className !== "day bg-danger":
                            emptyRows.splice(6, 1, <td key={'sunday' + i + this.props.month} className="day bg-danger">{i}</td> );
                            break;
                        default:
                            //console.log((index + 1) % 7);
                            //console.log(td.props.className);
                            return td;
                       // return td;    
                    }
                }
            })}</tr>)
        }
        //console.log('emptyRows ', emptyRows)
        return emptyRows;
    }
    /*
    getStaticHolidays() {
        const monthHolidays = staticHolidays.filter((month) => {
            if (month.month === this.props.monthIndex +1 ) {
                console.log('zgłaszam się');
                return month;
            }
        })
        console.log('sw: ', monthHolidays);
        return monthHolidays;
    }
    */
    render() {
        return (
            <div className="col-md-4">
                <h3>{this.props.month}</h3>    
                <table className="table table-dark table-sm">
                        <thead>
                            <tr>
                                {weekdaysShort.map( (day) => <th key={day}>{day}</th> )}
                            </tr>
                        </thead>
                        <tbody>
                            {this.getRowsOfCalendar().map(row => row)}
                        </tbody>
                </table>
            </div>
        );
    }
}





/*
const Month = (props) => {
    const this.getBlanksBefore = () => {
            let emptySpots = [];
            for (let i = 1; i < firstDayOfMonth([props.year, props.monthIndex]); i++ ) {
                emptySpots.push(<td key={i - 50} className="day prev-month">{daysInMonth([props.year, props.monthIndex -1]) - firstDayOfMonth([props.year, props.monthIndex]) + i + 1}</td>)
            }
            return emptySpots;
        },
        monthHolidays = staticHolidays.filter((month) => {
            if (month.month === props.monthIndex +1 ) {
                return month
            }
        }),
        this.getMonthDays =  () => {
            const fullSpots = [];  
            for ( let d = 1; d <= daysInMonth([props.year, props.monthIndex]); d++ ) {
               // console.log(props.monthIndex, '', d);
                fullSpots.push(<td key={d+props.month} className="day">{d}</td>)           
            }
            console.log('fullSpots: ', fullSpots);
            return fullSpots;
        },
        blanksAfter = () => {
            let emptySpots = [];
            console.log('month.length: ',this.getMonthDays().length);
            for (let i = this.getBlanksBefore().length + this.getMonthDays().length; i < 42; i++ ) {
                emptySpots.push(<td key={i - 50} className="day next-month">{i + 1 - this.getBlanksBefore().length - this.getMonthDays().length}</td>)
            }
            return emptySpots;
        },
        fullMonth = [...this.getBlanksBefore(), ...this.getMonthDays(), ...blanksAfter()],
        rowsOfCalendar = () => { 
            let emptyRows = [];
            for( let i = 0; i < 6; i++) {
                emptyRows.push(<tr key={"row" + (i + 1)}>{fullMonth.filter((td, index) => {
                    if ( index >= i*7 && index < i*7 + 7) {
                        return td
                    }
                })}</tr>)
            }
            return <tbody>{emptyRows}</tbody>; 
        };
        
    return (
    <div className="col-md-4">
        <h3>{props.month}</h3>    
        <table className="table table-dark table-sm">
                <thead>
                    <tr>
                        {weekdaysShort.map( (day) => <th key={day}>{day}</th> )}
                    </tr>
                </thead>
                {rowsOfCalendar()}
        </table>
    </div>
    )
};
*/

export default Month;
