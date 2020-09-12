import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connections';
import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import GameForm from '../components/pages/AddUpdateGame/AddUpdateGame';
import LogForm from '../components/pages/AddUpdateLog/AddUpdateLog';
import LogsPage from '../components/pages/LogsPage/LogsPage';
import Homepage from '../components/pages/Homepage/Homepage';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/landing', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
        <>
          {
            authed
              ? <MyNavbar />
              : <Auth />
          }
          <div className="container">
            <Switch>
              <PrivateRoute path="/" exact component={Homepage} authed={authed} />
              <PrivateRoute path="/log/:gameId" component={LogsPage} authed={authed} />
              <PrivateRoute path="/new-game" component={GameForm} authed={authed} />
              <PrivateRoute path="/edit-game/:gameId" component={GameForm} authed={authed} />
              <PrivateRoute path="/new-log/:gameId" component={LogForm} authed={authed} />
              <PrivateRoute path="/edit-log/:logId" component={LogForm} authed={authed} />
              <PublicRoute path="/landing" component={Auth} authed={authed} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
