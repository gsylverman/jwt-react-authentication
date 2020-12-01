import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Admin from './components/Admin.js/admin';
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(state=>state.login.token);
  return <Route {...rest} render={props => (
    auth ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
};

export function Routes () {
  return (
    <Switch>
      <ProtectedRoute path="/admin" component={Admin} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/" component={Home} exact />
    </Switch>
  );
}