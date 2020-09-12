import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

class MyNavbar extends React.Component {
  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="h">The Gamer's Journal</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item active">
              <Link to='/'>My Games</Link>
            </li>
            <li className="nav-item">
              <Link to='/new-game'>New Game</Link>
            </li>
          </ul>
          <div className="ml-auto">
            <button className="btn btn-danger" onClick={this.logoutClickEvent}>Sign Out</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default MyNavbar;
