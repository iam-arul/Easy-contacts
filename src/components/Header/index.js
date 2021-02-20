import React, { useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button, Icon, Image, Menu, Segment} from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg';
import { LogoutUser } from '../../context/actions/logout';
import { GlobalContext } from '../../context/Provider';
import isAuthenticatedRoute from '../../utils/isAuthenticatedRoute';

const Header = () => {
    const {pathname} = useLocation();
    const {contactsDispatch} = useContext(GlobalContext);

    const history = useHistory();

    const handleUserLogout = () => {
        LogoutUser(history)(contactsDispatch);
    };
    
    return (
        <Segment inverted style={{borderRadius : 0}}>
            <Menu inverted secondary pointing>
                <Image src={logo} width="30"></Image>
                <Menu.Item as={Link} to="/" style={{fontSize : 24, fontWeight : 400, padding : 10}}>
                    EasyContacts
                </Menu.Item>
                {pathname === '/' && (
                <Menu.Item position="right">
                   <Button as={Link} to="/contacts/create" primary icon>
                        <Icon name="add"></Icon> 
                        Create Contact
                    </Button> 
                    
                </Menu.Item>
                )}
                {isAuthenticatedRoute && (
                <Menu.Item position='right'>
                    <Button onClick={handleUserLogout} secondary icon>
                        <Icon  name="log out"></Icon> 
                        Logout
                    </Button> 
                </Menu.Item>
                )}
            </Menu>
        </Segment>
    )
}

export default Header;