import React from 'react';
import { SecureHttpService } from "./../services/secreservice";

const JwtClientComponent=()=>{
    const serv = new SecureHttpService();

    const registerUser=()=>{
        const user = {
                "Id":8,
                "UserName": "vaibhav",
                "Password":"vaibhav",
                "Email":"vaibhav@msit.com"
        };
        serv.createUser(user).then((response)=> {
            console.log(`Received Response for Create ${response.data}`);
        }).catch((error)=>{
            console.log(`Error Occured ${error.message}`);
        });
    };


    const loginUser=()=>{
        const user = {
               
                "UserName": "vaibhav",
                "Password":"vaibhav"
                
        };
        serv.authUser(user).then((response)=> {
            console.log(`Received Response for Auth ${response.data}`);
            // save the tokne in local storage or session storage of the browser
            //  localStorage.setItem(key,value)
            localStorage.setItem('token', response.data.token);
        }).catch((error)=>{
            console.log(`Error Occured ${error.message}`);
        });
    };


    const getDepts=()=>{
        // receive token from localStorage using key
        const token = localStorage.getItem("token"); 
        serv.getData(token).then((response)=> {
            console.log(`Received Response for Depts ${JSON.stringify(response.data)}`);
           
        }).catch((error)=>{
            console.log(`Error Occured ${error.message}`);
        });
    };


    return (
       <div className="container">
          <table className="table table-bordered table-striped">
            <tbody>
             <tr>
               <td>
                    <div className="form-group">
                        <input type="button" value="Create User"
                         onClick={registerUser}/>
                    </div>
               </td>
               <td>
                    <div className="form-group">
                        <input type="button" value="Login User"
                         onClick={loginUser}/>
                    </div>
               </td>

               <td>
               <div className="form-group">
                   <input type="button" value="Get Data"
                    onClick={getDepts}/>
               </div>
          </td>
             </tr>
            </tbody>
          </table>
        </div>
    );
};

export default JwtClientComponent;