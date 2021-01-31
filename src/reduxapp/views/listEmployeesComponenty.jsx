import React from 'react';
import selectEmployee from './../actions/action2';
import { useDispatch, useSelector } from "react-redux";
import CreateEmployeeComponent from './createEmployeeComponenty';

const ListEmployeesComponent=(props)=>{
    let dispatch1 = useDispatch();
    //let emp = useSelector(state=>state.listEmployeesReducer);

    const select=()=>{
        //updateEmpoyee({EmpNo:0,EmpName:'',DeptName:'', Designation: ''});
        <CreateEmployeeComponent SelectEmployeeAction={(emp)=> dispatch1(selectEmployee(emp))}> </CreateEmployeeComponent>
       // console.log('selected employee',emp);
    };

    if(props.employeeList === undefined || props.employeeList.length === 0){
        return (
            <div>
                <strong>No Employees to Show in List</strong>
            </div>
        );
    } else {
        return (
           <div className="container">
            <h2>List of Employees</h2>
            <table className="table table-bordered table-striped table-danger">
                <thead>
                    <tr>
                      <td>EmpNo</td>
                      <td>EmpName</td>
                    </tr>
                </thead>
                <tbody>
                  {
                    props.employeeList.map((emp,index)=>(
                        <tr key={index} 
                       onClick = {select(emp)}
                        >
                           <td>{emp.employee.EmpNo}</td>
                           <td>{emp.employee.EmpName}</td>
                        </tr>
                    ))
                  }
                </tbody>
            </table>
           </div>
        );
    } 
};

export default ListEmployeesComponent;