import { 
    LOGIN_ERROR, 
    LOGIN_LOADING, 
    LOGIN_SUCCESS, 
    REGISTER_ERROR, 
    REGISTER_LOADING, 
    REGISTER_SUCCESS } from "../../constants/actionTypes";

const authReducer =  (state, {type, payload}) => {
    switch(type) {
        case REGISTER_LOADING:
        case LOGIN_LOADING:
            return {
                ...state,
                auth : {
                    ...state.auth,
                    error : false,
                    loading : true
                }
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                auth : {
                    ...state.auth,
                    error : false,
                    data :  payload,
                    loading : true
                }
            }
        case REGISTER_ERROR:
        case LOGIN_ERROR:
            return {
                ...state,
                auth : {
                    ...state.auth,
                    error : payload,
                    loading : false
                }
            }
        default : 
            return state;
    }
}

export default authReducer;