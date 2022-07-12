
import './Login.css';
import { useEffect, useState } from 'react';
import { httpGet, httpPost } from '../../utils/httpFunctions';
import { Link } from 'react-router-dom';
const axios = require('axios');

const RegisterScreen = () => {
  
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
    
  // const fetchUser = () => {
  //     httpGet('api/register')
  //         .then((res) => setUser(res.data) )
  // }

  const createUser = () => {
      httpPost('api/register', {
          username: username,
          password: password,
          email: email,
          is_superuser: false,
          first_name: name,
          last_name: lastName,
      })
          // .then(fetchUser)
  }
  // useEffect(fetchUser, [])

  return (
    <div className="login-screen">
      <div className="login-screen2">
        <div className="login-conteiner">
          <div className="login-screen-header mb-5">
            <h1>Registrarse</h1>
          </div>
          <div className="input-conteiner mb4">
            <label htmlFor="floatingInput" className='form-label'>Nombre de usuario</label>
            <input type="email" className="form-control" id="floatingInput" placeholder="username"
              value={username} onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-conteiner mb4">
            <label htmlFor="floatingInput" className='form-label'>Email </label>
            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-conteiner mb-3">
            <label htmlFor="floatingPassword" className='form-label'>Contraseña</label>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-conteiner mb4">
            <label htmlFor="floatingInput" className='form-label'>Nombre</label>
            <input type="email" className="form-control" id="floatingInput" placeholder="nombre"
              value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-conteiner mb4">
            <label htmlFor="floatingInput" className='form-label'>Apellido</label>
            <input type="email" className="form-control" id="floatingInput" placeholder="apellido"
              value={lastName} onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary"  onClick={
            (e)=>{
                e.preventDefault();
                createUser();
                console.log('log',user,password,email);
            }
          }>Registrarse</button>
          <p/>
          <Link to="/login"><button type="button" className="btn btn-light">Ingresar</button></Link>
        </div>
      </div>
    </div>
  );
}
export default RegisterScreen;