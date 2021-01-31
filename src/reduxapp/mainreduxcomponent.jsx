import React from 'react';
// useDispatch, dispatch the action
// useSelector, uses to subscribe to store and query data from it
import { useDispatch, useSelector } from "react-redux";

import CreateEmployeeComponent from './views/createEmployeeComponenty';
import ListEmployeesComponent from './views/listEmployeesComponenty';

// import the action
import addEmployee from './actions/actions';

const MainReduxComponent=()=>{

    // define a dispatch object using the 'useDispatch()' 
    // hook so that the action can be dispatched from the UI
    let dispatch = useDispatch();

    // read all the data from store that is currently returned by the listEmployeesReducer
    let employees = useSelector(state=>state.listEmployeesReducer);

    return (
        <div className="container">
          <h1>The React-Redux Application</h1>
          {/* Dispach the 'addEmployee' action my mapping of to the AddEmployeeAction() props type
         emitted from the CreateEmployeeComponent */}
          <CreateEmployeeComponent AddEmployeeAction={(employee)=> dispatch(addEmployee(employee))}></CreateEmployeeComponent>
          <hr/>
          {/* pass the employees received from the store to the  
        ListEmployeesComponent using props or may use context*/}
          <ListEmployeesComponent employeeList={employees}></ListEmployeesComponent>
        </div>
    );
};

export default MainReduxComponent;