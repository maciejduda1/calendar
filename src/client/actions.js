const ADD_YEAR = 'ADD_YEAR',
    SUBTRACT_YEAR = 'SUBTRACT_YEAR',
    USER_LOGGED_IN = 'USER_LOGGED_IN',
    USER_LOGGED_OUT = 'USER_LOGGED_OUT';

function addYear() {
    return {
        type: ADD_YEAR,
    }
}

function subtractYear() {
    return {
        type: SUBTRACT_YEAR,
    }
}

function userLoggedIn() {
    return {
        type: USER_LOGGED_IN,
    }
}

function userLoggedOut() {
    return {
        type: USER_LOGGED_OUT,
    }
}


export { ADD_YEAR, SUBTRACT_YEAR, USER_LOGGED_IN, USER_LOGGED_OUT, addYear, subtractYear, userLoggedIn, userLoggedOut, };
