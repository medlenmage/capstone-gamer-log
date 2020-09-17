import React from 'react';
import { Link } from 'react-router-dom';
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

    const editLog = `/edit-log/${logs.id}`;

    return (
      <div className="card bg-transparent">
        <img className="card-img-top" src={logs.screenshot} alt="game-cover" />
        <div className="card-body">
          <h6 className="game-genre log">{logs.dateOfLog}</h6>
          <p className="log">{logs.description}</p>
          <Link className="btn btn-danger mr-3 edit" to={editLog}><i className="far fa-edit"></i></Link>
          <button className="btn btn-danger ml-3 delete" onClick={this.deleteLogEvent}><i className="far fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default LogCards;
