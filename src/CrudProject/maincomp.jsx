import React from 'react';
import HomeComp from './homecomp';
import ListComp from './listcomp';
import EditComp from './editcomp';
import CreateEmp from './createemp';
// import the routing
import { Route, Link, Switch, Redirect } from "react-router-dom";

const MainComp = () => {
    return (
        <div className="container">
            <h2 align = 'center'>The CRUD App</h2>
            <table className="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td align ='center'>
                            <Link to="/listemp">List Employees</Link>
                        </td>
                        <td align ='center'>
                            <Link to="/createemp">Create Employee</Link>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Defining The Route Table */}
            <Switch>
                <Route exact path="/listemp" component={ListComp}></Route>
                <Route exact path="/createemp" component={CreateEmp}></Route>
                <Route exact path="/" component={HomeComp}></Route>
                {/* the route parameter */}
                <Route exact path="/editemp/:id" component={EditComp}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </div>
    );
}

export default MainComp;