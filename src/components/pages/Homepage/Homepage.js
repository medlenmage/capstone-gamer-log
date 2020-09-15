import React from 'react';
import gamesData from '../../../helpers/data/gamesData';
import authData from '../../../helpers/data/authData';
import GameCards from '../GameCards/GameCards';
import smashData from '../../../helpers/data/smashData';

class Homepage extends React.Component {
  state = {
    games: [],
  }

  getGames = () => {
    gamesData.getGamesByUid(authData.getUid())
      .then((games) => this.setState({ games }))
      .catch((err) => console.error('could not get games', err));
  };

  componentDidMount() {
    gamesData.getGamesByUid(authData.getUid())
      .then((games) => this.setState({ games }))
      .catch((err) => console.error('could not get games', err));
  }

  deleteGame = (gameId) => {
    smashData.totallyRemoveGame(gameId)
      .then(() => this.getGames())
      .catch((err) => console.error(err));
  };

  render() {
    const { games } = this.state;

    const gameCard = games.map((game) => <GameCards key={game.id} games={game} deleteGame={this.deleteGame}/>);

    return (
      <div className="">
        <h3>Homepage</h3>
        <div className="mb-3">
          <div className="card-columns">
            {gameCard}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
