import React from 'react';

import { Contact } from "./contact.class";
import ChangeStateComponent from './changeState.jsx';



const ContactComponent = () => {
    const defaultContact = new Contact('Juan', 'Perez', 'juanperex@any.com', true);
    console.log(defaultContact.connected)
    
    return (
        <div>
            <h2>Nombre: {defaultContact.name}</h2>
            <h2>Apellido: {defaultContact.surname}</h2>
            <h2>Email: {defaultContact.email}</h2>

        <ChangeStateComponent contact={defaultContact} ></ChangeStateComponent>
        </div>
    );
    }



export default ContactComponent;
