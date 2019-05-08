import {GET_MYSELF} from "../actions/types";
import {GET_USER} from "../actions/types";

const INITIAL_STATE = {
    myself: '',
    user: ''
};

export default function(state = INITIAL_STATE, action){
    switch(action.type)
    {
        case GET_MYSELF:
            return {...state, myself: action.payload};
        case GET_USER:
            return {...state, user: action.payload};
        default:
            return state
    }
}