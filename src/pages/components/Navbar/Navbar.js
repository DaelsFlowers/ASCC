import React from 'react'
import "./navbar.css"

import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar({
    setAuthState,
    setUser
}) {

    const signOutHandler = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                setAuthState('login');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='navbar'>

            <h1>ASCC</h1>

            <ol className='navbarlist'>
                <div className={({ isActive }) => (isActive ? "active" : "desactive")}>
                    <li onClick={() => setAuthState('NewClient')}>
                        Nuevo Cliente
                    </li>
                    <li onClick={() => setAuthState('NewProspecto')}>
                        Nuevo Prospecto
                    </li>
                    <li onClick={() => setAuthState('Seguimiento')}>
                        Segumiento
                    </li>
                    <li onClick={() => setAuthState('Reporte')}>
                        Reportes
                    </li>
                    <li onClick={() => setAuthState('Empleados')}>
                        Empleados
                    </li>
                </div>
            </ol>
            <div className='salir'>
                <h2 onClick={signOutHandler}>
                    Salir
                </h2>
            </div>
        </div>

    )

}

