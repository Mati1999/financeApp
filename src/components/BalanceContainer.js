import React from 'react'
import '../styles/balanceContainer.scss';
import InfoBalance from './InfoBalance';
import Historial from './Historial';

const BalanceContainer = () => {
    return (
        <div className='balanceContainer flex flex-col justify-between items-center py-12'>
            <InfoBalance />
            <Historial />
        </div>
    )
}

export default BalanceContainer