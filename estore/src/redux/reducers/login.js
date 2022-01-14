import * as actionTypes from "../actions/login/types";

const inttialState = {
    userdetails:{}
}

export const login = (state = inttialState,action)=>{
    switch(action.type){
        case actionTypes.LOGIN:
            return {userdetails: action.data}

            default:
                return state;
    }
}