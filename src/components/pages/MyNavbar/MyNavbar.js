import React from 'react';
import './MyNavbar.scss';
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
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-transparent">
        {/* <a className="navbar-brand" href="/">The Gamer's Journal</a> */}
        <Link to="/" className="navbar-brand app-name">The Gamer's Journal</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item active">
              <Link to='/' className="nav-links game-link">My Games</Link>
            </li>
            <li className="nav-item">
              <Link to='/new-game'className="nav-links new-link">New Game</Link>
            </li>
          </ul>
          <div className="ml-auto">
            <button className="btn btn-primary sign-out" onClick={this.logoutClickEvent}>Sign Out</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default MyNavbar;
