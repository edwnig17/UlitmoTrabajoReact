import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CanastaFamiliar from './componentes/CanastaFamilia'; 
import EmpleadosYSedes from './componentes/EmpleadosSedes'; 
import Inicio from './componentes/inicio'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/canasta-familiar">Canasta Familiar</Link>
            </li>
            <li>
              <Link to="/empleados-y-sedes">Empleados y Sedes</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/canasta-familiar">
            <CanastaFamiliar />
          </Route>
          <Route path="/empleados-y-sedes">
            <EmpleadosYSedes />
          </Route>
          <Route path="/inicio">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
