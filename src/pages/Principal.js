import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'


import Main from './Main/Main';
import NewClient from './newClient/NewClient';
import NewProspecto from "./NewProspecto/NewProspecto"
import Seguimiento from './Seguimiento/Seguimiento';
import Reporte from './Reportes/Reportes';
import Empleados from './Empleados/Empleados';

const Principal = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Main />} />
                    <Route path="/Main" element={<Main />} />
                    <Route path="/NewClient" element={<NewClient />} />
                    <Route path="/NewProspecto" element={<NewProspecto />} />
                    <Route path="/Seguimiento" element={<Seguimiento />} />
                    <Route path="/Reporte" element={<Reporte />} />
                    <Route path="/Empleados" element={<Empleados />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Principal