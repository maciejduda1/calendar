import { currentDate } from './utill/getTime';
import { ADD_YEAR, SUBTRACT_YEAR, USER_LOGGED_IN, USER_LOGGED_OUT } from './actions';

const initialState = {
    currentYear: Number(currentDate.format('Y')),
    currentMonth: currentDate.format('MMMM'),
    currentDay: currentDate.format('d'),
    userLoginStatus: false,
}

function appReducer(state = initialState, action) {
    switch(action.type) {

        case ADD_YEAR:
            return Object.assign({}, state, { currentYear: state.currentYear + 1 });

        case SUBTRACT_YEAR:
            return Object.assign({}, state, { currentYear: state.currentYear - 1 });

        case USER_LOGGED_IN:
            return Object.assign({}, state, { userLoginStatus: true });
        
        case USER_LOGGED_OUT:
            console.log('zgłaszam się Out');
            return Object.assign({}, state, { userLoginStatus: false });
        
        default: 
            return state;
    }
}

export default appReducer;
