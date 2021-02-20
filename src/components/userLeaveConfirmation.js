import ReactDOM, { unmountComponentAtNode } from 'react-dom'; 
import React from 'react'; 
import { Confirm, TransitionablePortal } from 'semantic-ui-react';

const userLeaveConfirmation = (message, callback, confirmOpen, setConfirmOpen) => {
    const container = document.createElement('div');

    container.setAttribute('custom-confirmation-element', '');
    container.setAttribute('class', 'custom-element');

    const handleOnCancel = () => {
        const unmountElement = document.getElementsByClassName('cutom-element');
        console.log(unmountElement);
        ReactDOM.unmountComponentAtNode(container);
        callback();
        setConfirmOpen(false);
    }

    const handleOnConfirm = (callbackState) => {
        ReactDOM.unmountComponentAtNode(container);
        callback(callbackState);
        setConfirmOpen(false);
    }

    document.body.appendChild(container);

    const {header, content} = JSON.parse(message);

    ReactDOM.render(
        <TransitionablePortal open={confirmOpen} onClose={handleOnCancel}>
            <Confirm
            open={confirmOpen}
            header={header}
            onCancel={handleOnCancel}
            onConfirm={handleOnConfirm}
            content= {content}
            />
        </TransitionablePortal> , container
    )
}

export default userLeaveConfirmation;
