import { useContext,  useEffect,  useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../context/actions/login";
import { GlobalContext } from "../../context/Provider";

const useForm = () => {
    const [form, setForm] = useState({});

    const location = useHistory(); 

    const {authDispatch, authData : {
            auth : {loading, error, data}
        }
    } 
    = useContext(GlobalContext);

    useEffect(() => {
       if(data && data.user) {
        location.push('/');
       }
    }, [data]);

    const onChange = (e, {name, value}) => {
        console.log(form);
        setForm({...form, [name] : value});
    }

    const isLoginFormValid = !form.username?.length || !form.password?.length;

    const onSubmit = () => {
        login(form)(authDispatch);
    }

    return {
        form,
        onChange,
        isLoginFormValid,
        onSubmit,
        loading,
        error
    }
}

export default useForm;