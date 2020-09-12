import React from 'react';
import './App.scss';
// import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connections';
import Auth from '../components/pages/Auth/Auth';

fbConnection();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Gamer Log</h2>
        <Auth />
      </div>
    );
  }
}

export default App;
