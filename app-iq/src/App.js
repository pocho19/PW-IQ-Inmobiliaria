//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Sales from './components/Sales/Sales';
import Profile from './components/Users/Profile';
import Users from './components/Users/Users';
import Rentals from './components/Rentals';
import Home from './components/Home';
import NavBar from './components/NavBar/Navbar';
import LoginScreen from './components/Users/Login';
import About from "./components/About";
import SaleDetail from "./components/Sales/SaleDetail";
import AuthRoute from './components/AuthRoute';

function App() {
  const descriptionEx = "Texto Ejemplo de descripción. Ubicada en el barrio Antartida Argentina ( fisherton sur) a metros de Av. Mendoza a la altura del 7900.Patio delantero en el ingreso parquizado , cochera pasante. La casa se desarrolla practicamente toda en planta baja. Living con entrepiso de madera, cocina comedor, lavadero independiente y dos dormitorios orientados al norte con ventilacion hacia el jardin del inmueble.";
  const state = { location:'Rosario', description:descriptionEx, name: 'Casa A', price: 150000, img: 'IMAGEN', type: 'Casa' };
  const states = [
    { id:0, location:'Rosario', description:descriptionEx, name: 'Casa A', price: 150000, img: 'IMAGEN', type: 'Casa' },
    { id:1, location:'Rosario', description:descriptionEx, name: 'Casa B', price: 110000, img: 'IMAGEN', type: 'Casa' },
    { id:2, location:'Rosario', description:descriptionEx, name: 'Casa C', price: 200000, img: 'IMAGEN', type: 'Casa' },
    { id:3, location:'Rosario', description:descriptionEx, name: 'Depto A', price: 90000, img: 'IMAGEN', type: 'Departamento' },
    { id:4, location:'Rosario', description:descriptionEx, name: 'Depto B', price: 60000, img: 'IMAGEN', type: 'Departamento' },
    { id:5, location:'Rosario', description:descriptionEx, name: 'Depto C', price: 50000, img: 'IMAGEN', type: 'Departamento' },
    { id:6, location:'Rosario', description:descriptionEx, name: 'Terreno', price: 25000, img: 'IMAGEN', type: 'Terreno' },
];
  return (<Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/sales">Ventas</Link>
                </li>
                <li>
                <Link to="/rentals">Alquiler</Link>
                </li>
                <li>
                <Link to="/users">Usuarios</Link>
                </li>
                <li>  
                <Link to="/profile">Perfil</Link>
                </li>
                <li>
                <Link to="/about">Nosotros</Link>
                </li>
            </ul>
          </nav> */}
          <NavBar />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact={true} path="/users">
            <Users />
            </Route>
            <Route exact={true} path="/profile">
            <Profile />
            </Route>
            <Route exact={true} path="/login">
            <LoginScreen />
            </Route>
            <AuthRoute exact={true} path="/about">
            <About />
            </AuthRoute>
            <Route exact={true} path={'/sales/detail/:id'}>
              <SaleDetail states={states}/>
            </Route>
            <Route exact={true} path={'/sales'}>
              <Sales states={states}/>
            </Route>
            <Route exact={true} path="/rentals">
            <Rentals />
            </Route>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="*">
              <h1>404</h1>
            </Route>
          </Switch>
          
        </div>
      </Router>
    );
}

export default App;
