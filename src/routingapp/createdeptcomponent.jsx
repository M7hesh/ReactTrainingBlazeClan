import React, { Component } from 'react';
import { Httpservice } from "./../services/httpservice";

class CreateDepartmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            DeptNo:0,
            DeptName: '',
            Location: '',
            Capacity:0,
        };
        this.serv = new Httpservice();
    }
    handleChanges(evt){
        this.setState({[evt.target.name]:evt.target.value});
    }

    save(){
        let dept = {
            DeptNo:this.state.DeptNo,
            DeptName: this.state.DeptName,
            Location: this.state.Location,
            Capacity: this.state.Capacity
        };
        this.serv.postData(dept).then((resp)=>{
             console.log(JSON.stringify(resp.data));
             // if the save is successful then move to the List Departments Compoent
             // based on the Router-History.provider, that is storing the History of routing
             // the this.props.history object will be received in current component from
             // Browser--> window --> BrowserRouter-->Router-->Router-History.Provider -->  
             // ---> MainComponent --> Link & Swicth --> CreateDepartmentComponent
             this.props.history.push('/listdep');
        }).catch((error)=>{
            this.setState({errorMessage: `Error Occured ${error.message}`});
        });
    }

    clear(){
        this.setState({DeptNo:0});
        this.setState({DeptName:''});
        this.setState({Location:''});
        this.setState({Capacity:0});
    }

    back(){
        this.props.history.push('/');
    }


    componentWillUnmount(){
        console.log('Create Component is UnMounted');
    }

    render() { 
        return (  
            <div className="container">
            <h2>Enter Department Details</h2>
            <div className="form-group">
              <label>DeptNo</label>
              <input type="text" className="form-control"
              name="DeptNo"
              value={this.state.DeptNo}
              onChange={this.handleChanges.bind(this)}
              />
            </div>
            <div className="form-group">
                <label>DeptName</label>
                <input type="text" className="form-control"
                name="DeptName"
                value={this.state.DeptName}
                onChange={this.handleChanges.bind(this)}
                  />
          </div>
          <div className="form-group">
          <label>Location</label>
          <input type="text" className="form-control"
          name="Location"
          value={this.state.Location}
          onChange={this.handleChanges.bind(this)}
            />
        </div>
        <div className="form-group">
        <label>Capacity</label>
        <input type="text" className="form-control"
        name="Capacity"
        value={this.state.Capacity}
        onChange={this.handleChanges.bind(this)}
          />
      </div>
      <input type="button" value="Clear"  onClick={this.clear.bind(this)}  className="btn btn-warning"/>
      <input type="button" value="Save" onClick={this.save.bind(this)}  className="btn btn-success"/>
      <br/>
      <input type="button" value="Back" onClick={this.back.bind(this)}  className="btn btn-info"/>
 
          </div>

        );
    }
}
 
export default CreateDepartmentComponent;