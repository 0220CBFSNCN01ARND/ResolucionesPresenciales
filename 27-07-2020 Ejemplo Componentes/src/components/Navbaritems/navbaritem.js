
import React from 'react';
import PropTypes from 'prop-types'



function NavbarItems(props) {
    return (
        <ul className="navbar-nav mr-auto">
            {
                props.menus.map((value, index) => {
                    return <li key={index} className="nav-item active">
                        <a className="nav-link" href={value.href}>{value.texto}</a>
                    </li>
                })
            }
        </ul>

    );
}

NavbarItems.propTypes = {
    menus: PropTypes.string.isRequired,
}

export default NavbarItems;
