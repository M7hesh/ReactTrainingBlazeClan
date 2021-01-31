// post action
export const postEmployee = (employee) => {
    console.log(`In postEmployee action creator ${JSON.stringify(employee)}`);
    return {
        type: 'POST_EMPLOYEE', // the output action
        payload: employee // the data of the output action
    };
};

// read action
export const getEmployee=()=>{
    console.log('In getEmployee action creator');
    return {
        type: 'GET_EMPLOYEE'
    };
};

//put action
export const putEmployee=(employee)=>{
    console.log('in PUT action creator')
    return{
        type: 'PUT_EMPLOYEE',
        payload: employee
    };
};

//delete data
export const deleteEmployee=(id)=>{
    return{
        type: 'DELETE_EMPLOYEE',
        payload: id
    };
};