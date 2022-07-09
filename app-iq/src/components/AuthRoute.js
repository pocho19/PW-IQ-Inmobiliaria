

const AuthRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('token') !== null;
  isLoggedIn = false;

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}