import React from 'react';
import gamesData from '../../../helpers/data/gamesData';
import authData from '../../../helpers/data/authData';
import '../gameFormStyles/gameFormStyles.scss';

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
    if (e.target.files[0]) {
      this.setState({ gameImage: e.target.files[0] });
    }
  }

  // changeGameImage = (e) => {
  //   e.preventDefault();
  //   this.setState({ gameImage: e.target.value });
  // }

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
      <div className="formContainer">
        <h4 className="watcha-playin">Whatcha Playin???</h4>
        <div className="add-update">
          <form className="col-6 offset-3">
            <div className="form-group">
              <label htmlFor="gameName" className="games-label">Game Name</label>
              <input
              type="text"
              className="form-control game-input"
              id="gameName"
              placeholder="Game Name Here"
              value={gameName}
              onChange={this.changeGameName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gameGenre" className="games-label">Game Genre</label>
              <input
              type="text"
              className="form-control game-input"
              id="gameGenre"
              placeholder="Game Genre Here"
              value={gameGenre}
              onChange={this.changeGameGenre}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateStarted" className="games-label">Date Started</label>
              <input
              type="text"
              className="form-control game-input"
              id="dateStarted"
              placeholder="Start Date Here"
              value={dateStarted}
              onChange={this.changeDate}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gameImage" className="games-label">Cover Art</label>
              <input
              type="file"
              className="form-control game-input"
              id="gameImage"
              placeholder="Cover Art Here"
              value={gameImage}
              onChange={this.changeGameImage}
              />
            </div>
              <div className="form-check">
                <input
                type="checkbox"
                className="form-check-input game-input"
                id="currentlyPlaying"
                checked={currentlyPlaying}
                onChange={this.changeCurrentlyPlaying}
                />
                <label className="form-check-label games-label" htmlFor="currentlyPlaying">Currently Playing</label>
              </div>
            <button className="btn btn-primary game-form-btn" onClick={this.addAGame}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddGame;
