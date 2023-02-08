import React from 'react';
import '../styles/chronology.scss';


const Chronology = () => {
    return (
        <div className='cronology flex justify-between items-center py-0 px-8'>
            <button className="text-blanco">
                Perfil
            </button>
            <div className="bg-blanco"></div>
            <button className="text-azul-oscuro">
                Balance
            </button>
            <div className="bg-blanco"></div>
            <button className="text-azul-oscuro">
                Historial
            </button>
        </div>
    )
}

export default Chronology