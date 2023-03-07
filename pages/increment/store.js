import React from 'react';
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';


const middleWare=[thunk]


const Store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
) 


 


export default Store
