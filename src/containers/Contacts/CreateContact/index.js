import React from 'react'
import { Header } from 'semantic-ui-react';
import CreateContactForm from '../../../layouts/contact/create';
import useForm from './useForm';

const CreateContactContainer = () => {
    return (
        <div>
            <CreateContactForm formData = {useForm()}/>
        </div>
    )
}

export default CreateContactContainer;
