/**
 * Ejemplo de uso del metodo componentWillUnmount en componente de clase para componente clase
 * y Ejemplo de uso de hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento justo antes de que el componente desaparezca');
    }


    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}


export const WillUnmountHook = () => {

    useEffect(() => {
        // aqui no ose pone nada
        return () => {
            console.log('Comportamiento justo antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}





