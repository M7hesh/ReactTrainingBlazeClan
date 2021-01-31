// read action
export const getDepartments=()=>{
    console.log('get departments accesseds');
    return {
        type: 'GET_DEPARTMENTS'
    };
};

// write
export const saveDepartment=(department)=>{
    return {
        type: 'ADD_DEPARTMENT',
        payload: department
    };
};

//put action
export const putDepartment=(department)=>{
    console.log('in PUT action creator')
    return{
        type: 'PUT_DEPARTMENT',
        payload: department
    };
};

//delete data
export const deleteDepartment=(id)=>{
    return{
        type: 'DELETE_DEPARTMENT',
        payload: id
    };
};