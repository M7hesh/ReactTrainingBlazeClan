import React from 'react';
import { useState, useEffect } from 'react';
import { Httpservice } from "./../services/httpservice";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteEmployee } from './actions/actions';

const ListComp = (props) => {
    const [employees, updateEmployees] = useState([]);
    let serv = new Httpservice();
    // Object.keys(this.state.employees[0])

    useEffect(() => {
        serv.getEmpData().then((resp) => {
            updateEmployees(resp.data.response)
            //console.log(employees);
        }).catch((e) => {
            console.log(`Error occured at useEffect in Listemp comp: ${e.message}`)
        });
    }, []);

    const deleteEmpRecord = (id) => {
        if(window.confirm(`Delete Employee: EmpNo ${id}?`)){
        props.delEmp(id);
        window.location.reload(); //refresh
        }
    }

    const back = () => {
        props.history.push('/');
    }

    if (employees.length === 0) {
        return (<div>No records</div>);
    } else {
        let headers = Object.keys(employees[0]);
        return (
            <div className="container">
                <h2 align='center'>Employee List</h2>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            {/* <th>EmpNo</th>
                            <th>EmpName</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>DeptNo</th>
                            <th></th>
                            <th></th> */}
                            { 
                            //Dynamic method
                            headers.map((col,id) => (
                                <th key={id}>{col}</th>
                            ))
                            }
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((v, i) => (
                                <tr key={i}>
                                    {/* <td>{v.EmpNo}</td>
                                    <td>{v.EmpName}</td>
                                    <td>{v.Designation}</td>
                                    <td>{v.Salary}</td>
                                    <td>{v.DeptNo}</td>
                                    <td> */}
                                    { 
                                    //Dynamic method
                                        headers.map((col,id) => (
                                            <td key={id}>{v[col]}</td> //v.col doesn't work
                                        ))
                                    }
                                    <td>
                                        <button className="btn btn-success">
                                            <Link to={`/editemp/${v.EmpNo}`}>Edit</Link>
                                        </button>
                                    </td>
                                    <td>
                                        <input type="button" value="Delete" className="btn btn-warning"
                                            onClick={() => { deleteEmpRecord(v.EmpNo) }} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <input type="button" value="Back" onClick={back} className="btn btn-info" />
            </div>
        );
    }
};

const mapDispatchToProps = {
    // prop : actual action creator
    delEmp: deleteEmployee // action for DELETE_EMPLOYEE
};

export default connect(null, mapDispatchToProps)(ListComp);
