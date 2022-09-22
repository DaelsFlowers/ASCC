import React from 'react'
import "./newClientForm.css"

const NewClientForm = () => {

    return (
        <div className='newClientForm'>
            <div className='contentClientForm'>
                <div className='tittle'> NUEVO CLIENTE</div>
                <form className='newclientFormform'>
                    <div className='newClientForm1'>
                        <div className='newClientFormInput empresa'>
                            <label >EMPRESA</label>
                            <br />
                            <input type="text" />
                        </div>
                        <div className='newClientFormInput nombre'>
                            <label>NOMBRE</label>
                            <br />
                            <input type="text" />
                        </div>
                    </div>
                    <div className='newClientForm1'>
                        <div className='newClientFormInput correo'>
                            <label>CORREO</label>
                            <br />
                            <input type="text" />
                        </div>
                        <div className='newClientFormInput telefono'>
                            <label>TELEFONO</label>
                            <br />
                            <input type="text" />
                        </div>
                        <div className='newClientFormInput puesto'>
                            <label>PUESTO</label>
                            <br />
                            <select name="puesto" id="puesto" >
                                <option value="volvo"></option>
                                <option value="saab">A</option>
                                <option value="mercedes">B</option>
                                <option value="audi">C</option>
                            </select>
                        </div>
                    </div>
                    <div className='newClientForm1'>
                        <div className='newClientFormInput etiqueta'>
                            <label>ETIQUETA</label>
                            <br />
                            <input type="text" />
                        </div>
                    </div>
                </form>
                <div onClick={console.log("aaaaaaa")} className="newClientFormButtom">
                    <div className='a'> GUARDAR</div>
                </div>
            </div>
        </div>
    )
}

export default NewClientForm