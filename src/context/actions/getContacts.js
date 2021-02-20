import axiosInstance from "../../helpers/axios";
import {CONTACT_LOADING, CONTACT_LOAD_SUCCESS, CONTACT_LOAD_ERROR, CONNECTION_ERROR} from '../../constants/actionTypes';

export const getContacts = (history) => (dispatch) => {
    console.log(axiosInstance);
    dispatch({
        type : CONTACT_LOADING
    });
    axiosInstance(history).get('/contacts/')
    .then((res) => {
       dispatch({
        type : CONTACT_LOAD_SUCCESS,
        payload : res.data
    });

    })
    .catch((err) => {
        console.log(err.response);
        dispatch({
            type : CONTACT_LOAD_ERROR,
            payload : err.response ? err.response.data : CONNECTION_ERROR
        });
    })
}