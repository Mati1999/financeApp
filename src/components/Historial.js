import React from 'react'
import '../styles/historial.scss';
import { GiReceiveMoney } from 'react-icons/gi'

const Historial = () => {
    return (
        <div className="historial flex flex-col justify-start items-center px-5 py-5">
            <div className="text-blanco border-b-2 w-full text-center">
                <h5 className="text-xl">Historial</h5>
            </div>
            <div className="flex flex-col justify-start items-center w-full pt-4">
                <div className="flex justify-between items-center w-full text-blanco pb-4 text-lg">
                    <GiReceiveMoney />
                    <h5>Ingreso/gasto</h5>
                    <span>01/01/0101</span>
                    <span>$1000</span>
                </div>
                <div className="flex justify-between items-center w-full text-blanco pb-4 text-lg">
                    <GiReceiveMoney />
                    <h5>Ingreso/gasto</h5>
                    <span>01/01/0101</span>
                    <span>$1000</span>
                </div>
                <div className="flex justify-between items-center w-full text-blanco pb-4 text-lg">
                    <GiReceiveMoney />
                    <h5>Ingreso/gasto</h5>
                    <span>01/01/0101</span>
                    <span>$1000</span>
                </div>
                <div className="flex justify-between items-center w-full text-blanco pb-4 text-lg">
                    <GiReceiveMoney />
                    <h5>Ingreso/gasto</h5>
                    <span>01/01/0101</span>
                    <span>$1000</span>
                </div>
                <div className="flex justify-between items-center w-full text-blanco pb-4 text-lg">
                    <GiReceiveMoney />
                    <h5>Ingreso/gasto</h5>
                    <span>01/01/0101</span>
                    <span>$1000</span>
                </div>
            </div>

        </div >
    )
}

export default Historial