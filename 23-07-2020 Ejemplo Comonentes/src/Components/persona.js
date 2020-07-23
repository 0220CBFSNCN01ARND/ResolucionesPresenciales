import React from 'react';

function Persona(props) {
    return (
        <div className="persona">
            <h1>{props.nombre}</h1>
            <p>Su edad es: {props.edad}</p>
        </div>
    )
}

export default Persona;
