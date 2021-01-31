// noted point: If only single reducer function is created for all 
// action dispatching  monitoring. Then its is not required 
// to make use of combineReducer() object
// Why: When we pass the sigle reducer function to createStore()
// the createStore() method internally match the singlereducer function


// to combineReducer() function and load it
const reducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_DEPARTMENTS':
            console.log('in reducer GET_DEPARTMENTS');
            // return initial action
            return { ...state };
        case 'GET_DEPARTMENTS_SUCCESS':
            // mutate the state from the received departments
            // from the response action 
            console.log('in reducer GET_DEPARTMENTS_SUCCESS');
            return { ...state, departments: action.departments };
        case 'ADD_DEPARTMENT':
            return { ...state };
        case 'ADD_DEPARTMENT_SUCCESS':
            // mutate the state by adding new department in it
            console.log(`Received data in state in reducers = ${JSON.stringify(action.department)}`);
            return { ...state, department: action.department };
        case 'PUT_DEPARTMENT':
            console.log('in reducer');
            return { ...state };
        case 'PUT_DEPARTMENT_SUCCESS':
            return { ...state, department: action.department };
        case 'DELETE_DEPARTMENT':
            console.log('in reducer');
            return { ...state };
        case 'DELETE_DEPARTMENT_SUCCESS':
            return { ...state, department: action.department };

        default:
            return state;
    }
};

export default reducer;