import React from 'react'
import { Dropdown, Icon, List, Menu } from 'semantic-ui-react'
import ImagePlaceholder from '../../../../components/Header/imagePlaceholder';
import '../index.css';

function FavouriteContactList({data}) {
    return (
        <div>
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
                            <Dropdown item as="I" name="pencil">
                            <Dropdown.Menu>
                                <Dropdown.Item>Electronics</Dropdown.Item>
                                <Dropdown.Item>Automotive</Dropdown.Item>
                                <Dropdown.Item>Home</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </List.Item>
                    )
                )}
            </List> 
            }
        </div>
    )
}

export default FavouriteContactList;
