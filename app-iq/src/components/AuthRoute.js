import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({children, ...props}) => {
  const isLoggedIn = true;

  return (
    <Route
        {...props}
        render={ ({location}) =>
        isLoggedIn ? (
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


