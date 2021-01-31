import React, { Component } from 'react';
import { Httpservice } from "./../services/httpservice";
class EditEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EmpNo: 0,
            EmpName: '',
            Designation: '',
            Salary: 0,
            DeptNo: 0
        };
        this.serv = new Httpservice();
    }
    handleChanges(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    // subscribe to the route parameters
    componentDidMount() {
        let empno = this.props.match.params.id;
        console.log(`Received Value ${empno}`);
        let emp = {};
        this.serv.getEmpDatabyid(parseInt(empno)).then((resp) => {
            emp = resp.data.data; //to remove status headers we are doing this way
            this.setState({ EmpNo: emp.EmpNo });
            this.setState({ EmpName: emp.EmpName });
            this.setState({ Designation: emp.Designation });
            this.setState({ Salary: emp.Salary });
            this.setState({ DeptNo: emp.DeptNo });
            console.log(JSON.stringify(emp));
        }).catch((error) => {
            console.log(`Error ${error}`);
        });
    }

    save() {
        // update the record
        let emp = {
            EmpNo: this.state.EmpNo,
            EmpName: this.state.EmpName,
            Designation: this.state.Designation,
            Salary: this.state.Salary,
            DeptNo: this.state.DeptNo
        };
        this.serv.putEmpData(emp).then((resp) => {
            console.log(JSON.stringify(resp.data));
            // if the save is successful then move to the List Departments Compoent
            // based on the Router-History.provider, that is storing the History of routing
            // the this.props.history object will be received in current component from
            // Browser--> window --> BrowserRouter-->Router-->Router-History.Provider -->  
            // ---> MainComponent --> Link & Swicth --> CreateDepartmentComponent
            this.props.history.push('/listemp');
        }).catch((error) => {
            this.setState({ errorMessage: `Error Occured at editempcomp save()${error.message}` });
        });
    }

    clear() {
        this.setState({ EmpNo: 0 });
        this.setState({ EmpName: '' });
        this.setState({ Designation: '' });
        this.setState({ Salary: 0 });
        this.setState({ DeptNo: 0 });
    }
    render() {
        return (
            <div className="container">
                <h2>Create</h2>
                <div className="form-group">
                    <label>EmpNo</label>
                    <input type="text" className="form-control"
                        name="EmpNo"
                        value={this.state.EmpNo}
                        onChange={this.handleChanges.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label>EmpName</label>
                    <input type="text" className="form-control"
                        name="EmpName"
                        value={this.state.EmpName}
                        onChange={this.handleChanges.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <input type="text" className="form-control"
                        name="Designation"
                        value={this.state.Designation}
                        onChange={this.handleChanges.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label>Salary</label>
                    <input type="text" className="form-control"
                        name="Salary"
                        value={this.state.Salary}
                        onChange={this.handleChanges.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label>DeptNo</label>
                    <input type="text" className="form-control"
                        name="DeptNo"
                        value={this.state.DeptNo}
                        onChange={this.handleChanges.bind(this)}
                    />
                </div>
                <input type="button" value="Clear" onClick={this.clear.bind(this)} className="btn btn-warning" />
                <input type="button" value="Save" onClick={this.save.bind(this)} className="btn btn-success" />

            </div>

        );
    }
}

export default EditEmployeeComponent;