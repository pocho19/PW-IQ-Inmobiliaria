import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({children, ...props}) => {
  const isLog = localStorage.getItem("token");

  return (
    <Route
        {...props}
        render={ ({location}) =>
        isLog ? (
            children
            ) : (
            <Redirect 
                to={{
                    pathname: "/login",
                    state: { from: location }
                }} 
            />
            )
        }
    />
  );
}
export default AuthRoute;


