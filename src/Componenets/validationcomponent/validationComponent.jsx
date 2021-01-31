import React, { Component } from 'react';
import {Logic} from './../../models/logic';
import  ValidationSummaryComponent from "./../reusablecomponents/validationSummary";
class ValidationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            EmpNo:0,
            EmpName: '',
            isEmpNoValid:true,
            isEmpNoExists: false,
            isEmpNameValid:true,
            isFormValid:false,
            errorMessages:[],
         };
         this.logic = new Logic();
         this.tempArr = [];
    }
    handleValueChange=(evt)=>{
        this.setState({[evt.target.name]:evt.target.value});
        this.validateForm(evt.target.name, evt.target.value);
    }

    validateForm=(name,value)=>{
        
        if(name === "EmpNo"){
            if(parseInt(value) <= 0 || value.length >= 10){
                    this.setState({isEmpNoValid:false});
                    this.setState({isFormValid:false});
                    //this.setState({flag1:true});               
                    //tempArr.push('EmpNo is mandaory, must be +, must be max 10 in length');
                    //this.tempArr='EmpNo is mandaory, must be +, must be max 10 in length';
                    if(!this.tempArr.includes('EmpNo is mandaory, must be +, must be max 10 in length')){
                    this.tempArr.push('EmpNo is mandaory, must be +, must be max 10 in length');}
                    this.setState({errorMessages:this.tempArr});
                    console.log(this.tempArr);
                    console.log(this.state.errorMessages);

            } else {
                //pop
               // tempArr.pop();
               let b=-1;
                this.tempArr.forEach((v,i)=>{
                    if(v == "EmpNo is mandaory, must be +, must be max 10 in length"){
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

            let eno = parseInt(value);
            let res = this.logic.getEmployees().filter((e,i)=>{
                    return e.EmpNo === eno;
            });
            if(res.length >0) {
                this.setState({isEmpNoExists:true});
                this.setState({isFormValid:false});
            } else {
                this.setState({isEmpNoExists:false});
                this.setState({isFormValid:true});
            }
        } 
         
        if(name === "EmpName"){
            if(value.length < 5 || value.length > 20){
                this.setState({isEmpNameValid:false});
                this.setState({isFormValid:false});
                //tempArr.push('EmpName is mandaory, must be min 5 characters, must be max 20 characters');
                if(!this.tempArr.includes("EmpName is mandaory, must be min 5 characters, must be max 20 characters")){
                this.tempArr.push("EmpName is mandaory, must be min 5 characters, must be max 20 characters");}
                    this.setState({errorMessages:this.tempArr});
                    console.log(this.state.errorMessages);
            } else {
                //pop
                //tempArr.pop();
                //if(this.tempArr.includes("EmpName is mandaory, must be min 5 characters, must be max 20 characters")){
                    let a=-1;
                    this.tempArr.forEach((v,i)=>{
                        if(v == 'EmpName is mandaory, must be min 5 characters, must be max 20 characters'){
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
        //this.setState({errorMessages:tempArr});
    }


    save=()=>{
        alert('Submitted');    
    }
    render() { 
        return (
            <div className="container">
              <form onSubmit={this.save.bind(this)}>
              <div className="form-group">
                  <label>EmpNo</label>
                  <input type="text" className="form-control"
                  name="EmpNo"  
                  value={this.state.EmpNo}
                   onChange={this.handleValueChange.bind(this)}/>
                   <div className="alert alert-danger" hidden={this.state.isEmpNoValid}>
                      EmpNo must be Positive Numeric
                   </div>
                   <div className="alert alert-danger" hidden={!this.state.isEmpNoExists}>
                   EmpNo  is already present in array
                </div>
                </div>
                <div className="form-group">
                    <label>EmpName</label>
                    <input type="text" className="form-control"
                    name="EmpName" 
                    value={this.state.EmpName}
                     onChange={this.handleValueChange.bind(this)}/>
                     <div className="alert alert-danger" hidden={this.state.isEmpNameValid}>
                     EmpName must be min 5 char upto max 20 characters
                  </div>
              </div>
                <div className="form-group">
                    
                    <input type="submit" value="submit" disabled={!(this.state.isFormValid && this.state.isEmpNameValid && this.state.isEmpNoValid)}  className="btn btn-success"/>
                </div>
                 
              </form>
              <ValidationSummaryComponent messages={this.state.errorMessages}></ValidationSummaryComponent>
            </div>
        );
    }
}
 
export default ValidationComponent;