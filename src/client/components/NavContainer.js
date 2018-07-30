import { connect } from 'react-redux';
import Nav from '../presentational/Nav';
import { userLoggedIn, userLoggedOut } from '../actions';

const mapStateToProps = (state) => ({
    userLoggedIn: state.userLoginStatus,
});

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(userLoggedIn()),
    logout: () => dispatch(userLoggedOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
