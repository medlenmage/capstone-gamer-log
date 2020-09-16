import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gameShape from '../../../helpers/propz/gameShape';

class GameCards extends React.Component {
  static propTypes = {
    games: gameShape.gameShape,
    deleteGame: PropTypes.func.isRequired,
  }

  deleteGameEvent = (e) => {
    e.preventDefault();
    const { deleteGame, games } = this.props;
    deleteGame(games.id);
  }

  render() {
    const { games } = this.props;

    const singleGame = `/log/${games.id}`;
    const editGame = `/edit-game/${games.id}`;

    return (
      <div className="card bg-transparent">
        <img className="card-img-top" src={games.gameImage} alt="game-cover" />
        <div className="card-body">
          <h5 className="card-title game">{games.gameName}</h5>
          <h6 className="game-genre game">{games.gameGenre}</h6>
          <p className="game">{games.dateStarted}</p>
          {
            games.currentlyPlaying === true
              ? <p className="currently-playing game">Currently playing: Yes</p>
              : <p className="currently-playing game">Currently playing: No</p>
          }
          <Link className="btn btn-primary single-game" to={singleGame}>View Log</Link>
          <Link className="btn btn-danger ml-3 edit" to={editGame}><i className="far fa-edit"></i></Link>
          <button className="btn btn-danger ml-3 delete" onClick={this.deleteGameEvent}><i className="far fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default GameCards;
