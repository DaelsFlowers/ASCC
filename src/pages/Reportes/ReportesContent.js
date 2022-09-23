import React, { Component } from 'react'
import "./reportesContent.css"
import msg from "../../image/msg.png"
import call from "../../image/call.png"
import mail from "../../image/mail.png"

const ReportesContent = () => {
    const idReportes = 1;
    const fechaReportes = Date();
    const contactoReportes = 1;
    const EmpresaReportes = 1;
    const EstatusReportes = 1;
    const anotacionesReportes = 1;

    const Tcall = 0;
    const Tmsg = 0;
    const Tmail = 0;
    const Total = Tcall + Tmsg + Tcall;

    return (
        <div className='ReportesContent'>
            <div className='ReportesTittle'>
                REPORTES
            </div>
            <div className='query'>
                <div className='querycontent'>
                    <div className='querygrid'>
                        <div className='queryitem'>
                            ACTIVIDAD
                            <div className='queryaplicate'>
                                a
                            </div>
                        </div>
                        <div className='queryitem'>
                            EMPLEADO
                            <div className='queryaplicate'>
                                a
                            </div>
                        </div>
                        <div className='queryitem'>
                            ETIQUETA
                            <div className='queryaplicate'>
                                a
                            </div>
                        </div>
                        <div className='queryitemfecha'>
                            FECHA
                            <div className='queryaplicatefecha'>
                                <div>
                                    <label>DESDE</label>
                                    <input type={"date"} />
                                </div>
                                <div>
                                    <label>HASTA</label>
                                    <input type={"date"} />
                                </div>
                            </div>
                        </div>
                        <div className='queryitem'>
                            <div onClick={console.log("aaaaaaa")} className="querybotton">
                                <div className='querybottonText'>APLICAR</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='listReportes'>
                <div className='ReportesContentTags'>
                    <div className='gridReportes'>
                        <div className='items'>#</div>
                        <div className='items'>FECHA</div>
                        <div className='items'>CONTACTO</div>
                        <div className='items'>EMPRESA</div>
                        <div className='items'>ESTATUS</div>
                        <div className='items'>ANOTACIONES</div>
                    </div>
                </div>
                <div className='sqllist'>
                    <div className='ReportesContentList'>
                        <div className='gridReportesList'>
                            <div className='itemsList'>{idReportes}</div>
                            <div className='itemsList'>{fechaReportes}</div>
                            <div className='itemsList'>{contactoReportes}</div>
                            <div className='itemsList'>{EmpresaReportes}</div>
                            <div className='itemsList'>{EstatusReportes}</div>
                            <div className='itemsList'>{anotacionesReportes}</div>
                        </div>
                    </div>
                </div>
                <div className='TotalContent'>
                    <div className='TotalNoti'>
                        <div className='TotalNotiText'>
                            Total: {Total}
                        </div>
                        <div className='Totalmsg'>
                            {Tcall} <img src={call} />
                        </div>
                        <div className='TotalMail'>
                            {Tmsg}<img src={msg} />
                        </div>
                        <div className='TotalCall'>
                            {Tmail}<img src={mail} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportesContent