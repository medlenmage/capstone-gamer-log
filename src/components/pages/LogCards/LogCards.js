import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import gameShape from '../../../helpers/propz/gameShape';

class LogCards extends React.Component {
  static propTypes = {
    logs: gameShape.gameShape,
    // log:
  }

  render() {
    const { logs } = this.props;

    return (
      <div className="card ">
        <img className="card-img-top" src={logs.screenshot} alt="game-cover" />
        <div className="card-body">
          <h6 className="game-genre">{logs.dateOfLog}</h6>
          <p>{logs.description}</p>
        </div>
      </div>
    );
  }
}

export default LogCards;
