import React from 'react'
import '../styles/historial.scss';
import { GiReceiveMoney } from 'react-icons/gi'
import { BsPlusLg } from 'react-icons/bs'

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
            <button className="text-blanco">Ver mas</button>
            <button className="text-blanco flex justify-evenly items-center mt-4 p-2 bg-verde rounded-xl">
                <BsPlusLg className="text-3xl" />
                <h5 className="w-1/2">Añadir o programar nuevo ingleso/gasto</h5>
            </button>
        </div >
    )
}

export default Historial