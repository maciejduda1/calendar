import React, { Component } from 'react';
import { weekdaysShort, daysInMonth, firstDayOfMonth, dayOfWeek, holidayNamesPL } from '../utill/getTime';
import SingleCalendarCell from './SingleCalendarCell';
import { Link } from 'react-router-dom';

class Month extends Component {
    constructor(props) {
        super(props)
    }

    getBlanksBefore() {
        const emptySpots = [];
        for (let i = 1; i < firstDayOfMonth([this.props.year, this.props.monthIndex]); i++) {
            if (this.props.monthIndex === 0) {
                emptySpots.push(<td key={i - 50} className="day prev-month">{31 - firstDayOfMonth([this.props.year, this.props.monthIndex]) + i + 1}</td>)
            } else {
                emptySpots.push(<td key={i - 50} className="day prev-month">{daysInMonth([this.props.year, this.props.monthIndex - 1]) - firstDayOfMonth([this.props.year, this.props.monthIndex]) + i + 1}</td>)
            }
        }
        return emptySpots;
    }

    getMonthDays() {
        const fullSpots = [];
        for (let d = 1; d <= daysInMonth([this.props.year, this.props.monthIndex]); d++) {
            fullSpots.push(<SingleCalendarCell
                key={d + this.props.month}
                userLoggedIn={this.props.userLoggedIn}
                d={d}
                year={this.props.year}
                monthIndex={this.props.monthIndex}
                month={this.props.month}
                toDoTasks={this.props.tasks}
            />)
        }
        return fullSpots
    }

    getBlanksAfter(blanksBefore, monthDays) {
        const emptySpots = [],
            blanksBeforeLength = blanksBefore.length,
            monthDaysLength = monthDays.length;
        for (let i = blanksBeforeLength + monthDaysLength; i < 42; i++) {
            emptySpots.push(<td key={i - 50} className="day next-month">{i + 1 - blanksBeforeLength - monthDaysLength}</td>)
        }
        return emptySpots;
    }

    getFullMonth() {
        const blanksBefore = this.getBlanksBefore(),
            monthDays = this.getMonthDays(),
            blanksAfter = this.getBlanksAfter(blanksBefore, monthDays),
            monthWithBlanks = [...blanksBefore, ...monthDays, ...blanksAfter];
        return monthWithBlanks;
    }

    getRowsOfCalendar() {
        const emptyRows = [],
            fullMonth = this.getFullMonth();
        for (let i = 0; i < 6; i++) {
            emptyRows.push(<tr key={"row" + (i + 1)}>{fullMonth.filter((td, index) => {
                if (index >= i * 7 && index < i * 7 + 7) {
                    switch (index + 1 % 7) {
                        case 0 && td.props.className !== "day bg-danger":
                            emptyRows.splice(6, 1, <td key={'sunday' + i + this.props.month} className="day bg-danger">{i}</td>);
                            break;
                        default:
                            return td;
                    }
                }
            })}</tr>)
        }
        return emptyRows;
    }

    render() {
        return (
            <div className={this.props.col}>
                {this.props.userLoggedIn &&
                    <h3><Link to={'/month'} className="h3" onClick={() => this.props.selectMonth(this.props.monthIndex)}>{this.props.month}</Link></h3>
                }
                {!this.props.userLoggedIn &&
                    <h3 className="h3">{this.props.month}</h3>
                }
                <table className="table table-dark table-sm">
                    <thead>
                        <tr>
                            {weekdaysShort.map((day) => <th key={day}>{day}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.getRowsOfCalendar().map(row => row)}
                    </tbody>
                </table>
                {!this.props.userLoggedIn &&
                    <div className="modal fade" id="registerInvitation" tabIndex="-1" role="dialog" aria-labelledby="registerInvitationLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content text-primary">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="registerInvitationLabel">To see the full version login!</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Full version gives you access to private calendar with your ToDo lists and much more!
                          </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Month;
