import React, { Component } from 'react';
import ListDepartmentComponent from './listdeptcomponent';
import CreateDepartmentComponent from './createdeptcomponent';
import EditDepartmentComponent from './editdeptcomponent';
import CreateEmployeeComponent from './createempcomponent';
import ListEmployeeComponent from './listempcomponent';
import EditEmployeeComponent from './editempcomponent';
// import the routing
import { Route, Link, Switch, Redirect } from "react-router-dom";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container">
              <h2>The React.js Routing App</h2>

              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    {/* Define route links so that correctponding componenent will be loaded */}
                    {/* <td>                 
                      <Link to="/"></Link>
                    </td> */}
                    <td>
                      <Link to="/listdep">List Departments</Link>
                    </td>
                    <td>
                        <Link to="/listemp">List Employees</Link>
                    </td>
                    <td>
                    <Link to="/create">Create Department</Link>
                  </td>
                  <td>
                    <Link to="/createemp">Create Employee</Link>
                  </td>
                  </tr>
                </tbody> 
              </table>

              {/* Defining The Route Table */}
              <Switch>
                <Route exact path="/listdep" component={ListDepartmentComponent}></Route>
                <Route exact path="/listemp" component={ListEmployeeComponent}></Route>
                <Route exact path="/create" component={CreateDepartmentComponent}></Route>
                <Route exact path="/createemp" component={CreateEmployeeComponent}></Route>
                {/* the route parameter */}
                <Route exact path="/edit/:id" component={EditDepartmentComponent}></Route>
                <Route exact path="/editemp/:id" component={EditEmployeeComponent}></Route>
                <Redirect to="/"></Redirect>
              </Switch>
            </div>
        );
    }
}
 
export default MainComponent;