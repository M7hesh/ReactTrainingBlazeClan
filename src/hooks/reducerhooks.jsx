import React, {useEffect, useReducer} from 'react';
import axios from 'axios';

// define a state object

const initialState = {
    loading:"",
    error: '',
    data:[]
};

// create a reducer function that will update the state

function appReducer(state, action){
    switch(action.type) {
        case "DATA_FETCH_START":
             return {...state, loading: "yes"};
        case "DATA_FETCH_FAILURE":
             return {...state, loading: "", error: action.payload};  
        case "DATA_FETCH_SUCCESS":
            return {...state, loading: "", data: action.payload};             
        default: 
            return state;     
    }
}

// the action dispatched method created as the custom hooks in React
// this will use the useReducer() hooks to decide which case of the reducred 
// if to be executed based on dispatched action

// this action method will perform async operations
// and based on the async operations the execution will  take place 
const useAxios=(url)=>{
    // useReducer() accepts two parameters, 
    // 1. the reducer that is containing conditions to update the initialState to final state based on actions
    // 2. the state object, that will be used by the UI to show data when the reducer is executed

    // [data, dispatch], data is the state received from reducer, dispatch is the action to be dispatched 
    const [data, dispatch]= useReducer(appReducer, initialState);

    useEffect(()=>{
        dispatch({type: "DATA_FETCH_START"});

        axios(url)
            .then((response)=> {
                 if(response.status !== 200) throw Error(response.statusText);
                 return response.data;
            })
            .then((jsonData)=> {
                console.log(`Received Data ${JSON.stringify(jsonData.response)}`);
                dispatch({type: "DATA_FETCH_SUCCESS", payload: jsonData.response});
            })
           .catch((error)=>{
            dispatch({type: "DATA_FETCH_FAILURE", payload: error.message});
           });
    },[]);
    return data;
};




// UI Component that will be notified when the state is updated
const UseReducerComponent=()=>{
    // this is  local variable that will be provided with the final 
    // state of data that is receive
    const data = useAxios("http://localhost:9090/api/departments");

    if(data === undefined) {
        return (<div className="container">
           <h2>Data is yer to be received</h2>
        </div>);
    } else {
    
    return (
        <div className="container">
            <ul>
                {
                    data.data.map((d,i)=>(
                        <li key={i}>{JSON.stringify(d)}</li>
                    ))
                }
            </ul>
        </div>
        );
    }
};

export default UseReducerComponent; 