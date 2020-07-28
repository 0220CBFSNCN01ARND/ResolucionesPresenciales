
import React from 'react';
import Buscador from '../Buscador/buscador'
import Navbaritems from '../Navbaritems/navbaritem'

function NavbarsinBuscar() {

    const menuItems = [{ texto: "google", href: "google.com" },
    { texto: "coto", href: "coto.com.ar" },
    { texto: "mercado libre", href: "mercadolibre.com.ar" }]

    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Navbaritems menus={menuItems} />

        </div>
    </nav>
    );
}

export default NavbarsinBuscar;

