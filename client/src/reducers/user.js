import {GET_MYSELF} from "../actions/types";

const INITIAL_STATE = {
    myself: ''
};

export default function(state = INITIAL_STATE, action){
    switch(action.type)
    {
        case GET_MYSELF:
            return {...state, myself: action.payload};
        default:
            return state
    }
}