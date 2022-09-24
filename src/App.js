import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

//#region pages
import Home from "./pages/Login/Home"
import Main from './pages/Main/Main';
import NewClient from './pages/newClient/NewClient';
import NewProspecto from "./pages/NewProspecto/NewProspecto"
import Seguimiento from './pages/Seguimiento/Seguimiento';
import Reporte from './pages/Reportes/Reportes';
import Empleados from './pages/Empleados/Empleados';
import NotFoundPage from './pages/components/NotFoundPage/NotFoundPage';
//#endregion

function App() {
  return (
    <>




      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={
              <Home />
            }></Route>
            <Route path='/login' element={
              <Home />
            }></Route>
            <Route path='/home' element={<Main />} />
            <Route path='/nuevo_cliente' element={
              <NewClient />
            }></Route>
            <Route path='/nuevo_prospecto' element={
              <NewProspecto />
            }></Route>
            <Route path='/seguimiento' element={
              <Seguimiento />
            }></Route>
            <Route path='/reportes' element={
              <Reporte />
            }></Route>
            <Route path='/empleados' element={
              <Empleados />
            }></Route>
            <Route path='*' element={
              <NotFoundPage />
            }></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
