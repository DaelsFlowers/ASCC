import React from 'react'
import "./empleadosContent.css"

import { auth } from "../components/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function EmpleadosContent({
    setAuthState,
    setUser
}) {

    const idEmpleado = 1;
    const fechaEmpleado = Date();
    const contactoEmpleado = 1;
    const EmpresaEmpleado = 1;
    const EstatusEmpleado = 1;
    const anotacionesEmpleado = 1;

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password1, setPassword1] = React.useState('');

    const onSignUpHandle = () => {
        if (email !== null && password !== null) {
            if (password1 === password) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((user) => {
                        setUser(user.user.email);
                        setAuthState('home')
                    })
                    .catch((err) => {
                        alert(err)
                    })
            } else {
                alert("Password is Incorrect")
            }
        }
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
                            <div onClick={onSignUpHandle} className="addbotton">
                                <div className='addbottonText'>AGREGAR</div>
                            </div>
                        </div>
                        <div className='additem'>
                            NOMBRE
                            <input className='addaplicate'>
                            </input>
                        </div>
                        <div className='additem'>
                            <div onClick={console.log("aaaaaaa")} className="addbotton">
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
                        <div className='items'>NOMBRE</div>
                        <div className='items'>CONTRASEÑA</div>
                        <div className='items'>NO.CLIENTES</div>
                        <div className='items'>NO.PROSPECTOS</div>
                        <div className='items'>FECHA DE INICIO</div>
                    </div>
                </div>
                <div className='sqllist'>
                    <div className='EmpleadoContentList'>
                        <div className='gridEmpleadoList'>
                            <div className='itemsList'>{idEmpleado}</div>
                            <div className='itemsList'>{fechaEmpleado}</div>
                            <div className='itemsList'>{contactoEmpleado}</div>
                            <div className='itemsList'>{EmpresaEmpleado}</div>
                            <div className='itemsList'>{EstatusEmpleado}</div>
                            <div className='itemsList'>{anotacionesEmpleado}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}