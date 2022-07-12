import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [isAdmin, setIsAdmin] = useState(false);//localStorage.getItem("user2")
    // const refresh = () => {
    //     setIsAdmin(localStorage.getItem("user2") === "true");
    // }
    const checkAdmin = () => {
        try {
            let isAdmin = JSON.parse(localStorage.getItem("user")).is_superuser;
            console.log("isAdmin", isAdmin);
            setIsAdmin(isAdmin);
        }catch (e) {}
    }

    const isLoggedIn = localStorage.getItem("token");
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("user2");
        window.location.reload();
        history.push('/');
    }

    return (
        <div className="navbar" onClick={ () => {
            console.log("click",isLoggedIn,isAdmin);
            checkAdmin();
            if(!isLoggedIn&&isAdmin){
                setIsAdmin(!isAdmin)
             }
        }
        }>
            {

            /* {<Link className="navbar-element btn btn-light" to="/admin">{isAdmin}aa</Link>} */}
            <Link to={'/'}><h4 className="navbar-element btn btn-light">Inicio</h4></Link>
            <Link to={'/sales'}><h4 className="navbar-element btn btn-light">Venta</h4></Link>
            <Link to={'/rentals'}><h4 className="navbar-element btn btn-light">Alquiler</h4></Link>
            <Link to={'/about'}><h4 className="navbar-element btn btn-light">Contacto</h4></Link>
            {!isLoggedIn&&<Link to="/login"><h4 type="button" className="navbar-element btn btn-light">Ingresar</h4></Link>}
            {isLoggedIn&&<Link to="/profile"><h4 type="button" className="navbar-element btn btn-light">Perfil</h4></Link>}
            {isAdmin&&<Link to="/admin/states"><h4 type="button" className="navbar-element btn btn-danger">Propiedades</h4></Link>}
            {isAdmin&&<Link to="/admin/users"><h4 type="button" className="navbar-element btn btn-danger">Usuarios</h4></Link>}
            {isLoggedIn&&<Link to="/admin/users"><h4 type="button" className="navbar-element btn btn-dark" 
            onClick={
                logout
            }>Cerrar Sesion</h4></Link>}

        </div>
    );
}
export default NavBar;