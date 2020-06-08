import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title,icon }) => {
    const authContext = React.useContext(AuthContext);
    const contactContext = React.useContext(ContactContext);
    const { isAuthenticated, logout, user } = authContext;
    const { clearContacts } = contactContext;


    const onLogout =() => {
        logout();
        clearContacts();
    }

    const authLinks = (
        <React.Fragment>
            <li>Hello {user && user.name} </li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </React.Fragment>
    );

    const guestLinks = (
        <React.Fragment>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </React.Fragment>
    );
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    );
}

Navbar.propTypes = {
    title: Proptypes.string.isRequired,
    icon: Proptypes.string
}
Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar;