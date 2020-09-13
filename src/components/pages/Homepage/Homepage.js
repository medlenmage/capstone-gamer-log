import React from 'react';
import gamesData from '../../../helpers/data/gamesData';
import authData from '../../../helpers/data/authData';
import BuildCards from '../../shared/BuildCards/BuildCards';

class Homepage extends React.Component {
  state = {
    games: [],
  }

  componentDidMount() {
    gamesData.getGamesByUid(authData.getUid())
      .then((games) => this.setState({ games }))
      .catch((err) => console.error('could not get games', err));
  }

  render() {
    const { games } = this.state;

    const gameCards = games.map((game) => <BuildCards key={game.id} games={game} />);

    return (
      <div className="">
        <h3>Homepage</h3>
        <div className="mb-3">
          <div className="card-columns">
            {gameCards}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
