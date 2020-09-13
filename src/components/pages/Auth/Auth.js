import React from 'react';
import './auth.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  render() {
    return (
      <div className="Auth">
        <h2 className="welcome-header">Welcome!</h2>
        <h2 className="journal-header">To The Gamer's Journal!</h2>
        <i className="fas fa-gamepad fa-10x"></i>
        <button className="btn btn-primary sign-in" onClick={this.loginClickEvent}>Sign In</button>
      </div>
    );
  }
}

export default Auth;
