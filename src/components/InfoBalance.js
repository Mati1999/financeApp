import React from 'react'
import '../styles/infoBalance.scss';

const InfoBalance = () => {
    return (
        <div className='infoBalanceContainer bg-azul-oscuro rounded-lg flex flex-col justify-center items-center flex-wrap'>
            <h5 className="text-blanco">Balance</h5>
            <span className="text-blanco text-4xl break-all block text-right">$3000000</span>
        </div>
    )
}

export default InfoBalance