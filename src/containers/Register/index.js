import React from 'react'
import RegisterForm from '../../layouts/Register';
import useForm from './useForm';


const RegisterContainer = () => {

    return (
       <RegisterForm formData={useForm()}/>
    )
}

export default RegisterContainer;
