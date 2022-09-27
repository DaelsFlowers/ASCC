import React, { useEffect, useState } from 'react'
import "./empleadosContent.css"


import EmpleadosDataService from "../services/Empleados.services"

const EmpleadosList = () => {

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        getEmpleados();
    }, []);

    const getEmpleados = async () => {
        const data = await EmpleadosDataService.getAllEmpleados();
        console.log(data.docs);
        setEmpleados(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    return (
        <>
            {empleados.map((doc, index) => {
                return (
                    <div className='sqllist'>
                        <div className='EmpleadoContentList'>
                            <div className='gridEmpleadoList'>
                                <div className='itemsList'>{index + 1}</div>
                                <div className='itemsList'>{doc.email}</div>
                                <div className='itemsList'>*********</div>
                                <div className='itemsList'>{doc.Cclientes}</div>
                                <div className='itemsList'>{doc.Cprospectos}</div>
                                <div className='itemsList'>{doc.date}</div>
                            </div>
                        </div>
                    </div>
                )

            })}
        </>
    )
}

export default EmpleadosList