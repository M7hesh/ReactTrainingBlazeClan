const selectEmployee=(emp)=>{
    // some synchronous logic here
    //employee.EmpName = employee.EmpName.toUpperCase();
    
    console.log(`In an slectEmployee action creator ${JSON.stringify(emp)}`);
    return {
        type: 'SELECT_EMPLOYEE', // the output action
        emp // the data of the output action
    };
};

export default selectEmployee;