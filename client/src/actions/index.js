import {AUTH_USER, AUTH_ERROR, GET_DRIVERS, GET_MYSELF, GET_LENDERS} from "./types";

import axios from 'axios';
const TOKEN = '?access_token=9C9dCYXB222oI2gCmuWq87kMJ5IF3xx9Lw9O9rv2suIuMOI6imVJ30393zL30L4V';
//const BASE_URL = 'http://api.lendy.fr:27031/api';
const BASE_URL = 'http://localhost:27031/api';
export * from './carApiActions';
export * from './conversationActions';


export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(
            BASE_URL+'/users/register',
            formProps
        );

        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
    }
};

export const signin = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(
            BASE_URL+'/users/login',
            formProps
        );

        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials'});
    }
};

export const getDrivers = (callback, params) => async dispatch => {
    let webApiUrl = BASE_URL+'/users/drivers';
    let tokenStr = localStorage.getItem('token');
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenStr}`
    }
    try {
        const response = await axios.get(
            webApiUrl,
            {headers: headers, params: params}
            );
        dispatch({ type: GET_DRIVERS, payload: response.data });
        callback();
    }
    catch (e)
    {
        console.log(e);
    }
};

export const getLenders = (callback, params) => async dispatch => {
    let webApiUrl = BASE_URL+'/users/lenders';
    let tokenStr = localStorage.getItem('token');
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenStr}`
    }
    try {
        const response = await axios.get(
            webApiUrl,
            {headers: headers, params: params}
        );
        dispatch({ type: GET_LENDERS, payload: response.data });
        callback();
    }
    catch (e)
    {
        console.log(e);
    }
};

export const getMyself = (callback) => async dispatch => {
    let webApiUrl = BASE_URL+'/users/myself';
    let tokenStr = localStorage.getItem('token');
    console.log(tokenStr);
    try {
        const response = await axios.get(
            webApiUrl,
            {headers: {"Authorization": `Bearer ${tokenStr}`}}
        );
        dispatch({ type: GET_MYSELF, payload: response.data });
        callback();
    }
    catch (e)
    {
        console.log(e);
    }
};

export const setCarUser = (values, callback) => async dispatch => {
    let webApiUrl = BASE_URL+'/users/update';
    let tokenStr = localStorage.getItem('token');
    try {
        const response = await axios.patch(
            webApiUrl,
            values,
            {headers: {"Authorization": `Bearer ${tokenStr}`}}
        );
        dispatch({ type: GET_MYSELF, payload: response.data });
        callback();
    }
    catch (e)
    {
        console.log(e);
    }
};

export const updateUser = (values, callback) => async dispatch => {
    let webApiUrl = BASE_URL+'/users/update';
    let tokenStr = localStorage.getItem('token');
    try {
        const response = await axios.patch(
            webApiUrl,
            values,
            {headers: {"Authorization": `Bearer ${tokenStr}`}}
        );
        dispatch({ type: GET_MYSELF, payload: response.data });
        callback();
    }
    catch (e)
    {
        console.log(e);
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type:AUTH_USER,
        payload:''
    }
};
