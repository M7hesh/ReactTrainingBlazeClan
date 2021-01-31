import React, { Component } from 'react';
import { HttpSrevice } from "./../../services/httpservice";

class DepartmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            DeptNo:0,
            DeptName: '',
            Location: '',
            Capacity:0,
            departments:[],
            errorMessage: ''
        };
        this.serv = new HttpSrevice();
    }

    // subscribe to the HttpService to receive the data
    componentDidMount(){
        this.serv.getData().then((resp)=>{
            this.setState({departments:resp.data.response});
        }).catch((error)=>{
            this.setState({errorMessage: `Error Occured ${error.message}`});
        });
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

    render() { 
        return (  
            <div className="container">
            <h2>The Department Infromation</h2>
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
<hr/>
   <div className="container"> {JSON.stringify(this.state.departments)}</div>
   <hr/>
   <div>
     <strong>{this.state.errorMessage}</strong>
   </div>
          </div>

        );
    }
}
 
export default DepartmentComponent;