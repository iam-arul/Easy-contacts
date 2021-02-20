import { CLEAR_CREATE_CONTACT } from "../../constants/actionTypes";

export const ClearCreateContact = () => (dispatch) => {
    dispatch({
        type : CLEAR_CREATE_CONTACT
    });

   
}