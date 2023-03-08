import React from 'react';
import {applyMiddleware} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducer from './reducer';


const middleWare=[thunk]


const Store=configureStore(
   {reducer:Reducer},
    composeWithDevTools(applyMiddleware(...middleWare))
) 

export default Store
