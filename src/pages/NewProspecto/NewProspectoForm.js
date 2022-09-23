import React from 'react'
import "./newProspectoForm.css"

const NewProspectoForm = () => {

    return (
        <div className='newProspectoForm'>
            <div className='contentProspectoForm'>
                <div className='tittle'> NUEVO PROSPECTO</div>
                <form className='newProspectoFormform'>
                    <div className='newProspectoForm1'>
                        <div className='newProspectoFormInput empresa'>
                            <label >EMPRESA</label>
                            <br />
                            <input type="text" />
                        </div>
                        <div className='newProspectoFormInput nombre'>
                            <label>NOMBRE</label>
                            <br />
                            <input type="text" />
                        </div>
                    </div>
                    <div className='newProspectoForm1'>
                        <div className='newProspectoFormInput correo'>
                            <label>CORREO</label>
                            <br />
                            <input type="text" />
                        </div>
                        <div className='newProspectoFormInput telefono'>
                            <label>TELEFONO</label>
                            <br />
                            <input type="text" />
                        </div>
                        <div className='newProspectoFormInput puesto'>
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
                    <div className='newProspectoForm1'>
                        <div className='newProspectoFormInput etiqueta'>
                            <label>ETIQUETA</label>
                            <br />
                            <input type="text" />
                        </div>
                    </div>
                </form>
                <div onClick={console.log("aaaaaaa")} className="newProspectoFormButtom">
                    <div className='newProspectoFormButtomText'> GUARDAR</div>
                </div>
            </div>
        </div>
    )
}

export default NewProspectoForm