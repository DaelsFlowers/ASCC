import React from 'react'
import "./seguimientoContent.css"

const SeguimientoContent = () => {
    const idclients = 1;
    const contaclients = "JUAN MARTINEZ";
    const empresaclients = "FEMSA";
    const puestoclients = "GENTE";
    const correoclients = "JUASN_MART@FEMSA.COM";
    const telefonoclients = "8125487598";
    const mailphoneclients = correoclients + "/" + telefonoclients;
    const estatusclients = "CONTACTADO";
    const etiquetaclients = "FEMSA";
    const saveclients = false;


    return (
        <div className='SeguimientoContent'>
            <div className='filterSeguimiento'>
                <select name="SeguimientoCategoria" id="SeguimientoCategoria" className='SeguimientoCategoria'>
                    <option value="Clientes">CLIENTES</option>
                    <option value="Empresa">EMPRESA</option>
                    <option value="Prospectos">PROSPECTOS</option>
                </select>
            </div>
            <div className='SeguiminetoTittle'>
                SEGUIMIENTO
            </div>
            <div className='listSeguimineto'>
                <div className='SeguiminetoContentTags'>
                    <div className='gridSeguimiento'>
                        <div className='items'>#</div>
                        <div className='items'>CONTACTO</div>
                        <div className='items'>EMPRESA</div>
                        <div className='items'>PUESTO</div>
                        <div className='items'>CORREO/TELEFONO</div>
                        <div className='items'>ESTATUS</div>
                        <div className='items'>ETIQUETA</div>
                        <div className='items'>FAVORITOS</div>
                    </div>
                </div>
                <div className='sqllist'>
                    <div className='SeguiminetoContentList'>
                        <div className='gridSeguimientoList'>
                            <div className='itemsList'>{idclients}</div>
                            <div className='itemsList'>{contaclients}</div>
                            <div className='itemsList'>{empresaclients}</div>
                            <div className='itemsList'>{puestoclients}</div>
                            <div className='itemsList'>{mailphoneclients}</div>
                            <div className='itemsList'>{estatusclients}</div>
                            <div className='itemsList'>{etiquetaclients}</div>
                            <input type={"checkbox"} checked={saveclients} className='itemsList'></input>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SeguimientoContent