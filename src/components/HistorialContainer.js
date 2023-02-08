import React from 'react'
import Chronology from './Chronology'
import '../styles/historialContainer.scss'
import HistorialBarChart from './HistorialBarChart'



const HistorialContainer = () => {
    return (
        <div className="historialContainer">
            <Chronology />
            <HistorialBarChart />
        </div>
    )
}

export default HistorialContainer