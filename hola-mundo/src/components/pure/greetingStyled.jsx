import React, { useState } from 'react';

// Definiendo estilos en constantes
// ? Estilo para usuario logeado
const loggedStyle = {
    color: 'green',
    fontWeight: '300'
}

// ? Estilo para usuario no logeado
const unloggedStyle = {
    color: 'red',
    fontWeight: '700'
}

const GreetingStyled = (props) => {

    // Generamos un estado para el componente
    // y asi controlar si el usuario esta o no logeado
    const [logged, setLogged] = useState(false);



    return (

        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? (<p>Hola, {props.name}</p>) : (<p>Please login</p>)}
            <button onClick={() => setLogged(!logged)}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;

