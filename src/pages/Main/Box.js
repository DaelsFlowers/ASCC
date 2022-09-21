import React from 'react'
import "./Box.css"
const Box = () => {
    return (
        <div className='Box'>
            <div className='content'>
                <div className='Datos'>
                    <div className='datos'>
                        <div className='titulo'> DATOS</div>
                        <table class="tg">
                            <thead>
                                <tr>
                                    <td class="tg-0lax">TOTAL DE CLIENTES</td>
                                    <td class="tg-0lax">TOTAL DE REGISTROS</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="tg-0lax">TOTAL DE EMPRESAS</td>
                                    <td class="tg-0lax">EMPLEADOS</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='Clientes'>
                    <div className='clientes'>
                        <div className='titulo'>CLIENTES GUARDADOS</div>
                        <div className='banner'>
                            <div class="flex-container">

                                <div>1</div>

                                <div>2</div>

                                <div>3</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='Registros'>
                    <div className='registros'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box