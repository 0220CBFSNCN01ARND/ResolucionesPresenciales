
import React from 'react';

function Buscador(props) {
    return (
        <div className="form-inline my-2 my-lg-0">
            {props.children}
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

        </div>
    );
}

export default Buscador;

