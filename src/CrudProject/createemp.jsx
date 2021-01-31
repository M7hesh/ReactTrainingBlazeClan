import React, { useState } from 'react';
//import ValidationSummaryComponent from "./../../src/Componenets/reusablecomponents/validationSummary"
import { postEmployee } from "./actions/actions";
import { connect } from "react-redux";

const CreateEmp = (props) => {
    const [employee, updateEmp] = useState({ EmpNo: 0, EmpName: '', Designation: '', Salary: 0, DeptNo: 0 });
    // let tempArr = [];
    // let isEmpNoExists = false;
    // let isEmpNameValid = true;
    // let isFormValid = false;

    // const handleChg = (evt) => {
    //     this.setState({ [evt.target.name]: evt.target.value });
    //     this.validateForm(evt.target.name, evt.target.value);
    // }

    const save = () => {
        // emit a props with the employee state from the component so
        //that it can be listened by the immediate parent of this component
        let emp = {
            EmpNo: employee.EmpNo,
            EmpName: employee.EmpName,
            Designation: employee.Designation,
            Salary: employee.Salary,
            DeptNo: employee.DeptNo
        };
        console.log(emp);
        //postEmployee(emp); // wont connect to saga and reducer
        props.postEmp(emp); // working
        props.history.push('/listemp'); //back to List Employee page after Saving
    }

    const clear = () => {
        updateEmp({ EmpNo: 0, EmpName: '', Designation: '', Salary: 0, DeptNo: 0 });
    }

    const back = () => {
        props.history.push('/');
    }

    // Validation NOT implemented yet (Working logic)
   
    // const validateForm = (name, value) => {

    //     if (name === "EmpNo") {
    //         if (parseInt(value) <= 0 || value.length >= 4) {
    //             this.setState({ isEmpNoValid: false });
    //             this.setState({ isFormValid: false });
    //             if (!this.tempArr.includes('EmpNo is mandatory, must be +, must be max 4 in length')) {
    //                 this.tempArr.push('EmpNo is mandatory, must be +, must be max 4 in length');
    //             }
    //             this.setState({ errorMessages: this.tempArr });
    //             console.log(this.tempArr);
    //             console.log(this.state.errorMessages);

    //         } else {
    //             let b = -1;
    //             this.tempArr.forEach((v, i) => {
    //                 if (v == "EmpNo is mandatory, must be +, must be max 4 in length") {
    //                     b = i;
    //                 }
    //             });
    //             if (b >= 0) {
    //                 this.tempArr.splice(b, 1);
    //                 this.setState({ errorMessages: this.tempArr });
    //             }

    //             this.setState({ isEmpNoValid: true });
    //             this.setState({ isFormValid: true });
    //         }
    //     }

    //     if (name === "EmpName") {
    //         if (value.length < 3 || value.length > 20) {
    //             this.setState({ isEmpNameValid: false });
    //             this.setState({ isFormValid: false });
    //             if (!this.tempArr.includes("EmpName is mandatory, must be min 3 characters, must be max 20 characters  ")) {
    //                 this.tempArr.push("EmpName is mandatory, must be min 3 characters, must be max 20 characters  ");
    //             }
    //             this.setState({ errorMessages: this.tempArr });
    //             console.log(this.state.errorMessages);
    //         } else {
    //             let a = -1;
    //             this.tempArr.forEach((v, i) => {
    //                 if (v == 'EmpName is mandatory, must be min 3 characters, must be max 20 characters  ') {
    //                     a = i;
    //                 }
    //             });
    //             if (a >= 0) {
    //                 this.tempArr.splice(a, 1);
    //                 this.setState({ errorMessages: this.tempArr });
    //             }
    //             this.setState({ isEmpNameValid: true });
    //             this.setState({ isFormValid: true });
    //         }
    //     }

    //     if (name === "Salary") {
    //         if (parseInt(value) < 0) {
    //             this.setState({ isEmpNoValid: false });
    //             this.setState({ isFormValid: false });
    //             if (!this.tempArr.includes('Salary is mandatory, must be Positive  ')) {
    //                 this.tempArr.push('Salary is mandatory, must be Positive  ');
    //             }
    //             this.setState({ errorMessages: this.tempArr });
    //             console.log(this.tempArr);
    //             console.log(this.state.errorMessages);

    //         } else {
    //             let c = -1;
    //             this.tempArr.forEach((v, i) => {
    //                 if (v == "Salary is mandatory, must be Positive  ") {
    //                     c = i;
    //                 }
    //             });
    //             if (c >= 0) {
    //                 this.tempArr.splice(c, 1);
    //                 this.setState({ errorMessages: this.tempArr });
    //             }

    //             this.setState({ isEmpNoValid: true });
    //             this.setState({ isFormValid: true });
    //         }
    //     }
    // }

    return (
        <div className="container">
            <h2 align='center'>Enter New Employee Details</h2>
            <div className="form-group">
                <label>EmpNo</label>
                <input type="number" className="form-control"
                    name="EmpNo"
                    value={employee.EmpNo}
                    onChange={(evt) => updateEmp({ ...employee, EmpNo: evt.target.value })} />
            </div>
            <div className="form-group">
                <label>EmpName</label>
                <input type="text" className="form-control"
                    name="EmpName"
                    value={employee.EmpName}
                    onChange={(evt) => updateEmp({ ...employee, EmpName: evt.target.value })} />
            </div>
            <div className="form-group">
                <label>Designation</label>
                <input type="text" className="form-control"
                    name="Designation"
                    value={employee.Designation}
                    onChange={(evt) => updateEmp({ ...employee, Designation: evt.target.value })} />
            </div>
            <div className="form-group">
                <label>Salary</label>
                <input type="number" className="form-control"
                    name="Salary"
                    value={employee.Salary}
                    onChange={(evt) => updateEmp({ ...employee, Salary: evt.target.value })} />
            </div>
            <div className="form-group">
                <label>DeptNo</label>
                <input type="number" className="form-control"
                    name="DeptNo"
                    value={employee.DeptNo}
                    onChange={(evt) => updateEmp({ ...employee, DeptNo: evt.target.value })} />
            </div>
            <input type="button" value="Clear" onClick={clear} className="btn btn-warning" />
            <input type="button" value="Save" onClick={save}
                // disabled={!(this.state.isFormValid && this.state.isEmpNameValid && this.state.isEmpNoValid && this.state.Salary)}
                disabled={!(employee.EmpNo && employee.EmpName && employee.Designation && employee.Salary && employee.DeptNo
                    && (employee.EmpNo > 0) && (employee.Salary > 0))}
                className="btn btn-success" />
            <br />
            <input type="button" value="Back" onClick={back} className="btn btn-info" />

            {/* <ValidationSummaryComponent messages={this.state.errorMessages}></ValidationSummaryComponent> */}
        </div>
    );
};

const mapDispatchToProps = {
    // prop : actual action creator
    postEmp: postEmployee, // action for POST_DEPARTMENT
};

export default connect(null, mapDispatchToProps)(CreateEmp);