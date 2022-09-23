import React from 'react'
import "./empleadosContent.css"

const EmpleadosContent = () => {
    const idEmpleado = 1;
    const fechaEmpleado = Date();
    const contactoEmpleado = 1;
    const EmpresaEmpleado = 1;
    const EstatusEmpleado = 1;
    const anotacionesEmpleado = 1;



    return (
        <div className='EmpleadoContent'>
            <div className='EmpleadoTittle'>
                Empleado
            </div>
            <div className='add'>
                <div className='addcontent'>
                    <div className='addgrid'>
                        <div className='additem'>
                            NOMBRE
                            <input className='addaplicate'>
                            </input>
                        </div>
                        <div className='additem'>
                            CONTRASEÑA
                            <input className='addaplicate'>
                            </input>
                        </div>
                        <div className='additem'>
                            CONTRASEÑA
                            <input className='addaplicate'>
                            </input>
                        </div>
                        <div className='additem'>
                            <div onClick={console.log("aaaaaaa")} className="addbotton">
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

export default EmpleadosContent