import React, { Component } from 'react';
import { Departments, Designations } from './../../models/constants';
import { Logic } from "./../../models/logic";
import DropDownComponent from './../reusablecomponents/dropdowncomponent';
import GridComponent from './../reusablecomponents/gridComponent';
class EmployeeComponent extends Component {
    /**
     * @param {any} props
     */
    constructor(props) {
        super(props);
        this.state = {
            EmpNo: 0,
            EmpName: '',
            DeptName: '',
            Designation: '',
            Salary: 0,
            departments: Departments, // store constant array
            designations: Designations, // store constant array
            employees: [],
            tableColumnHeaders: [],
            sortKey: "",
            sortOrder: "asc"
            // employees: [
            //     { EmpNo: 101, EmpName: 'Akash', DeptName: 'IT', Designation: 'Manager', Salary: 10000 },
            //     { EmpNo: 102, EmpName: 'Mukesh', DeptName: 'HRD', Designation: 'Lead', Salary: 12000 },
            //     { EmpNo: 103, EmpName: 'Abhay', DeptName: 'SALES', Designation: 'Manager', Salary: 30000 },
            //     { EmpNo: 104, EmpName: 'Nandu', DeptName: 'TRAINING', Designation: 'Trainer', Salary: 17000 }
            // ],
        };
        // define an instance of Logic class
        this.logic = new Logic();
        this.state.employees = this.logic.getEmployees();
        this.state.tableColumnHeaders = Object.keys(this.state.employees[0]);
    }


    // use componentDidMount() method to perform all time consuming tasks
    // e.g. AJAX Calls or all suc operation those are delayed because of
    // some inconsistencies

    // componentDidMount=()=>{
    //     alert('In Component Did Mount');
    //     // set the initial value of the state in Constructor thats why the render() method
    //     // will take the initial value for employees and rendering HTML Table 
    //     this.state.employees =  this.logic.getEmployees();
    //     alert(JSON.stringify(this.state.employees));
    //     // read all object keys for 0th record in employees array
    //     // this is the initial value for state so render() methdo will accept it
    //     // for generating HTML DOM
    //     if(this.state.employees.length >0){
    //         this.state.tableColumnHeaders = Object.keys(this.state.employees[0]);
    //     }
    // }



    /**
     * @param {{ target: { name: any; value: any; }; }} evt
     */
    handleValueChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    clear = () => {
        this.setState({ EmpNo: 0 });
        this.setState({ EmpName: '' });
        this.setState({ DeptName: '' });
        this.setState({ Designation: '' });
        this.setState({ Salary: 0 });

    };

    save = () => {
        let emp = {
            EmpNo: this.state.EmpNo,
            EmpName: this.state.EmpName,
            DeptName: this.state.DeptName,
            Designation: this.state.Designation,
            Salary: this.state.Salary
        };
        // direct state update not allows with new values for state properties
        // use setState()
        // this.state.employees = emps;


        // perform state mutation using setState()
        // since the collection state properties 
        // delays the execution for update, pass the callback parameter 
        // to setState() method so that the the setState() will execute the callback 
        // and during that time the collection will be updated asynchronously
        this.setState({ employees: [...this.state.employees, emp] });
        //this.setState({employees: emps},()=>{});


        console.log(`EMployees = ${JSON.stringify(this.state.employees)}`);
    };

    getSelectedEmp = (e) => {

        this.setState({ EmpNo: e.EmpNo });
        this.setState({ EmpName: e.EmpName });
        this.setState({ DeptName: e.DeptName });
        this.setState({ Designation: e.Designation });
        this.setState({ Salary: e.Salary });
    };
    getSelectedDeptName = (val) => {
        console.log(`DeptName ${val}`);
        this.setState({ DeptName: val });
    };

    getSelectedDesignation = (val) => {
        console.log(`Designation ${val}`);
        this.setState({ Designation: val });
    };

    getSortKey = (val) => {
        console.log(`Sort Key ${val}`);
        this.setState({ sortKey: val });
    };

    setSort = (e) => {
        this.setState({ sortOrder: e.target.value });
    };

    sortfunc = () => {
        let tempEmp = [...this.state.employees];
        tempEmp.sort((a,b) => {
            if(a[sortKey] > b[sortKey]){
                return 1;
            }
            else if(a[sortKey] < b[sortKey]){
                return -1;
            }
            else{
                return 0;
            }
        })
        this.setState({ employees:[...tempEmp]});
        console.log('in sort func: ', this.state.employees);
    }

    deleteRow = (index) => {
        console.log('test index', index)
        const temp = [...this.state.employees];
        temp.splice(index, 1);
        console.log('temp', temp);
        this.setState({
            employees: [...temp]
        }, () => console.log('this.state.employees', this.state.employees));
    }

    render() {

        return (
            <div className="container">
                <h2>The Employee Infromation</h2>
                <div className="form-group">
                    <label>EmpNo</label>
                    <input type="text" className="form-control"
                        name="EmpNo"
                        value={this.state.EmpNo}
                        onChange={this.handleValueChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label>EmpName</label>
                    <input type="text" className="form-control"
                        name="EmpName"
                        value={this.state.EmpName}
                        onChange={this.handleValueChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label>DeptName</label>
                    {  /* generate the <option> in DOM Tree based on Collection 
                <select className="form-control"
                name="DeptName"
                value={this.state.DeptName}
                 onChange={this.handleValueChange.bind(this)}>
                   {
                      
                       this.state.departments.map((dept,index)=>(
                           <option key={index} value={dept}>{dept}</option>
                       ))
                   }
                 </select> */}
                    <DropDownComponent
                        stateData={this.state.DeptName}  //value
                        dataSource={this.state.departments}  //options
                        //value on change
                        selectedValue={this.getSelectedDeptName.bind(this)}>
                    </DropDownComponent>
                </div>
                <div className="form-group">
                    <label>Designation</label>

                    {  /* generate the <option> in DOM Tree based on Collection 
                 <select className="form-control"
                name="Designation"
                value={this.state.Designation}
                 onChange={this.handleValueChange.bind(this)}>
                 {
                   
                    this.state.designations.map((desig,index)=>(
                        <option key={index} value={desig}>{desig}</option>
                    ))
                }
            </select> */}
                    <DropDownComponent
                        stateData={this.state.Designation}
                        dataSource={this.state.designations}
                        selectedValue={this.getSelectedDesignation.bind(this)}>
                    </DropDownComponent></div>
                <div className="form-group">
                    <label>Salarys</label>
                    <input type="text" className="form-control"
                        name="Salary"
                        value={this.state.Salary}
                        onChange={this.handleValueChange.bind(this)} />
                </div>
                <div className="form-group">
                    <input type="button" value="Clear" onClick={this.clear.bind(this)} className="btn btn-warning" />
                    <input type="button" value="Save" onClick={this.save.bind(this)} className="btn btn-success" />
                </div>
                <hr />
                <div> <DropDownComponent
                    stateData={this.state.sortKey}
                    dataSource={this.state.tableColumnHeaders}
                    selectedValue={this.getSortKey.bind(this)}>
                </DropDownComponent></div>



                <div className="btn-group">
                    <input type="button" value="asc" onClick={this.sortfunc.bind(this)} className="btn btn-info"
                    flag={this.state.sortOrder==="asc"}/>Sort Asc</div>



                {/* <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label
                        className={`btn btn-secondary ${this.state.sortOrder === "asc" ? "active" : ""
                            }`}
                    >
                        <input
                            type="radio"
                            name="reverse"
                            id="option1"
                            value="asc"
                            checked={this.state.sortOrder === "asc"}
                            onChange={this.setSort.bind(this)}
                        />
              Sort Ascending
            </label>
                    <label
                        className={`btn btn-secondary ${this.state.sortOrder === "dsc" ? "active" : ""
                            }`}
                    >
                        <input
                            type="radio"
                            name="reverse"
                            id="option2"
                            value="dsc"
                            checked={this.state.sortOrder === "dsc"}
                            onChange={this.setSort.bind(this)}
                        />
              Sort Descending
            </label>
                </div> */}

                {/* <h2>The Employee List</h2> */}
                {/* Heard Code HTML Table */}
                {/* <table className="table table-bordered table-striped table-dark">
          <thead>
               <tr>
                <th>EmpNo</th>
                <th>EmpName</th>
                <th>DeptName</th>
                <th>Designation</th>
                <th>Salary</th>
               </tr> 
          </thead>
          <tbody>
            {
                this.state.employees.map((emp,index)=>(
                    <tr key={index}>
                      <td>{emp.EmpNo}</td>
                      <td>{emp.EmpName}</td>
                      <td>{emp.DeptName}</td>
                      <td>{emp.Designation}</td>
                      <td>{emp.Salary}</td>
                    </tr>
                ))
            }
          </tbody>
        </table>*/}
                {/* Dynamic Table Generation */}
                {/*  <h6>Dynamic Table</h6>
         <table className="table table-bordered table-striped table-dark">
            <thead>
              <tr>
               {
                   this.state.tableColumnHeaders.map((col,idx)=>(
                       <th key={idx}>{col}</th>
                   ))
               }
              </tr>
            </thead>
            <tbody>
             {
                this.state.employees.map((emp,index)=>(
                    <tr key={index} onClick={()=>this.getSelectedEmp(emp)}>
                    {
                        this.state.tableColumnHeaders.map((col,idx)=>(
                            <td key={idx}>{emp[col]}</td>
                        ))
                    }
                  
                    </tr>
                ))
             }
            </tbody>
            </table> */}
                <br />
                <GridComponent
                    dataSource={this.state.employees}
                    canDelete={true}
                    emitSelectedRow={this.getSelectedEmp.bind(this)}
                    handleDelete={this.deleteRow}>
                </GridComponent>
            </div>

        );

    }
}

export default EmployeeComponent;