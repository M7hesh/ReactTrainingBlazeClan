import React, { Component } from 'react';
import { Httpservice } from "./../services/httpservice";
import  ValidationSummaryComponent from "./../../src/Componenets/reusablecomponents/validationSummary";

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EmpNo: 0,
            EmpName: '',
            Designation: '',
            Salary: 0,
            DeptNo: 0,

            isEmpNoExists: false,
            isEmpNameValid:true,
            isFormValid:false,
            errorMessages:[]
        };
        this.tempArr=[];
        this.serv = new Httpservice(); //instance of class httpservice
    }

    validateForm=(name,value)=>{
        
        if(name === "EmpNo"){
            if(parseInt(value) <= 0 || value.length >= 4){
                    this.setState({isEmpNoValid:false});
                    this.setState({isFormValid:false});
                    if(!this.tempArr.includes('EmpNo is mandatory, must be +, must be max 4 in length')){
                    this.tempArr.push('EmpNo is mandatory, must be +, must be max 4 in length');}
                    this.setState({errorMessages:this.tempArr});
                    console.log(this.tempArr);
                    console.log(this.state.errorMessages);

            } else {               
               let b=-1;
                this.tempArr.forEach((v,i)=>{
                    if(v == "EmpNo is mandatory, must be +, must be max 4 in length"){
                        b = i;
                    }
                });
                if(b>=0){
                this.tempArr.splice(b,1);
               this.setState({errorMessages:this.tempArr});
                }
                
                this.setState({isEmpNoValid:true});
                this.setState({isFormValid:true});
            }

            // let eno = parseInt(value);
            // let res = this.logic.getEmployees().filter((e,i)=>{
            //         return e.EmpNo === eno;
            // });
            // if(res.length >0) {
            //     this.setState({isEmpNoExists:true});
            //     this.setState({isFormValid:false});
            // } else {
            //     this.setState({isEmpNoExists:false});
            //     this.setState({isFormValid:true});
            // }
        } 
         
        if(name === "EmpName"){
            if(value.length < 3 || value.length > 20){
                this.setState({isEmpNameValid:false});
                this.setState({isFormValid:false});
                if(!this.tempArr.includes("EmpName is mandatory, must be min 3 characters, must be max 20 characters  ")){
                this.tempArr.push("EmpName is mandatory, must be min 3 characters, must be max 20 characters  ");}
                    this.setState({errorMessages:this.tempArr});
                    console.log(this.state.errorMessages);
            } else {
                    let a=-1;
                    this.tempArr.forEach((v,i)=>{
                        if(v == 'EmpName is mandatory, must be min 3 characters, must be max 20 characters  '){
                        a = i;
                        }
            });
            if(a>=0){
               this.tempArr.splice(a,1);
                this.setState({errorMessages:this.tempArr});
            }
                this.setState({isEmpNameValid:true});
                this.setState({isFormValid:true});
            }
        }
        
        if(name === "Salary"){
            if(parseInt(value) <= 0){
                    this.setState({isEmpNoValid:false});
                    this.setState({isFormValid:false});
                    if(!this.tempArr.includes('Salary is mandatory, must be Positive  ')){
                    this.tempArr.push('Salary is mandatory, must be Positive  ');}
                    this.setState({errorMessages:this.tempArr});
                    console.log(this.tempArr);
                    console.log(this.state.errorMessages);

            } else {               
               let c=-1;
                this.tempArr.forEach((v,i)=>{
                    if(v == "Salary is mandatory, must be Positive  "){
                        c = i;
                    }
                });
                if(c>=0){
                this.tempArr.splice(c,1);
               this.setState({errorMessages:this.tempArr});
                }
                
                this.setState({isEmpNoValid:true});
                this.setState({isFormValid:true});
            }
    }
}

    handleChg(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        this.validateForm(evt.target.name, evt.target.value);
    }

    save() {
        let emp = {
            EmpNo: this.state.EmpNo,
            EmpName: this.state.EmpName,
            Designation: this.state.Designation,
            Salary: this.state.Salary,
            DeptNo: this.state.DeptNo
        };
        this.serv.postEmpData(emp).then((resp) => {
            console.log(JSON.stringify(resp.data));
            this.props.history.push('/');
        }).catch((e) => {
            this.setState({ errorMessage: `Error Occured at create emp comp save() ${e.Message}` })
        });
    }

    clear() {
        this.setState({ EmpNo: 0 });
        this.setState({ EmpName: '' });
        this.setState({ Designation: '' });
        this.setState({ Salary: 0 });
        this.setState({ DeptNo: 0 });
    }

    back(){
        this.props.history.push('/');
    }

    componentWillUnmount() {
        console.log('Create Component from Create employment is UnMounted');
    }

    render() {
        return (
            <div className="container">
                <h2>Enter Employee Details</h2>
                <div className="form-group">
                    <label>EmpNo</label>
                    <input type="text" className="form-control"
                        name="EmpNo"
                        value={this.state.EmpNo}
                        onChange={this.handleChg.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label>EmpName</label>
                    <input type="text" className="form-control"
                        name="EmpName"
                        value={this.state.EmpName}
                        onChange={this.handleChg.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <input type="text" className="form-control"
                        name="Designation"
                        value={this.state.Designation}
                        onChange={this.handleChg.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label>Salary</label>
                    <input type="text" className="form-control"
                        name="Salary"
                        value={this.state.Salary}
                        onChange={this.handleChg.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label>DeptNo</label>
                    <input type="text" className="form-control"
                        name="DeptNo"
                        value={this.state.DeptNo}
                        onChange={this.handleChg.bind(this)}
                    />
                </div>
                <input type="button" value="Clear" onClick={this.clear.bind(this)} className="btn btn-warning" />
                <input type="button" value="Save" onClick={this.save.bind(this)}
                disabled={!(this.state.isFormValid && this.state.isEmpNameValid && this.state.isEmpNoValid)}
                 className="btn btn-success" />
                <br/>
                <input type="button" value="Back" onClick={this.back.bind(this)}  className="btn btn-info"/>
 
                <ValidationSummaryComponent messages={this.state.errorMessages}></ValidationSummaryComponent>
            </div>

        );
    }

}
export default CreateEmployeeComponent;
