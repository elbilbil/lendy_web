import {GET_CONVERSATIONS_UNREAD} from "../actions/types";

const INITIAL_STATE = {
    unread: '',
    all:'',
    current:''
};

export default function(state = INITIAL_STATE, action){
    switch(action.type)
    {
        case GET_CONVERSATIONS_UNREAD:
            return {...state, unread: action.payload};
        default:
            return state
    }
}