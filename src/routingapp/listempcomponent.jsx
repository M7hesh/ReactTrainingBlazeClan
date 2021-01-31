import React, { Component } from 'react';
import { Httpservice } from "./../services/httpservice";
import { Link } from 'react-router-dom';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
           // tableColumnHeaders: []    
        };
        this.serv = new Httpservice();
       // this.state.tableColumnHeaders = Object.keys(this.state.employees[0]);
    }

    componentDidMount() {
        this.serv.getEmpData().then((resp) => {
            this.setState({ employees: resp.data.response });
        }).catch((e) => {
            this.setState({ errorMessage: `Error occured at componentDidMount in Listemp comp: ${e.message}` });
        });
    }

    componentWillMount() {
        console.log('Emp List Component is UnMounted');
    }

    deleteEmpRecord(id) {
        this.serv.deleteEmpData(id).then((resp) => {
            console.log('Emp record deleted');
            window.location.reload();
        }).catch((error) => {
            console.log(`Error in Emp Delete ${error}`);
        });
    }

    back(){
        this.props.history.push('/');
    }

    render() {
        if (this.state.employees.length === 0) {
            return (<div>No records</div>);
        } else {
            return (
                <div className="container">
                    <h2>Employee List</h2>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>EmpNo</th>
                                <th>EmpName</th>
                                <th>Designation</th>
                                <th>Salary</th>
                                <th>DeptNo</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map((v, i) => (
                                    <tr key={i}>
                                        <td>{v.EmpNo}</td>
                                        <td>{v.EmpName}</td>
                                        <td>{v.Designation}</td>
                                        <td>{v.Salary}</td>
                                        <td>{v.DeptNo}</td>
                                        <td>
                                            <button className="btn btn-warning">
                                                <Link to={`/editemp/${v.EmpNo}`}>Edit</Link>
                                            </button>
                                        </td>
                                        <td>
                                            <input type="button" value="Delete" className="alert alert-danger"
                                                onClick={() => { this.deleteEmpRecord(v.EmpNo) }} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <input type="button" value="Back" onClick={this.back.bind(this)}  className="btn btn-info"/>
                </div>
            );
        }
    }
}

export default ListEmployeeComponent;