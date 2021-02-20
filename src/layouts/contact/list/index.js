import React from 'react'
import { Container, Image, List, Message } from 'semantic-ui-react'
import Header from '../../../components/Header'
import ImagePlaceholder from '../../../components/Header/imagePlaceholder';
import PlaceholderList from '../../placeholder/list';
import './index.css';

function ContactList({data : {contacts : {error, loading, data}}}) {
    return (
        <div>

                {(loading && !data) && <PlaceholderList/>}
                {(!loading && !data) && 
                 <Message
                 header='Welcome back!'
                 content='No data found'
               />}
                {data && 
                <List selection verticalAlign='middle'>
                    {data.length && data.map((contact, index) => 
                        (
                            <List.Item key={index} className="contact-list-items">
                                <List.Content>
                                    <ImagePlaceholder index={index} firstName= {contact.first_name} lastName= {contact.last_name}  src={contact.contact_picture}/>
                                </List.Content>
                                <List.Content>
                                    <span>{contact.first_name} {contact.last_name}</span>
                                </List.Content>
                                <List.Content className='pull-right'>
                                    <span>{contact.phone_number}</span>
                                </List.Content>
                            </List.Item>
                        )
                    )}
                </List> 
                }
        </div>
    )
}

export default ContactList;
