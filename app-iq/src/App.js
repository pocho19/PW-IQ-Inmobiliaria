//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useEffect, useState} from 'react';
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
import Rentals from './components/Rentals/Rentals';
import Home from './components/Home';
import NavBar from './components/NavBar/Navbar';
import LoginScreen from './components/Users/Login';
import About from "./components/About";
import SaleDetail from "./components/Sales/SaleDetail";
import AuthRoute from './components/AuthRoute';
import States from "./components/Admin/States";
import RegisterScreen from "./components/Users/Register";

var loginGlobal = false;

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
            {/* <NavBar/> */}
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <AuthRoute exact={true} path="/admin/users">
            <NavBar/>
              <Users />
            </AuthRoute>
            <AuthRoute exact={true} path="/admin/states">
            <NavBar/>
              <States />
            </AuthRoute>
            <AuthRoute exact={true} path="/profile">
            <NavBar/>
              <Profile />
            </AuthRoute>
            <Route exact={true} path="/login">
            <NavBar/>
              <LoginScreen />
            </Route>
            <Route exact={true} path="/register">
            <NavBar/>
              <RegisterScreen />
            </Route>
            <Route exact={true} path="/about">
            <NavBar/>
            <About />
            </Route>
            <Route exact={true} path={'/sales/detail/:id'}>
            <NavBar/>
              <SaleDetail/>
            </Route>
            <Route exact={true} path={'/sales'}>
            <NavBar/>
              <Sales/>
            </Route>
            <Route exact={true} path="/rentals">
            <NavBar/>
            <Rentals />
            </Route>
            <Route exact={true} path="/">
            <NavBar/>
              <Home />
            </Route>
            <Route path="*">
            <NavBar/>
              <h1>404</h1>
            </Route>
          </Switch>
          
        </div>
      </Router>
    );
}

export default App;
