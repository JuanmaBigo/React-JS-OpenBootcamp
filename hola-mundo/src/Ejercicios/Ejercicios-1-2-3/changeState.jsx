import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from "./contact.class";

const ChangeStateComponent = ({ contact }) => {

    const [state, setState] = useState(contact.connected);

const estado = () => {
setState(!state);
contact.connected = state
};


    return (
        <div>
        <h1>Contacto {contact.connected ? "En Línea" : "No Disponible"}</h1>
        <h2><button onClick={estado}>Cambiar Estado</button></h2>
        </div>
    );
};

ChangeStateComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default ChangeStateComponent;
