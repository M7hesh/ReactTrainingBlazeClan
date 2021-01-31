import React, {useContext} from 'react';

//import { DataContext } from "./dataContext";
import { EmpContext } from './useEffectAjax';

const TableContextComponent=()=>{

    // read data from DataContext
    // recive data from Context
   
    //const consumeValues = useContext(DataContext);  
    
    const empValues = useContext(EmpContext);
    
    //console.log(JSON.stringify(consumeValues));
    console.log(JSON.stringify(empValues));


    //if(consumeValues.length === 0){
    if(empValues.length === 0){
        return (<div>No Data Received Yet</div>)
    } else {
        // storeding keys of the data received from DataContext
        // so that columns can be generated
        let columns = [];
        //columns = Object.keys(consumeValues[0]);
        columns = Object.keys(empValues[0]);
        return (
            <div className="container">
                {/* <h6>Dynamic Table</h6> */}
                <table className="table table-bordered table-striped table-danger">
                <thead>
                     <tr>
                       {
                          columns.map((col,idx)=>(
                               <th key={idx}>{col}</th>
                           ))
                       }
                     </tr>
                </thead>
                <tbody>
                     {
                        //consumeValues.map((row,index)=>(
                        empValues.map((row,index)=>(
                             <tr key={index}>
                                {
                                    columns.map((col,idx)=>(
                                        <td key={idx}>{row[col]}</td>
                                    ))
                                } 
                                
                             </tr>
                         ))
                     }  
                </tbody>
              </table>
              <br></br>
            </div>
        );
    }
}

export default TableContextComponent;