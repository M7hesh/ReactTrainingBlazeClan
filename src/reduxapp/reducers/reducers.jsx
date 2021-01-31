import { combineReducers } from "redux";

// reduecrs functions
// pure functions accepting 'initialState' and 'action' 
// as  input parameters and update state based on action received

// IMP NOTE: seperate reducer function for each dispatched / output action
// we must combine all reducer functions into one 'combineReducers()' object
// so that the store can have all reducers at once

// action.type: the 'type' from output of the 'action-creator' method
// see actions.js, the addEmployee() action creator method, this return
// {type:ADD_EMPLOYEE, employee}
// action.employee, is the 'employee' payload returned by  addEmployee() action creator

export const addEmployeeReducer=(state, action)=>{
    switch (action.type) {
        case 'ADD_EMPLOYEE':
               return {
                   // type state will be modified by addign newly added employee
                   employee: action.employee
               };   
        default: 
              return state; // original state 
               
    }
};

// create a new reducer function that will return the newly added employee
// is a state and this employees list from the state will be shown in the view
// this reducer will also be executed on ADD_EMPLOYEE output action
// initialState is an empty array from the state
export const listEmployeesReducer=(state=[], action)=>{
    switch(action.type) {
        case 'ADD_EMPLOYEE':
            // call the addEmployeeReducer() function
            // and received the newly created employee object and
            // mutatte it in the state and return the list of employees from the state
            // the first parameter is 'undefined' because the employee is newly created
            return [...state, addEmployeeReducer(undefined, action)];
        default :
            return state;
    }
};
// use 'combineReducers()' object from 'redux' module
// and make the listEmployeeReducer() function as reducer for the Redux application
// the 'combineReducers()' will monitor the store for any updates because of 
// any React-component executing under the store, where these compponents are having 
// subscription of this store
// each component inside the store may dispatch the action and the combineReducers()
// will monitor the action and accordingly update the store 

const reduecrs = combineReducers({listEmployeesReducer});

export default reduecrs;

// we can create single reducer constant object to update tthe store using 
// switch case for each dispatched / output action