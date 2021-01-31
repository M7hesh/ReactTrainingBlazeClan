import { Httpservice} from "./../../services/httpservice";

import { takeLatest, call, put, all } from "redux-saga/effects";
let serv = new Httpservice();
function getDepartments(){
    //let serv = new Httpservice();
    // access a method from the service
    // and get the response as promise aka subscribe to promise
    const response = serv.getData().then((result)=> result.data);
    console.log(`In getDepartments ${response}`);
    // return a response from the this method as resolve of the promise
    return Promise.resolve(response); 
}

function saveDepartment(dept){
    //let serv = new HttpService();
    const response = serv.postData(dept).then((result)=>result.data);
    return Promise.resolve(response);
}

function putDepartment(dept){
    console.log(`in putDepartment`);
    const response = serv.putData(dept).then((result)=>result.data);
    return Promise.resolve(response);
}

function deleteDepartment(id){
    const response = serv.deleteData(id).then((result)=>result.data);
    return Promise.resolve(response);
}

// 2. the posible output action that will contains the RESPONSE (if any or error)

function* fetchDepartmentsGenerator(){
    console.log('Processind the GET_DEPARTMENTS and wating fro Reponse');
    // subscribe to the promise resolve and yield data from the collection
    // if any
    const response = yield call(getDepartments);
    console.log(`After the yield call response \n ${response}`);
    // dispatch the output action
    yield put({
        type:'GET_DEPARTMENTS_SUCCESS',
        departments: response.response || {error: 'ERROR_OCCURED'}
    });
}

// 1. the generator method that will be used to listent to the dispatched
// action from any view under the <Provider> that is subscribed to the store
// in this case we will listed to GET_DEPARTMENTS action

function* listenToGetDepartmentsDispatchedAction(){
    console.log('Listening to GET_DEPARTMENTS Action');
    // the dispatched action and link it with the possible output action
    yield takeLatest('GET_DEPARTMENTS', fetchDepartmentsGenerator);
} 


// 4. the function for displatching output action for ADD_DEPARTMENT as ADD_DEPARTMENT_SUCCESS
// action is the parameter that represents the return type from the dispatched action
function* saveDepartmentSuccess(action){
    // read thye payload from the action
    const postedData = action.payload;
    console.log(`Data Receibed from UI for posting = ${JSON.stringify(postedData)}`);
    // call the method tompost data
    const response = yield call(saveDepartment, postedData);
     // yield the output action
     yield put({
        type: 'ADD_DEPARTMENT_SUCCESS',
        department: response
    });

}

// 3. the function for handling ADD_DEPARTMENT action

function* listenToAddDepartmentDispatchAction(){
    // the second parameter is the workwr action that will be
    // dispatching the respons action
    // it is of the type worker:(action:Action<any>)
    // this means the action that is dispatched along with the
    // returned payload i.e. saveDepartment() {return {type:ADD_DEPARTMENT, payload:departmet}}  
    // here action is {type:ADD_DEPARTMENT, payload:department} object
    yield takeLatest('ADD_DEPARTMENT', saveDepartmentSuccess);
   
}

function* putDepartmentSuccess(action){
    const putdata = action.payload;
    console.log('in putDepartmentSuccess generator')
    console.log('Data to POST: ', JSON.stringify(putdata));
    const response = yield call(putDepartment, putdata);
    yield put({
        type: 'PUT_DEPARTMENT_SUCCESS',
        department: response
    });
}

function* listenToPutDepartmentDispatchAction(){
    console.log('in listenToPutDepartmentDispatchAction generator')
    yield takeLatest('PUT_DEPARTMENT', putDepartmentSuccess);
}

function* deleteDepartmentSuccess(action){
    const delData = action.payload;
    console.log('Data to Delete: ', JSON.stringify(delData));
    const response = yield call(deleteDepartment, delData);
    yield put({
        type: 'DELETE_DEPARTMENT_SUCCESS',
        department: response
    });
}

function* listenToDeleteDepartmentDispatchAction(){
    yield takeLatest('DELETE_DEPARTMENT', deleteDepartmentSuccess);
}

// last step
// create a root saga object that will combine all 
// request and response saga generators. This root saga
// object will be loaded on store at application level
// so that dispatched actions will be listeded

export default function* rootSaga(){
    console.log('1. Root Saga is initialized');
    yield all([listenToGetDepartmentsDispatchedAction(), listenToAddDepartmentDispatchAction(),
         listenToPutDepartmentDispatchAction(), listenToDeleteDepartmentDispatchAction()]);
}
