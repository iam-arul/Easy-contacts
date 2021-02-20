import { CREATE_CONTACT_ERROR, CREATE_CONTACT_LOADING, CREATE_CONTACT_SUCCESS, CONNECTION_ERROR, FIREBASE_IMAGE_PATH} from "../../constants/actionTypes";
import axiosInstance from "../../helpers/axios";
import { storage } from "../../helpers/firebase";
export const createContact =  ({
    firstName : first_name,
    lastName : last_name,
    phoneNumber : phone_number,
    country : country_code,
    contactPicture : contact_picture,
}) => (dispatch) =>{
    dispatch({
        type : CREATE_CONTACT_LOADING
    });

    const axiosCall = (url = null) => {
        axiosInstance().post('/contacts/', {
            first_name,
            last_name,
            phone_number,
            country_code,
            contact_picture : url
        })
        .then((res) => {
           dispatch({
            type : CREATE_CONTACT_SUCCESS,
            payload : res.data
        });
    
        })
        .catch((err) => {
            console.log(err.response);
            dispatch({
                type : CREATE_CONTACT_ERROR,
                payload : err.response ? err.response.data : CONNECTION_ERROR
            });
        })
    }

    if (contact_picture) {
        storage.ref(`${FIREBASE_IMAGE_PATH}/${contact_picture.name}`)
        .put(contact_picture)
        .on('state_changed', (snapshot) => {}, async (err) => {},
        async () => {
            const url = await storage.ref(FIREBASE_IMAGE_PATH)
            .child(contact_picture.name).getDownloadURL();
            axiosCall(url);
        });
    }
    else {
        axiosCall();
    }

}