import React from 'react';
import '../styles/navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='/perfil'>
                Perfil
            </NavLink>
            <div></div>
            <NavLink to='/'>
                Balance
            </NavLink>
            <div></div>
            <NavLink to='/historial'>
                Historial
            </NavLink>
        </div>
    )
}

export default Navbar