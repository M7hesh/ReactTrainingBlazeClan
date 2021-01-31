import React from 'react';
import { Httpservice } from "./../services/httpservice";
import { useState, useEffect } from 'react';
import { putEmployee } from './actions/actions';
import { connect } from 'react-redux';

const EditComp = (props) => {
    const [employee, updateEmp] = useState({ EmpNo: 0, EmpName: '', Designation: '', Salary: 0, DeptNo: 0 });
    let serv = new Httpservice();

    useEffect(() => {
        let empno = props.match.params.id;
        console.log(`Received Value ${empno}`);
        let emp = {};
        serv.getEmpDatabyid(parseInt(empno)).then((resp) => {
            emp = resp.data.data; //to remove status headers we are doing this way
            updateEmp({
                EmpNo: emp.EmpNo,
                EmpName: emp.EmpName,
                Designation: emp.Designation,
                Salary: emp.Salary,
                DeptNo: emp.DeptNo
            });
            console.log(JSON.stringify(emp));
        }).catch((error) => {
            console.log(`Error ${error}`);
        });
    }, []);

    const save = () => {
        let emp = {
            EmpNo: employee.EmpNo,
            EmpName: employee.EmpName,
            Designation: employee.Designation,
            Salary: employee.Salary,
            DeptNo: employee.DeptNo
        };
        props.putEmp(emp);
        props.history.push('/listemp');
    }
    // if the save is successful then move to the List Departments Compoent
    // based on the Router-History.provider, that is storing the History of routing
    // the this.props.history object will be received in current component from
    // Browser--> window --> BrowserRouter-->Router-->Router-History.Provider -->  
    // ---> MainComponent --> Link & Swicth --> CreateDepartmentComponent


    const clear = () => {
        //this.setState({ EmpNo: 0 });
        updateEmp({ EmpName: '', Designation: '', Salary: 0, DeptNo: 0 });
    }

    return (
        <div className="container">
            <h2>Edit Details</h2>
            <div className="form-group">
                <label>EmpNo</label>
                <input type="number" className="form-control"
                    name="EmpNo" disabled
                    value={employee.EmpNo}
                // onChange={this.handleChanges.bind(this)}
                />
            </div>
            <div className="form-group">
                <label>EmpName</label>
                <input type="text" className="form-control"
                    name="EmpName"
                    value={employee.EmpName}
                    onChange={(evt) => updateEmp({ ...employee, EmpName: evt.target.value })}
                />
            </div>
            <div className="form-group">
                <label>Designation</label>
                <input type="text" className="form-control"
                    name="Designation"
                    value={employee.Designation}
                    onChange={(evt) => updateEmp({ ...employee, Designation: evt.target.value })}
                />
            </div>
            <div className="form-group">
                <label>Salary</label>
                <input type="number" className="form-control"
                    name="Salary"
                    value={employee.Salary}
                    onChange={(evt) => updateEmp({ ...employee, Salary: evt.target.value })}
                />
            </div>
            <div className="form-group">
                <label>DeptNo</label>
                <input type="number" className="form-control"
                    name="DeptNo"
                    value={employee.DeptNo}
                    onChange={(evt) => updateEmp({ ...employee, DeptNo: evt.target.value })}
                />
            </div>
            <input type="button" value="Clear" onClick={clear} className="btn btn-warning" />

            <input type="button" value="Save" onClick={save} className="btn btn-success" 
            disabled={! (employee.EmpName && employee.Designation && employee.Salary && employee.DeptNo
                && (employee.EmpNo > 0) && (employee.Salary > 0))}/>

        </div>

    );
};

const mapDispatchToProps = {
    // prop : actual action creator
    putEmp: putEmployee, // action for PUT_DEPARTMENT
};

export default connect(null, mapDispatchToProps)(EditComp);
