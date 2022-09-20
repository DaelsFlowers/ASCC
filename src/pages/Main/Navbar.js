import React from 'react'
import "./navbar.css"
const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>ASCC</h1>

            <ol>
                <li>Nuevo Cliente</li>
                <li>Nuevo Prospecto</li>
                <li>Segumiento</li>
                <li>Reportes</li>
                <li>Empleados</li>
            </ol>

            <div className='salir'>
                <h2>Salir</h2>
            </div>

        </div>
    )
}

export default Navbar