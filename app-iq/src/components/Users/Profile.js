import { useEffect, useState } from "react";
import { httpGetB } from "../../utils/httpFunctions";
import NavBar from "../NavBar/Navbar";


const Profile = (props) => {


    const [user, setUser] = useState({});

    const fetchUser = () => {
        httpGetB('api/me/')
            .then((res) => {
                setUser(res.data)
                console.log('usuario get',res.data);
            })
    }
    
    useEffect(fetchUser, []);
    
    localStorage.setItem('user', JSON.stringify(user));

    return (
        <div className="profile-screen p-5">
            <h3>Perfil</h3>
            <p>username: {user.username}</p>
            <p>id: {user.id}</p>
            <p>email: {user.email}</p>
            <p>nombre: {user.first_name}</p>
            <p>apellido: {user.last_name}</p>
            <p>super: {user.is_superuser?'si':'no'}</p>
            <p>super: {
                JSON.parse(localStorage.getItem('user')).is_superuser?'si':'no'
            }</p>
        </div>
    );
}
export default Profile;