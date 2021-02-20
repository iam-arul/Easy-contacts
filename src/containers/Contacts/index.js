import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Container, Header as SementicHeader, Radio } from 'semantic-ui-react';
import Header from '../../components/Header';
import { getContacts } from '../../context/actions/getContacts';
import { GlobalContext } from '../../context/Provider';
import ContactList from '../../layouts/contact/list';
import FavouriteContactList from '../../layouts/contact/list/favourite';
import './index.css';

const ContactsContainer = () => {
    const {contactsData, contactsDispatch} = useContext(GlobalContext);
    const history = useHistory();
    console.log(contactsData);

    const [toggleState, setToggleState] = useState(false);

    const {contacts : {data}} = contactsData;
    
    
    const toggleFavourite = (e) => {
        setToggleState(!toggleState);
    }

    const refreshContacts = () => {
        getContacts(history)(contactsDispatch); 
    }

    useEffect(() => {
        if (data === null || data.length === 0) {
            getContacts(history)(contactsDispatch); 
        }
    }, []);

    return (
        <div>
            <Header/>
            <Container>
                <div className="top-container">
                    <div className='refresh'>
                        <Button content='Refresh' onClick={refreshContacts} icon='refresh' labelPosition='left'/>
                    </div>
                    <div className='fav-choose'>
                        <div className={`${!toggleState ?  'disable' : ''} label`}>Favourite</div>
                        <Radio  onChange={toggleFavourite} slider /> 
                    </div>
                </div>
                {toggleState && 
                    <>
                        <SementicHeader as="h2">Stared Contacts</SementicHeader>
                        <FavouriteContactList data={data.filter((fav => fav.is_favorite))} />
                    </>
                }
                {!toggleState && 
                <>
                    <SementicHeader as="h2">All Contacts</SementicHeader>
                    <ContactList data={contactsData} />
                </>
                }

           </Container>
        </div>
    )
}

export default ContactsContainer;
