import React, { useEffect, useState, createContext } from 'react';
import { Httpservice } from "./../services/httpservice";
import TableContextComponent from './tableContextComponent';

export const EmpContext = createContext();

const UseEffectAjaxComponent = () => {

    const [depts, addDept] = useState([]);
    const [emps, addEmp] = useState([]);
    const serv = new Httpservice();
    

    // useEffect(()=>{
    //     serv.getData().then((response)=>{
    //         // data will be added in array
    //         addDept(response.data);
    //     }).catch((error)=>{
    //         console.log(`Error Occured ${error}`);
    //     });
    // },[]); // --> empty array reprsents all state properties for the current component

    // return(
    //     <div className="container">
    //     <h2>Dept: Use Effect for Ajax call during the component loading</h2>
    //         {JSON.stringify(depts)}    
    //     </div>
    // );

    useEffect(() => {
        serv.getData().then((response) => {
            // data will be added in array
            addDept(response.data.response);
        }).catch((error) => {
            console.log(`Error Occured ${error}`);
        });

        serv.getEmpData().then((resp) => {
            // data will be added in array
            addEmp(resp.data.response);
        }).catch((error) => {
            console.log(`Error Occured ${error}`);
        });
    }, []); // --> empty array reprsents all state properties for the current component

    // return(
    //     <div className="container">
    //     <h2>Emp: Use Effect for Ajax call during the component loading</h2>
    //         {JSON.stringify(emps)}    
    //     </div>
    // );

    return (
        <div>
            {/* <p>{JSON.stringify(depts)}</p>
            <br></br>
            {JSON.stringify(emps)}
            <br></br> */}
            
            <EmpContext.Provider value={depts}>
                    <TableContextComponent></TableContextComponent>            
            </EmpContext.Provider>
            
            <EmpContext.Provider value={emps}>
                    <TableContextComponent></TableContextComponent>
            </EmpContext.Provider>

        </div>
    );
};



export default UseEffectAjaxComponent;