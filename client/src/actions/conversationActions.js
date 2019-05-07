import {GET_CONVERSATIONS_UNREAD} from "./types";

import axios from 'axios';
//const BASE_URL = 'http://api.lendy.fr:27031/api';
const BASE_URL = 'http://localhost:27031/api';


export const unreadMessages = (callback) => async dispatch => {
    let tokenStr = localStorage.getItem('token');
    try {
        const response = await axios.post(
            BASE_URL+'/users/newDiscussion',
            {headers: {"Authorization": `Bearer ${tokenStr}`}}
        );

        dispatch({ type: GET_CONVERSATIONS_UNREAD, payload: response.data });
        callback();
    } catch (e) {
        console.log(e)
    }
};

