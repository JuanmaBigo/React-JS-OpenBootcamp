/**
 * Ejemplo Hooks:
 * useState()
 * useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

// Inicializamos un estado vacio que va a rellenarse con los 
// datos del contexto del padre
const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h1>El token es: {state.token}</h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>

        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesion es: {state.session}</h2>
        </div>
    );
}


export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: "123456789",
        session: 1
    }

    // Creamos el estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    // Funcion para actualizar la sesion
    function actualizarSesion() {
        setSessionData({
            token: 'jasdfwi4234',
            session: sessionData.session + 1
        })
    }


    return (
        <div>
            <miContexto.Provider value={sessionData}>
                {/* Todo lo que este aqui dentro puede leer los datos de sessionData
            Ademas, si se actualiza, los componentes de qui tambien lo actualizan */}
                <h1>*** Ejemplo de use State y useContext ***</h1>
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar sesion</button>
            </miContexto.Provider>
        </div>
    )
}

