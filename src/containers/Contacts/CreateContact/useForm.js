import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ClearCreateContact } from "../../../context/actions/clearCreateContact";
import {createContact} from "../../../context/actions/createContact";
import { GlobalContext } from "../../../context/Provider";

const useForm = () => {
    const [form, setForm] = useState({});

    const [tempFile, setTempFile] = useState(null);

    const history = useHistory(); 

    const{ contactsData : {addContacts : {loading, error, data}}, contactsDispatch} = useContext(GlobalContext);

    useEffect(() => {
       if(data) {
        history.push('/');
       }

       return () => {
            ClearCreateContact()(contactsDispatch);
       }
       
    }, [data]);

    // const imageOnChange = (e) => {
    //     e.persist();
    //     console.log(e);
    // }

    const imageOnChange = (e) => {
        // e.persist();
        console.log(e);
        const FILE_URL = e.target.files[0];

        setForm({...form, contactPicture : FILE_URL});

        if (FILE_URL) {
            setTempFile(URL.createObjectURL(FILE_URL));
        }
    }

    const onChange = (e, {name, value}) => {
        setForm({...form, [name] : value});
        console.log('formIsHalfFilledOut', formIsHalfFilledOut, form);
    }

    const onClear = () => {
        setForm({});
    }

    const onSubmit = () => {
        createContact(form)(contactsDispatch);
    }

    const formIsHalfFilledOut = Object.values(form).filter(val => (val && val !== '')).length > 0 && !data;


    const isFormInvalid = 
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.country?.length ||
    !form.phoneNumber?.length;

    // const onSubmit = () => {
    //     login(form)(authDispatch);
    // }

    return {
        form,
        onSubmit,
        onChange,
        onClear,
        isFormInvalid,
        loading,
        error,
        formIsHalfFilledOut,
        imageOnChange,
        tempFile
    }
}

export default useForm;
