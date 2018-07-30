import { connect } from 'react-redux';
import SingleMonthView from '../presentational/SingleMonthView';
//import {  } from '../actions';

const mapStateToProps = (state) => ({
    userLoggedIn: state.userLoginStatus,
});
/*
const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(userLoggedIn()),
    logout: () => dispatch(userLoggedOut()),
});
*/
export default connect(mapStateToProps, mapDispatchToProps)(SingleMonthView);
