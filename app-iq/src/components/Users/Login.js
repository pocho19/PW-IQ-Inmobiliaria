
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { useEffect, useState } from 'react';
import { httpGetB, httpPost, httpPostB } from '../../utils/httpFunctions';
const LoginScreen = () => {

  const [user, setUser] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isLoggedIn = localStorage.getItem('token');
  
  localStorage.removeItem("user");
  // if(isLoggedIn){
  //     localStorage.removeItem('token');
  //     localStorage.removeItem('user');
  //     window.location.reload();
  // }
  // useEffect(() => {
  //   console.log(isLoggedIn);
  // }, [isLoggedIn]);
  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

  const fetchUser = () => {
    httpGetB('api/me/')
        .then((res) => {
            setUser(res.data)
          console.log('usuario get',res.data);
          localStorage.setItem('user2',res.data.is_superuser);
          console.log('usua2 local',localStorage.getItem('user2'));
        })
  }
  const login = () => {
      httpPost('api/login/', {
        username: username,
        password: password,
      })
      .then( (res) => {
          fetchUser();
        console.log('usuario post',res.data);
        localStorage.setItem('token', res.data.access);
      })
      .then(async() => {
        await timeout(1500); // wait for 1 second
        history.push('/profile', {
          state: {
            user: user,
            },
          });
        window.location.reload();

      })
  }

  const history = useHistory();

  return (
    <div className="login-screen">
      <div className="login-screen2">
        <div className="login-conteiner">
          <div className="login-screen-header mb-5">
            <h1>Ingreso </h1>
          </div>
          <form onSubmit={
              (e) => {
                  e.preventDefault();
                  login();
              }
          }>
            <div className="input-conteiner mb4">
              <label htmlFor="floatingInput" className='form-label'>Nombre de Usuario</label>
              <input type="text" className="form-control" id="floatingInput" placeholder="username"
                value={username} onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-conteiner mb-3">
              <label htmlFor="floatingPassword" className='form-label'>Contraseña</label>
              <input type="password" className="form-control" id="floatingPassword" placeholder="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <button type="button" className="btn btn-primary" onClick={
                          (e) => {
                            e.preventDefault();
                            login();
                        }
          }>Ingresar</button>
          <p/>
          <Link to="/register"><button type="button" className="btn btn-light">Registrarse</button></Link>
        </div>
      </div>
    </div>
  );
}
export default LoginScreen;
