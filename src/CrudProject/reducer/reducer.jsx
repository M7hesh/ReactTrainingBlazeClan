const reducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_EMPLOYEE':
            console.log('in reducer GET_EMPLOYEE');
            // return initial action
            return { ...state };
        case 'GET_EMPLOYEE_SUCCESS':
            // mutate the state from the received departments
            // from the response action 
            console.log('in reducer GET_EMPLOYEE_SUCCESS');
            return { ...state, employee: action.employee };
        case 'POST_EMPLOYEE':
            return { ...state };
        case 'POST_EMPLOYEE_SUCCESS':
            // mutate the state by adding new department in it
            console.log(`Received data in state in reducers = ${JSON.stringify(action.employee)}`);
            return { ...state, employee: action.employee };
        case 'PUT_EMPLOYEE':
            console.log('in reducer');
            return { ...state };
        case 'PUT_EMPLOYEE_SUCCESS':
            return { ...state, employee: action.employee };
        case 'DELETE_EMPLOYEE':
            console.log('in reducer');
            return { ...state };
        case 'DELETE_EMPLOYEE_SUCCESS':
            return { ...state, employee: action.employee };

        default:
            return state;
    }
};

export default reducer;