import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Day11
// import CalciComponent from './Componenets/calciComponent';

//Day12 
//import EmployeeComponent from './Componenets/employeeCompenent/employeecomponent';

//Day14
//  import { BrowserRouter } from 'react-router-dom';
//  import MainComponent from './routingapp/maincomponent';

//Day15
// import StateComponent from './hooks/stateComponent';
// import UseEffectAjaxComponent from './hooks/useEffectAjax';

//Day16
// to create a Application State for the application
// import { createStore } from "redux";
// import reduecrs from './reduxapp/reducers/reducers';
// import {Provider} from 'react-redux';
// import MainReduxComponent from './reduxapp/mainreduxcomponent';

// let's create a store and configure it to the reducers so that all dispatched
// actions will be monitored by reducer under the store
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(), using browser's extension for redux to simulate
// dispatched actions and store 

// let store = createStore(reduecrs,
//    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
//   <Provider store={store}>: means the 'store' is configure for

// all react components inside the 'Provider'
// when any component dispatch action using 'useDispatch()'
// its output will be monitored by reducre and accrodingly the store will be updated

//import UseReducerComponent from './hooks/reducerhook';

//Day17
// import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from 'redux-saga';
// import reducer from './sagaapp/reducers/reducers';
// import rootSaga from './sagaapp/sagas/sagaindex';
// import { Provider } from "react-redux";
// import MainSagaComponent from './sagaapp/mainsagacomponent';
// // create a SagaMiddlewareb instance
// const appSagaMiddlewareInstance = createSagaMiddleware();
// // create a parameter enhancer object that will be used to configure the REDUX DEVTOOLS for the store (optional) 
// const parameterEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // create a store object and configure reducer and SAGA middleware to it
// // let store = createStore(reducer, middleware, devtools); <-- depticated
// // react 16.8+ and the redux 4.0+
// let store = createStore(reducer, parameterEnhancer(applyMiddleware(appSagaMiddlewareInstance)));
// // keep the middleware running so that all actions will be monitored
// appSagaMiddlewareInstance.run(rootSaga);

//Day18
//import JwtClientComponent from './hooks/jwtclientcomponent';

//Project
import { BrowserRouter } from 'react-router-dom';
import MainComp from './CrudProject/maincomp';

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from './CrudProject/reducer/reducer';
import rootSaga from './CrudProject/sagas/sagaindex';
import { Provider } from "react-redux";
//import MainSagaComponent from './sagaapp/mainsagacomponent';
const appSagaMiddlewareInstance = createSagaMiddleware();
const parameterEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, parameterEnhancer(applyMiddleware(appSagaMiddlewareInstance)));
appSagaMiddlewareInstance.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainComp></MainComp>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


 // <CalciComponent /> 
 //<EmployeeComponent/> 
 //<StateComponent/> 
 //<UseEffectAjaxComponent/> 
// <UseReducerComponent></UseReducerComponent> 

//  <BrowserRouter>
//     <MainComponent></MainComponent>
//     </BrowserRouter> 

//  <Provider store={store}>
//        <MainReduxComponent></MainReduxComponent>
//      </Provider> 

//  <Provider store={store}>
//  <MainSagaComponent></MainSagaComponent>
//  </Provider>

 //<JwtClientComponent/> 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
