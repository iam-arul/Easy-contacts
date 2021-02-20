import { CLEAR_CREATE_CONTACT, CONTACT_LOADING, CONTACT_LOAD_ERROR, CONTACT_LOAD_SUCCESS, CREATE_CONTACT_ERROR, CREATE_CONTACT_LOADING, CREATE_CONTACT_SUCCESS, USER_LOGOUT } from "../../constants/actionTypes";
import contactState from '../initialstate/contactInitialState';
import authState from '../initialstate/authInitialState';

const contactReducer = (state, {type, payload}) => {
    switch(type) {
        case CONTACT_LOADING:
            return {
                ...state,
                contacts : {
                    ...state.contacts,
                    loading : true
                }
            }
        case CONTACT_LOAD_SUCCESS:
            return {
                ...state,
                contacts : {
                    ...state.contacts,
                    loading : false,
                    data : payload
                }
            }
        case CONTACT_LOAD_ERROR:
            return {
                ...state,
                contacts : {
                    ...state.contacts,
                    loading : false,
                    error : true,
                    data : payload
                }
            }
        case USER_LOGOUT:
            return {
                ...state,
                contacts : contactState,
                auth : authState
            }
        case CREATE_CONTACT_LOADING:
            return {
                ...state,
                addContacts : {
                    ...state.addContacts,
                    loading : true
                }
            }
        case CREATE_CONTACT_SUCCESS:
            return {
                ...state,
                addContacts : {
                    ...state.addContacts,
                    loading : false,
                    data : payload
                },
                contacts : {
                    ...state.contacts,
                    data : [...state.contacts.data, payload]
                }
            }
        case CREATE_CONTACT_ERROR:
            return {
                ...state,
                addContacts : {
                    ...state.addContacts,
                    loading : false,
                    error : payload
                }
            }
        case CLEAR_CREATE_CONTACT:
            return {
                ...state,
                addContacts : {
                    ...state.addContacts,
                    loading : false,
                    error : null,
                    data : null
                }
            }
        default : 
        return {...state};
    }
}

export default contactReducer;