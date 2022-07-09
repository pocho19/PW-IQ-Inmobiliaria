
import './Login.css';
const LoginScreen = () => {
  return (
    <div className="login-screen">
      <div className="login-screen2">
        <div className="login-conteiner">
          <div className="login-screen-header mb-5">
            <h1>Login</h1>
          </div>
          <div className="input-conteiner mb4">
            <label htmlFor="floatingInput" className='form-label'>Email address</label>
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          </div>
          <div className="input-conteiner mb-3">
            <label htmlFor="floatingPassword" className='form-label'>Password</label>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          </div>
          <button type="button" className="btn btn-primary">Primary</button>
        </div>
      </div>
    </div>
  );
}
export default LoginScreen;
