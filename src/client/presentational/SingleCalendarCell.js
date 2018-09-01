import React from "react";
import { allHoliday, dayOfWeek } from "../utill/getTime";

const SingleCalendarCell = props => {
  const createString = `${props.d < 10 ? "0" + props.d : props.d}
    .${
    props.monthIndex + 1 < 10 ? "0" + (props.monthIndex + 1) : props.monthIndex + 1
    }
    .${props.year}`,
    isDayHoliday = allHoliday(props.year)
      .find(
        element => element.date === createString
      ),
    isDaySunday =
      dayOfWeek(props.year, props.monthIndex, props.d) === 0 ? true : false;
  // console.log('createString: ', createString ,'isDayHoliday: ', isDayHoliday, 'isDaySunday: ', isDaySunday);

  if (props.userLoggedIn) {
    //Zalogowany
    // console.log(allHoliday());
    const getDayToDos = props.toDoTasks.filter(task => {
      if (task.date === createString) {
        return task;
      }
    });
    if (
      isDayHoliday !== undefined &&
      isDaySunday &&
      getDayToDos[0] !== undefined
    ) {
      //święto + niedziela + todo
      return (
        <td
          className="day"
          data-container="body"
          data-toggle="tooltip"
          data-placement="top"
          title={`${isDayHoliday.name}, ${getDayToDos.map(todo => todo.name)}`}
        >
          <button className="btn btn-danger btn-sm btn-shadow btn-sizing">
            {props.d}
          </button>
        </td>
      );
    } else if (
      isDayHoliday !== undefined &&
      isDaySunday &&
      getDayToDos[0] === undefined
    ) {
      //święto + niedziela
      return (
        <td
          className="day"
          data-container="body"
          data-toggle="tooltip"
          data-placement="top"
          title={`${isDayHoliday.name}`}
        >
          <button className="btn btn-danger btn-sm btn-sizing">
            {props.d}
          </button>
        </td>
      );
    } else if (
      isDayHoliday !== undefined &&
      !isDaySunday &&
      getDayToDos[0] === undefined
    ) {
      //święto
      return (
        <td
          className="day"
          data-toggle="tooltip"
          data-placement="top"
          title={`${isDayHoliday.name}`}
        >
          <button className="btn btn-danger btn-sm btn-sizing">
            {props.d}
          </button>
        </td>
      );
    } else if (
      isDayHoliday === undefined &&
      isDaySunday &&
      getDayToDos[0] === undefined
    ) {
      //niedziela
      return (
        <td className="day">
          <button className="btn btn-danger btn-sm btn-sizing">
            {props.d}
          </button>
        </td>
      );
    } else if (
      isDayHoliday !== undefined &&
      !isDaySunday &&
      getDayToDos[0] !== undefined
    ) {
      //święto + Todo
      return (
        <td
          className="day"
          data-toggle="tooltip"
          data-placement="top"
          title={`${isDayHoliday.name +
            "," +
            getDayToDos.map(todo => todo.name + " ")}`}
        >
          <button className="btn btn-danger btn-sm btn-shadow btn-sizing">
            {props.d}
          </button>
        </td>
      );
    } else if (
      isDayHoliday === undefined &&
      isDaySunday &&
      getDayToDos[0] !== undefined
    ) {
      //niedziela + Todo
      return (
        <td
          className="day"
          data-container="body"
          data-toggle="tooltip"
          data-placement="top"
          title={`${getDayToDos.map(todo => todo.name + ", ")}`}
        >
          <button className="btn btn-danger btn-sm btn-shadow btn-sizing">
            {props.d}
          </button>
        </td>
      );
    } else if (
      isDayHoliday === undefined &&
      !isDaySunday &&
      getDayToDos[0] !== undefined
    ) {
      //zwykły dzień + Todo
      console.log(getDayToDos[0]);
      console.log(getDayToDos.map(todo => todo.name));
      return (
        <td className="day">
          <button
            data-container="body"
            data-toggle="tooltip"
            data-placement="top"
            title={`${getDayToDos.map(todo => todo.name + ", ")}`}
            className="btn btn-dark btn-sm btn-shadow btn-sizing"
          >
            {props.d}
          </button>
        </td>
      );
    } else if (
      isDayHoliday === undefined &&
      !isDaySunday &&
      getDayToDos[0] === undefined
    ) {
      //zwykły dzień
      return (
        <td key={props.d + props.month} className="day">
          <button className="btn btn-dark btn-sm btn-sizing">{props.d}</button>
        </td>
      );
    }
  } else if (!props.userLoggedIn) {
    //Niezalogowany
    if (isDayHoliday !== undefined && isDaySunday) {
      //święto + niedziela
      return (
        <td
          className="day"
          data-container="body"
          data-toggle="tooltip"
          data-placement="top"
          title={`${isDayHoliday.name}`}
        >
          <button
            className="btn btn-danger btn-sm btn-sizing"
            data-toggle="modal"
            data-target="#registerInvitation"
          >
            {props.d}
          </button>
        </td>
      );
    } else if (isDayHoliday !== undefined && !isDaySunday) {
      //święto
      return (
        <td
          className="day"
          data-toggle="tooltip"
          data-placement="top"
          title={`${isDayHoliday.name}`}
        >
          <button
            className="btn btn-danger btn-sm btn-sizing"
            data-toggle="modal"
            data-target="#registerInvitation"
          >
            {props.d}
          </button>
        </td>
      );
    } else if (isDayHoliday === undefined && isDaySunday) {
      //niedziela
      return (
        <td className="day">
          <button
            className="btn btn-danger btn-sm btn-sizing"
            data-toggle="modal"
            data-target="#registerInvitation"
          >
            {props.d}
          </button>
        </td>
      );
    } else if (isDayHoliday === undefined && !isDaySunday) {
      //zwykły dzień
      return (
        <td key={props.d + props.month} className="day">
          <button
            className="btn btn-dark btn-sm btn-sizing"
            data-toggle="modal"
            data-target="#registerInvitation"
          >
            {props.d}
          </button>
        </td>
      );
    }
  }
};

export default SingleCalendarCell;
