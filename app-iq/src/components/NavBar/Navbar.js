import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
//function NavBar(){
    return (
        <div className="navbar">
            <Link to={'/'}><h4 className="navbar-element">Inicio</h4></Link>
            <Link to={'/sales'}><h4 className="navbar-element">Venta</h4></Link>
            <Link to={'/rentals'}><h4 className="navbar-element">Alquiler</h4></Link>
            <Link to={'/about'}><h4 className="navbar-element">Contacto</h4></Link>
        </div>
    );
}
export default NavBar;