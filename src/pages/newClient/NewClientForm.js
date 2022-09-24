import React, { useState } from 'react'
import "./newClientForm.css"

const NewClientForm = () => {
    const [client, setClient] = useState({
        empresa: "",
        nombre: "",
        correo: "",
        telefono: "",
        puesto: "",
        etiqueta: ""
    })
    const handleChange = ({ target: { name, value } }) => {
        setClient({ ...client, [name]: value })
    }

    const handleSubmit = e => {
        console.log(client)
    }
    return (
        <div className='newClientForm'>
            <div className='contentClientForm'>
                <div className='tittle'> NUEVO CLIENTE</div>
                <form className='newclientFormform'>
                    <div className='newClientForm1'>
                        <div className='newClientFormInput empresa'>
                            <label >EMPRESA</label>
                            <br />
                            <input type={"text"} name="empresa" id='empresa' onChange={handleChange} />
                        </div>
                        <div className='newClientFormInput nombre'>
                            <label>NOMBRE</label>
                            <br />
                            <input type={"text"} name="nombre" id='nombre' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='newClientForm1'>
                        <div className='newClientFormInput correo'>
                            <label>CORREO</label>
                            <br />
                            <input type={"mail"} name="correo" id='correo' onChange={handleChange} />
                        </div>
                        <div className='newClientFormInput telefono'>
                            <label>TELEFONO</label>
                            <br />
                            <input type={"text"} name="telefono" id='telefono' onChange={handleChange} />
                        </div>
                        <div className='newClientFormInput puesto'>
                            <label>PUESTO</label>
                            <br />
                            <select name="puesto" id="puesto" onChange={handleChange}>
                                <option value="none"></option>
                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="c">C</option>
                            </select>
                        </div>
                    </div>
                    <div className='newClientForm1'>
                        <div className='newClientFormInput etiqueta'>
                            <label>ETIQUETA</label>
                            <br />
                            <input type={"text"} name="etiqueta" id='etiqueta' onChange={handleChange} />
                        </div>
                    </div>
                </form>
                <div onClick={handleSubmit} className="newClientFormButtom">
                    <div className='newClientFormButtomText'> GUARDAR</div>
                </div>
            </div>
        </div>
    )
}

export default NewClientForm