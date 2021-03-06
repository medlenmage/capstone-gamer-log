import React from 'react';
import gamesData from '../../../helpers/data/gamesData';
import '../gameFormStyles/gameFormStyles.scss';

class EditGame extends React.Component {
  state = {
    game: {
      gameName: '',
      gameGenre: '',
      dateStarted: '',
      gameImage: '',
      currentlyPlaying: false,
    },
  }

  componentDidMount() {
    gamesData.getGameById(this.props.match.params.gameId)
      .then((res) => {
        const game = res.data;
        this.setState({ game });
      })
      .catch((err) => console.error('could not get games', err));
  }

  changeGameName = (e) => {
    e.preventDefault();
    const { game } = this.state;
    game.gameName = e.target.value;
    this.setState({ game });
  }

  changeGameGenre = (e) => {
    e.preventDefault();
    const { game } = this.state;
    game.gameGenre = e.target.value;
    this.setState({ game });
  }

  changeDate = (e) => {
    e.preventDefault();
    const { game } = this.state;
    game.dateStarted = e.target.value;
    this.setState({ game });
  }

  changeGameImage = (e) => {
    e.preventDefault();
    const { game } = this.state;
    game.gameImage = e.target.value;
    this.setState({ game });
  }

  changeCurrentlyPlaying = (e) => {
    const { game } = this.state;
    game.currentlyPlaying = e.target.checked;
    this.setState({ game });
  }

  updateGame = (e) => {
    e.preventDefault();
    const { gameId } = this.props.match.params;

    gamesData.updateGame(gameId, this.state.game)
      .then(() => {
        this.props.history.push('/');
      })
      .catch((err) => console.error('could not edit the game', err));
  }

  render() {
    const {
      gameName,
      gameGenre,
      dateStarted,
      gameImage,
      currentlyPlaying,
    } = this.state.game;

    return (
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
            type="text"
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
          <button className="btn btn-primary game-form-btn" onClick={this.updateGame}>Submit</button>
        </form>
      </div>
    );
  }
}

export default EditGame;
