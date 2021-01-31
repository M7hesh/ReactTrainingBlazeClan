import React, { Component } from 'react';
class GridComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            tableColumnHeaders: Object.keys(this.props.dataSource[0]) //returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
        };
    }

    rowClick=(e)=>{
        // the props function
        // accept the selected row value when the
        if(e !== undefined) {
            this.props.emitSelectedRow(e);

        }   
    }

    handleDelete=(e,index)=>{
        e.stopPropagation();
        console.log('index', index);
        // the props function
        // accept the selected row value when the
        if(index !== undefined) {
            this.props.handleDelete(index);

        }   
    }


    render() { 
        console.log('this.props.dataSource', this.props.dataSource)
         if(this.props.dataSource === undefined || this.props.dataSource.length == 0 ){
             return (<div>No Records</div>);
         } else {
             return(
                 <div>
                 <h2>Grid Component</h2>
                 <table className="table table-bordered table-striped table-danger">
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
                            this.props.dataSource.map((row,index)=>(
                                <tr key={index} onClick={()=>this.rowClick(row)}>
                                   {
                                       this.state.tableColumnHeaders.map((col,idx)=>(
                                           <td key={idx}>{row[col]}</td>
                                       ))
                                   } 
                                   <td hidden={!this.props.canDelete}>
                                     <input type="button" value="delete" onClick={(e)=> this.handleDelete(e,index)} className="btn btn-warning"/>
                                   </td>
                                </tr>
                            ))
                        }  
                   </tbody>
                 </table>
                 </div>
             );
         }
    }
}
 
export default GridComponent;