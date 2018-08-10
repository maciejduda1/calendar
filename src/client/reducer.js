import { currentDate } from './utill/getTime';
import { ADD_YEAR, SUBTRACT_YEAR, USER_LOGGED_IN, USER_LOGGED_OUT, SELECT_MONTH } from './actions';

const initialState = {
    currentYear: Number(currentDate.format('Y')),
    currentMonth: currentDate.format('MMMM'),
    currentDay: currentDate.format('d'),
    userLoginStatus: false,
    selectedMonthIndex: 0,
    selectedDayIndex: 0,
    toDoTasks: [{date: '10.11.2018' , name: 'Sprzątanie'}, {date: '03.05.2018', name: 'Pisanie'}],
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
        
        case SELECT_MONTH:
            return Object.assign({}, state, { selectedMonth: action.selectedMonth });
        
        default: 
            return state;
    }
}

export default appReducer;
