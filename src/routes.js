import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login';

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
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/" component={Home} exact />
    </Switch>
  );
}