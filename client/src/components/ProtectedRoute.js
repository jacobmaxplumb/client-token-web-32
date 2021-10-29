import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
    <Route
      render={() =>
        localStorage.getItem("token") ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
};

export default ProtectedRoute;