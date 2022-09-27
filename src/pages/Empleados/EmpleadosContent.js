import React from 'react'
import "./empleadosContent.css"

import { auth } from "../components/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import EmpleadosDataService from "../services/Empleados.services"
import EmpleadosList from './EmpleadosList'

export default function EmpleadosContent({
    setAuthState,
    setUser
}) {

    const event = new Date();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password1, setPassword1] = React.useState('');
    const [Cclientes, setCclientes] = React.useState(0);
    const [Cprospectos, setCprospectos] = React.useState(0);
    const [date, setdate] = React.useState(event.toDateString());

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "" ||
            password === "" ||
            password1 === "" ||
            Cclientes === "" ||
            Cprospectos === "" ||
            date === "") {
            return;
        }
        const newEmpleado = {
            email,
            password,
            Cclientes,
            Cprospectos,
            date,
        }
        console.log(newEmpleado)

        try {
            await EmpleadosDataService.addClient(newEmpleado)
            if (email !== null && password !== null) {
                if (password1 === password) {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((user) => {
                            setUser(user.user.email);
                            setAuthState('home')

                        })
                        .catch((err) => {
                            alert("GUARDADO CORRECTAMENTE")
                        })
                } else {
                    alert("Password is Incorrect")
                }
            }
        } catch (err) {
            console.log(err)
        }
        setEmail("");
        setPassword("");
        setPassword1("");
        setCclientes("");
        setCprospectos("");
        setdate("");
    }

    return (
        <div className='EmpleadoContent'>
            <div className='EmpleadoTittle'>
                Empleado
            </div>
            <div className='add'>
                <div className='addcontent'>
                    <div className='addgrid'>
                        <div className='additem'>
                            CORREO
                            <input className='addaplicate' value={email}
                                onChange={(e) => setEmail(e.target.value)} type={"email"} />
                        </div>
                        <div className='additem'>
                            CONTRASEÑA
                            <input className='addaplicate' value={password}
                                onChange={(e) => setPassword(e.target.value)} type={"password"} />
                        </div>
                        <div className='additem'>
                            CONTRASEÑA
                            <input className='addaplicate' value={password1}
                                onChange={(e) => setPassword1(e.target.value)} type={"password"} />
                        </div>
                        <div className='additem'>
                            <div onClick={handleSubmit} className="addbotton">
                                <div className='addbottonText'>AGREGAR</div>
                            </div>
                        </div>
                        <div className='additem'>
                            NOMBRE
                            <input className='addaplicate'>
                            </input>
                        </div>
                        <div className='additem'>
                            <div className="addbotton">
                                <div className='addbottonText'>BUSCAR</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='listEmpleado'>
                <div className='EmpleadoContentTags'>
                    <div className='gridEmpleado'>
                        <div className='items'>#</div>
                        <div className='items'>CORREO</div>
                        <div className='items'>CONTRASEÑA</div>
                        <div className='items'>NO.CLIENTES</div>
                        <div className='items'>NO.PROSPECTOS</div>
                        <div className='items'>FECHA DE INICIO</div>
                    </div>
                </div>
                <EmpleadosList />
            </div>
        </div>
    )
}