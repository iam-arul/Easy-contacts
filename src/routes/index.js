import RegisterComponent from '../containers/Register';
import LoginComponent from '../containers/Login';
import ContactsComponent from '../containers/Contacts';
import CreateContactsComponent from '../containers/Contacts/CreateContact';

const routes = [
    {
        path : '/auth/register',
        component : RegisterComponent,
        title : 'Register',
        isAuthenticatedRoute : false
    },
    {
        path : '/auth/login',
        component : LoginComponent,
        title : 'Login',
        isAuthenticatedRoute : false
    },
    {
        path : '/contacts/create',
        component : CreateContactsComponent,
        title : 'Create contacts',
        isAuthenticatedRoute : true
    },
    {
        path : '/',
        component : ContactsComponent,
        title : 'Contacts',
        isAuthenticatedRoute : true
    }
]

export default routes;