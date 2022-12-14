import React, { useState, useEffect } from 'react';

const Clock = () => {



    const [state, setState] = useState({
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 19,
        nombre: 'Juan Mateo',
        apellidos: 'Bigoritto'
    });

    useEffect(() => {
        const timerID = setInterval(() => {
            tick()
        }, 1000);
        return () => {
            clearInterval(timerID);
        }
    }, []);

    const tick = () => {
        setState((state) => {
            let edad = state.edad + 1;
            return {
                ...state,
                fecha: new Date(),
                edad
            }
        });
    }

    return (
        <div>
            <h2>
                Hora Actual: {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    )

}

export default Clock;
