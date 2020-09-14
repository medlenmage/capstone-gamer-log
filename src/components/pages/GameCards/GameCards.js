import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import gameShape from '../../../helpers/propz/gameShape';

class GameCards extends React.Component {
  static propTypes = {
    games: gameShape.gameShape,
  }

  render() {
    const { games } = this.props;

    const singleGame = `/log/${games.id}`;

    return (
      <div className="card ">
        <img className="card-img-top" src={games.gameImage} alt="game-cover" />
        <div className="card-body">
          <h5 className="card-title">{games.gameName}</h5>
          <h6 className="game-genre">{games.gameGenre}</h6>
          <p>{games.dateStarted}</p>
          {
            games.currentlyPlaying === true
              ? <p className="currently-playing">Currently playing: Yes</p>
              : <p className="currently-playing">Currently playing: No</p>
          }
          <Link className="btn btn-primary" to={singleGame}>View Log</Link>
        </div>
      </div>
    );
  }
}

export default GameCards;
