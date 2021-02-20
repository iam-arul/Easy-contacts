import React, {createContext, useReducer } from "react";
import authReducer from "./reducers/auth";
import contactReducer from "./reducers/contact";
import authState from "./initialstate/authInitialState";
import contactState from "./initialstate/contactInitialState";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [authData, authDispatch] = useReducer(authReducer, authState);
    const [contactsData, contactsDispatch] = useReducer(contactReducer, contactState);

    return (
        <GlobalContext.Provider value={{
            authData,
            authDispatch, 
            contactsData,
            contactsDispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}