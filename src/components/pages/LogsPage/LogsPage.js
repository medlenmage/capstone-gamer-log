import React from 'react';
import logsData from '../../../helpers/data/logsData';
import LogCards from '../LogCards/LogCards';

class LogsPage extends React.Component {
  state = {
    logs: [],
  }

  componentDidMount() {
    const { gameId } = this.props.match.params;

    logsData.getLogsByGameId(gameId)
      .then((logs) => this.setState({ logs }))
      .catch((err) => console.error('could not get logs', err));
  }

  render() {
    const { logs } = this.state;

    const logCard = logs.map((log) => <LogCards key={log.id} logs={log} />);

    return (
      <div className="">
        <h3>Homepage</h3>
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
