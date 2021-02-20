import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionTypes";
import axiosInstance from "../../helpers/axios";
export const register = ({
    email,
    password,
    uName : username,
    fName : first_name,
    lName : last_name
}) => (dispatch) => {
    dispatch({
        type : REGISTER_LOADING
    })
    console.log(axiosInstance);
    axiosInstance().post('/auth/register', {
        email,
        password,
        username,
        first_name,
        last_name 
    })
    .then((res) => {
        dispatch({
            type : REGISTER_SUCCESS,
            payload : res.data
        })
    })
    .catch((err) => {
        dispatch({
            type : REGISTER_ERROR,
            payload : err.response.data
        })
    })
}