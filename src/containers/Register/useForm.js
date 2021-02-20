import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../context/actions/register";
import { GlobalContext } from "../../context/Provider";

const useForm = () => {
    const [form, setForm] = useState({});
    const [fieldErrors, setFieldErrors] = useState({});
    const history = useHistory();

    const {authDispatch, authData : {
            auth : {loading, error, data}
        }
    } 
    = useContext(GlobalContext);

    const onChange = (e, {name, value}) => {
        console.log(form);
        setForm({...form, [name] : value});
    }

    const isRegisterFormValid = 
        !form.uName?.length ||
        !form.fName?.length ||
        !form.lName?.length ||
        !form.email?.length ||
        !form.password?.length;

    const onSubmit = () => {
        setFieldErrors({});
        register(form)(authDispatch);
    }

    useEffect(() => {
        if(error) {
            for(const err in error) {
                setFieldErrors({
                    ...fieldErrors,
                    [err] : error[err][0]
                })
            }
        }

    }, [error]);

    useEffect(() => {
        if(data) {
            history.push('/auth/login');
        }
    }, [data]);
    
    return {
        form,
        onChange,
        isRegisterFormValid,
        onSubmit,
        loading,
        fieldErrors
    }
}

export default useForm;