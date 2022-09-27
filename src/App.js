import React from 'react';
import { auth } from "./pages/components/firebase"
import { onAuthStateChanged } from 'firebase/auth';

//#region pages
import Home from "./pages/Login/Home"
import Main from './pages/Main/Main';
import NewClient from './pages/newClient/NewClient';
import NewProspecto from "./pages/NewProspecto/NewProspecto"
import Seguimiento from './pages/Seguimiento/Seguimiento';
import Reporte from './pages/Reportes/Reportes';
import Empleados from './pages/Empleados/Empleados';
//#endregion

function App() {

  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null);

  React.useEffect(() => {
    const unSubcribeAuth = onAuthStateChanged(auth, async authenticatedUser => {
      if (authenticatedUser) {
        setUser(authenticatedUser.email)
        setAuthState("home");
      } else {
        setUser(null);
        setAuthState("login");
      }
    })
    return unSubcribeAuth;
  }, [user])

  if (authState === null) return <div>loading...</div>
  if (authState === 'login') return <Home setAuthState={setAuthState} setUser={setUser} />
  if (authState === 'NewClient') return <NewClient setAuthState={setAuthState} setUser={setUser} />
  if (authState === 'NewProspecto') return <NewProspecto setAuthState={setAuthState} setUser={setUser} />
  if (authState === 'Seguimiento') return <Seguimiento setAuthState={setAuthState} setUser={setUser} />
  if (authState === 'Reporte') return <Reporte setAuthState={setAuthState} setUser={setUser} />
  if (authState === 'Empleados') return <Empleados setAuthState={setAuthState} setUser={setUser} />
  if (authState === 'home') return <Main setAuthState={setAuthState} setUser={setUser} />
  if (user) return <Main user={user} setAuthState={setAuthState} setUser={setUser} />

}

export default App;
