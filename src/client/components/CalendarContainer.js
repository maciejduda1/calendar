import { connect } from 'react-redux';
import Calendar from '../presentational/Calendar';
import { addYear, subtractYear } from '../actions';

const mapStateToProps = (state) => ({
    currentYear: state.currentYear,
});

const mapDispatchToProps = (dispatch) => ({
    addYear: () => dispatch(addYear()),
    subtractYear: () => dispatch(subtractYear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
