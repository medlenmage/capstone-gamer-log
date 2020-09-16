import React from 'react';
import gamesData from '../../../helpers/data/gamesData';
import authData from '../../../helpers/data/authData';

class AddGame extends React.Component {
  state = {
    gameName: '',
    gameGenre: '',
    dateStarted: '',
    gameImage: '',
    currentlyPlaying: false,
  }

  componentDidMount() {
    console.error('did mount', this.state.currentlyPlaying);
  }

  changeGameName = (e) => {
    e.preventDefault();
    this.setState({ gameName: e.target.value });
  }

  changeGameGenre = (e) => {
    e.preventDefault();
    this.setState({ gameGenre: e.target.value });
  }

  changeDate = (e) => {
    e.preventDefault();
    this.setState({ dateStarted: e.target.value });
  }

  changeGameImage = (e) => {
    e.preventDefault();
    this.setState({ gameImage: e.target.value });
  }

  changeCurrentlyPlaying = (e) => {
    this.setState({ currentlyPlaying: e.target.checked });
  }

  addAGame = (e) => {
    e.preventDefault();
    const {
      gameName,
      gameGenre,
      dateStarted,
      gameImage,
      currentlyPlaying,
    } = this.state;

    const newGame = {
      gameName,
      gameGenre,
      dateStarted,
      gameImage,
      currentlyPlaying,
      uid: authData.getUid(),
    };

    gamesData.addGame(newGame)
      .then(() => {
        this.props.history.push('/');
      })
      .catch((err) => console.error('could not add the game', err));
  }

  render() {
    const {
      gameName,
      gameGenre,
      dateStarted,
      gameImage,
      currentlyPlaying,
    } = this.state;

    return (
      <div className="add-update">
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="gameName">Game Name</label>
            <input
            type="text"
            className="form-control"
            id="gameName"
            placeholder="Game Name Here"
            value={gameName}
            onChange={this.changeGameName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gameGenre">Game Genre</label>
            <input
            type="text"
            className="form-control"
            id="gameGenre"
            placeholder="Game Genre Here"
            value={gameGenre}
            onChange={this.changeGameGenre}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateStarted">Date Started</label>
            <input
            type="text"
            className="form-control"
            id="dateStarted"
            placeholder="Start Date Here"
            value={dateStarted}
            onChange={this.changeDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gameImage">Cover Art</label>
            <input
            type="text"
            className="form-control"
            id="gameImage"
            placeholder="Cover Art Here"
            value={gameImage}
            onChange={this.changeGameImage}
            />
          </div>
            <div className="form-check">
              <input
              type="checkbox"
              className="form-check-input"
              id="currentlyPlaying"
              checked={currentlyPlaying}
              onChange={this.changeCurrentlyPlaying}
              />
              <label className="form-check-label" htmlFor="currentlyPlaying">Currently Playing</label>
            </div>
          <button className="btn btn-primary" onClick={this.addAGame}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddGame;
