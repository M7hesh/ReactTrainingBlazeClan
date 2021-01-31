import React from 'react';
import { SecureHttpService } from "./../services/secreservice";
import { useState } from 'react'

const JwtClientComp = () => {
    const serv = new SecureHttpService();
    const [reguser, updateUser] = useState({ Id: 0, UserName: '', Passwords: '', Email: '' });
    const [user, updUser] = useState({ Id: 0, UserName: '', Passwords: '', Email: '' });

    const registerUser = () => {
        const tempreguser = {
            Id: reguser.Id,
            UserName: reguser.UserName,
            Passwords: reguser.Passwords,
            Email: reguser.Email
        };
        serv.createUser(tempreguser).then((response) => {
            console.log(`Received Response for Create ${response.data}`);
        }).catch((error) => {
            console.log(`Error Occured ${error.message}`);
        });
    };


    const loginUser = () => {
        const tempuser = {
            UserName: user.UserName,
            Passwords: user.Passwords
        };
        serv.authUser(tempuser).then((response) => {
            console.log(`Received Response for Auth ${response.data}`);
            // save the tokne in local storage or session storage of the browser
            //  localStorage.setItem(key,value)
            localStorage.setItem('token', response.data.token);
        }).catch((error) => {
            console.log(`Error Occured ${error.message}`);
        });
    };


    // const getDepts = () => {
    //     // receive token from localStorage using key
    //     const token = localStorage.getItem("token");
    //     serv.getData(token).then((response) => {
    //         console.log(`Received Response for Depts ${JSON.stringify(response.data)}`);

    //     }).catch((error) => {
    //         console.log(`Error Occured ${error.message}`);
    //     });
    // };


    return (
        <div className="container">
            <h2 align='center'>Register</h2>
            <div className="form-group">
                <label>Id</label>
                <input type="number" className="form-control"
                    name="Id"
                    value={reguser.Id}
                    onChange={(evt) => updateUser({ ...reguser, Id: evt.target.value })} />
            </div>

            <div className="form-group">
                <label>UserName</label>
                <input type="text" className="form-control"
                    name="UserName"
                    value={reguser.UserName}
                    onChange={(evt) => updateUser({ ...reguser, UserName: evt.target.value })} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control"
                    name="Passwords"
                    value={reguser.Passwords}
                    onChange={(evt) => updateUser({ ...reguser, Passwords: evt.target.value })} />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control"
                    name="Email"
                    value={reguser.Email}
                    onChange={(evt) => updateUser({ ...reguser, Email: evt.target.value })} />
            </div>

            <div className="form-group">
                <input type="button" value="Register User"
                    onClick={registerUser} />
            </div>

            <h2 align='center'>Login</h2>
            <div className="form-group">
                <label>UserName</label>
                <input type="text" className="form-control"
                    name="UserName"
                    value={user.UserName}
                    onChange={(evt) => updUser({ ...user, UserName: evt.target.value })} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control"
                    name="Passwords"
                    value={user.Passwords}
                    onChange={(evt) => updUser({ ...user, Passwords: evt.target.value })} />
            </div>

            <div className="form-group">
                <input type="button" value="Login User"
                    onClick={loginUser} />
            </div>

        </div>
    );
};

export default JwtClientComp;