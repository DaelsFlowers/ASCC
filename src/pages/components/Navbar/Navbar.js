import React from 'react'
import { NavLink } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
    return (


        <div className='navbar'>
            <NavLink to="/home">
                <h1>ASCC</h1>
            </NavLink>
            <ol className='navbarlist'>
                <NavLink className={({ isActive }) => (isActive ? "active" : "desactive")}
                    to="/nuevo_cliente">
                    <li>
                        Nuevo Cliente
                    </li>
                </NavLink>
                <NavLink to="/nuevo_prospecto">
                    <li>
                        Nuevo Prospecto
                    </li>
                </NavLink>
                <NavLink to="/seguimiento">
                    <li>
                        Segumiento
                    </li>
                </NavLink>
                <NavLink to="/reportes">
                    <li>
                        Reportes
                    </li>
                </NavLink>
                <NavLink to="/empleados">
                    <li>
                        Empleados
                    </li>
                </NavLink>
            </ol>
            <div className='salir'>
                <NavLink to="/">
                    <h2>
                        Salir
                    </h2>
                </NavLink>
            </div>
        </div>

    )
}

export default Navbar