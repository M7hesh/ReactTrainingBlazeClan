import React, { useState } from 'react';
import ListComponent from './listcomponent';

// use the Context
import { DataContext } from './dataContext';

import TableContextComponent from './tableContextComponent';

import TableContextComponentEvent from './tableContextComponentEvent';


const StateComponent = () => {
  // the destructuring of the object in ES 6
  // to define the state property

  // employee: the State property with default as {EmpNo:0,EmpName:'',DeptName:''}
  // updateEmpoyee, the callback function that will update 'employee' state property

  const [employee, updateEmpoyee] = useState({ EmpNo: 0, EmpName: '', DeptName: '', Designation: '' });
  const [employees, addEmployee] = useState([]);
  const depts = ['IT', 'HRD', 'SALES', 'TRAINING'];
  const desigs = ['Engineer', 'Manager', 'Programmer', 'Staff'];

  const save = () => {

    // employees object mutation by adding new Employee in the same array 
    addEmployee([...employees,
    {
      EmpNo: employee.EmpNo, EmpName: employee.EmpName, DeptName: employee.DeptName,
      Designation: employee.Designation
    }]);
  };
  const clear = () => {
    updateEmpoyee({ EmpNo: 0, EmpName: '', DeptName: '', Designation: '' });
  };

  // {...employee, EmpNo: parseInt(evt.target.value)}
  // the object mutation to update the employee object with the new value for property of the employee object
  // e.g.  in this case EmpNo
  return (
    <div className="container">
      <div className="form-group">
        <label>EmpNo</label>
        <input type="text" className="form-control"
          value={employee.EmpNo}
          onChange={(evt) => updateEmpoyee({ ...employee, EmpNo: parseInt(evt.target.value) })} />
      </div>
      <div className="form-group">
        <label>EmpName</label>
        <input type="text" className="form-control"
          value={employee.EmpName}
          onChange={(evt) => updateEmpoyee({ ...employee, EmpName: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>DeptName</label>
        <ListComponent stateProp={employee.DeptName}
          dataSource={depts}
          emitValue={(data) => { updateEmpoyee({ ...employee, DeptName: data }) }}></ListComponent>
      </div>
      <div className="form-group">
        <label>Designation</label>
        <ListComponent stateProp={employee.Designation}
          dataSource={desigs}
          emitValue={(data) => { updateEmpoyee({ ...employee, Designation: data }) }}></ListComponent>
      </div>
      <div className="form-group">
        <input type="button" value="Clear" onClick={clear} className="btn btn-warning" />
        <input type="button" value="Save" onClick={save} className="btn btn-success" />
      </div>
      <hr />
      {JSON.stringify(employees)}

      <br />
      Providing the employees array state property to the TableContextComponent
      <DataContext.Provider value={employees}>
        <TableContextComponent></TableContextComponent>
      </DataContext.Provider>
      <hr />
      {/* Providing the employees array state property and a callback to the TableContextComponent */}
      <DataContext.Provider value={{ employees, updateEmpoyee }}>
        <TableContextComponentEvent></TableContextComponentEvent>
      </DataContext.Provider>

    </div>
  );


};

export default StateComponent;