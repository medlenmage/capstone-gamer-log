import React from 'react';
import { Link } from 'react-router-dom';
import logsData from '../../../helpers/data/logsData';
import LogCards from '../LogCards/LogCards';
import './LogsPage.scss';

class LogsPage extends React.Component {
  state = {
    logs: [],
  }

  getLogs = () => {
    const { gameId } = this.props.match.params;

    logsData.getLogsByGameId(gameId)
      .then((logs) => this.setState({ logs }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    const { gameId } = this.props.match.params;

    logsData.getLogsByGameId(gameId)
      .then((logs) => this.setState({ logs }))
      .catch((err) => console.error('could not get logs', err));
  }

  deleteLog = (logId) => {
    logsData.deleteLog(logId)
      .then(() => this.getLogs())
      .catch((err) => console.error(err));
  }

  render() {
    const { logs } = this.state;

    const logCard = logs.map((log) => <LogCards key={log.id} logs={log} deleteLog={this.deleteLog}/>);

    const { gameId } = this.props.match.params;

    const addLog = `/new-log/${gameId}`;

    return (
      <div className="">
        <h3 className="logs-header">Game Logs</h3>
        <Link className="btn btn-primary add-log" to={addLog}>New Log</Link>
        <div className="mb-3">
          <div className="card-columns">
            {logCard}
          </div>
        </div>
      </div>
    );
  }
}

export default LogsPage;
