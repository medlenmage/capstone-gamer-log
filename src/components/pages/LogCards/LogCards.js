import React from 'react';
import PropTypes from 'prop-types';
import gameShape from '../../../helpers/propz/gameShape';

class LogCards extends React.Component {
  static propTypes = {
    logs: gameShape.gameShape,
    deleteLog: PropTypes.func.isRequired,
  }

  deleteLogEvent = (e) => {
    e.preventDefault();
    const { deleteLog, logs } = this.props;
    deleteLog(logs.id);
  }

  render() {
    const { logs } = this.props;

    return (
      <div className="card bg-transparent">
        <img className="card-img-top" src={logs.screenshot} alt="game-cover" />
        <div className="card-body">
          <h6 className="game-genre log">{logs.dateOfLog}</h6>
          <p className="log">{logs.description}</p>
          <button className="btn btn-danger mr-3 edit"><i className="far fa-edit"></i></button>
          <button className="btn btn-danger ml-3 delete" onClick={this.deleteLogEvent}><i className="far fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default LogCards;
