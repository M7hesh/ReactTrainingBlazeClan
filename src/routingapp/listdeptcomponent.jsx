import React, { Component } from 'react';
import { Httpservice } from "./../services/httpservice";
import { Link } from "react-router-dom";

class ListDepartmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: []
        };
        this.serv = new Httpservice(); //instance of the the class httpservice
    }
    // subscribe to the HttpService inside componentDidMount to receive the data 
    componentDidMount() {
        this.serv.getData().then((resp) => {
            this.setState({ departments: resp.data.response });
        }).catch((error) => {
            this.setState({ errorMessage: `Error Occured at  componentDidMount() ${error.message}` });
        });
    }

    componentWillUnmount() {
        console.log('Dept List Component is UnMounted');
    }

    deleteRecord(id) {
        this.serv.deleteData(id).then((resp) => {
            console.log('Dep record Deleted');
            // reload the window
            window.location.reload();
        }).catch((error) => {
            console.log(`Error in Dep Delete ${error}`);
        });
    }

    back(){
        this.props.history.push('/');
    }

    render() {
        if (this.state.departments.length === 0) {
            return (<div>No records</div>);
        } else {
            return (
                <div className="container">
                    <h2>Department List</h2>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>DeptNo</th>
                                <th>DeptName</th>
                                <th>Location</th>
                                <th>Capacity</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departments.map((d, i) => (
                                    <tr key={i}>
                                        <td>{d.DeptNo}</td>
                                        <td>{d.DeptName}</td>
                                        <td>{d.Location}</td>
                                        <td>{d.Capacity}</td>
                                        <td>
                                            <button className="btn btn-warning">
                                                <Link to={`/edit/${d.DeptNo}`}>Edit</Link>
                                            </button>
                                        </td>
                                        <td>
                                            <input type="button" value="Delete" className="alert alert-danger"
                                                onClick={() => { this.deleteRecord(d.DeptNo) }} />
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

export default ListDepartmentComponent;