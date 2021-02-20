
import React from 'react'
import LoginForm from '../../layouts/Login';
import useForm from './useForm';


const LoginContainer = () => {

    return (
        <>
            <LoginForm formData={useForm()}/>
       </>
    )
}

export default LoginContainer;
