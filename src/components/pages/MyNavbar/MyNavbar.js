import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="h">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/home'>My Games</Link>
            </li>
            <li className="nav-item">
              <Link to='/new-game'>New Game</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="h">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="h">Disabled</a>
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
