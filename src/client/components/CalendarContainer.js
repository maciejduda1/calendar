import { connect } from 'react-redux';
import Calendar from '../presentational/Calendar';
import { addYear, subtractYear, selectMonth } from '../actions';

const mapStateToProps = (state) => ({
    currentYear: state.currentYear,
    selectedMonth: state.selectedMonth,
    userLoggedIn: state.userLoginStatus,
    userTasks: state.toDoTasks,
});

const mapDispatchToProps = (dispatch) => ({
    addYear: () => dispatch(addYear()),
    subtractYear: () => dispatch(subtractYear()),
    selectMonth: (index) => dispatch(selectMonth(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
