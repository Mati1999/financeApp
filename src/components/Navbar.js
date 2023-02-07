import React from 'react';
import '../styles/navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar bg-azul-oscuro flex justify-between items-center py-0 px-8'>
            <NavLink to='/perfil' className="text-blanco">
                Perfil
            </NavLink>
            <div className="bg-blanco"></div>
            <NavLink to='/' className="text-blanco">
                Balance
            </NavLink>
            <div className="bg-blanco"></div>
            <NavLink to='/historial' className="text-blanco">
                Historial
            </NavLink>
        </div>
    )
}

export default Navbar