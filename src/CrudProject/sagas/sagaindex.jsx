import { Httpservice} from "./../../services/httpservice";

import { takeLatest, call, put, all } from "redux-saga/effects";
let serv = new Httpservice();

function getEmployee(){
    //let serv = new Httpservice();
    // access a method from the service
    // and get the response as promise aka subscribe to promise
    const response = serv.getEmpData().then((result)=> result.data);
    console.log(`In getEmployee ${response}`);
    // return a response from the this method as resolve of the promise
    return Promise.resolve(response); 
}

function postEmployee(emp){
    //let serv = new HttpService();
    const response = serv.postEmpData(emp).then((result)=>result.data);
    return Promise.resolve(response);
}

function putEmployee(emp){
    console.log(`in putEmployee`);
    const response = serv.putEmpData(emp).then((result)=>result.data);
    return Promise.resolve(response);
}

function deleteEmployee(id){
    const response = serv.deleteEmpData(id).then((result)=>result.data);
    return Promise.resolve(response);
}

// 2. the posible output action that will contains the RESPONSE (if any or error)

function* getEmployeeGenerator(){
    console.log('Processing the GET_EMPLOYEE and wating for Reponse');
    // subscribe to the promise resolve and yield data from the collection
    // if any
    const response = yield call(getEmployee);
    console.log(`After the yield call response \n ${response}`);
    // dispatch the output action
    yield put({
        type:'GET_EMPLOYEE_SUCCESS',
        employee: response.response || {error: 'ERROR_OCCURED'}
    });
}

// 1. the generator method that will be used to listent to the dispatched
// action from any view under the <Provider> that is subscribed to the store
// in this case we will listed to GET_DEPARTMENTS action

function* listenToGetEmployeeDispatchedAction(){
    console.log('Listening to GET_EMPLOYEE Action');
    // the dispatched action and link it with the possible output action
    yield takeLatest('GET_EMPLOYEE', getEmployeeGenerator);
} 


// 4. the function for displatching output action for ADD_DEPARTMENT as ADD_DEPARTMENT_SUCCESS
// action is the parameter that represents the return type from the dispatched action
function* postEmployeeSuccess(action){
    // read thye payload from the action
    const postedData = action.payload;
    console.log(`Data Received from UI for posting = ${JSON.stringify(postedData)}`);
    // call the method tompost data
    const response = yield call(postEmployee, postedData);
     // yield the output action
     console.log(response);
     yield put({
        type: 'POST_EMPLOYEE_SUCCESS',
        employee: response.data
    });

}

// 3. the function for handling ADD_DEPARTMENT action

function* listenToPostEmployeeDispatchAction(){
    // the second parameter is the workwr action that will be
    // dispatching the respons action
    // it is of the type worker:(action:Action<any>)
    // this means the action that is dispatched along with the
    // returned payload i.e. saveDepartment() {return {type:ADD_DEPARTMENT, payload:departmet}}  
    // here action is {type:ADD_DEPARTMENT, payload:department} object
    console.log('in listenToPostEmployeeDispatchAction');
    yield takeLatest('POST_EMPLOYEE', postEmployeeSuccess);
   
}

function* putEmployeeSuccess(action){
    const putdata = action.payload;
    console.log('in putEmployeeSuccess generator')
    console.log('Data to POST: ', JSON.stringify(putdata));
    const response = yield call(putEmployee, putdata);
    yield put({
        type: 'PUT_EMPLOYEE_SUCCESS',
        employee: response
    });
}

function* listenToPutEmployeeDispatchAction(){
    console.log('in listenToPutEmployeeDispatchAction generator')
    yield takeLatest('PUT_EMPLOYEE', putEmployeeSuccess);
}

function* deleteEmployeeSuccess(action){
    const delData = action.payload;
    console.log('Data to Delete: ', JSON.stringify(delData));
    const response = yield call(deleteEmployee, delData);
    yield put({
        type: 'DELETE_EMPLOYEE_SUCCESS',
        employee: response
    });
}

function* listenToDeleteEmployeeDispatchAction(){
    yield takeLatest('DELETE_EMPLOYEE', deleteEmployeeSuccess);
}

// last step
// create a root saga object that will combine all 
// request and response saga generators. This root saga
// object will be loaded on store at application level
// so that dispatched actions will be listeded

export default function* rootSaga(){
    console.log('1. Root Saga is initialized');
    yield all([listenToGetEmployeeDispatchedAction(), listenToPostEmployeeDispatchAction(),
        listenToPutEmployeeDispatchAction(), listenToDeleteEmployeeDispatchAction()]);
}
