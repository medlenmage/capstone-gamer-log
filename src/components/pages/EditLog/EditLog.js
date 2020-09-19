import React from 'react';
import logsData from '../../../helpers/data/logsData';
import '../logFormStyles/logFormStyles.scss';

class AddLog extends React.Component {
  state = {
    log: {
      screenshot: '',
      dateOfLog: '',
      description: '',
      gameId: '',
    },
  }

  componentDidMount() {
    logsData.getLogsById(this.props.match.params.logId)
      .then((res) => {
        const log = res.data;
        this.setState({ log });
      })
      .catch((err) => console.error('could not get log', err));
  }

  changeScreenshot = (e) => {
    e.preventDefault();

    const { log } = this.state;
    log.screenshot = e.target.value;
    this.setState({ log });
  }

  changeDate = (e) => {
    e.preventDefault();
    const { log } = this.state;
    log.dateOfLog = e.target.value;
    this.setState({ log });
  }

  changeDescription = (e) => {
    e.preventDefault();
    const { log } = this.state;
    log.description = e.target.value;
    this.setState({ log });
  }

  updateLog = (e) => {
    e.preventDefault();
    const { logId } = this.props.match.params;

    logsData.editALog(logId, this.state.log)
      .then((res) => {
        this.props.history.push(`/log/${res.data.gameId}`);
      })
      .catch((err) => console.error('could not update log', err));
  }

  render() {
    const { screenshot, dateOfLog, description } = this.state.log;

    return (
      <div className="add-update">
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="screenshot">Game Screenshot</label>
            <input
            type="text"
            className="form-control log-input"
            id="screenshot"
            placeholder="Add a Screenshot"
            value={screenshot}
            onChange={this.changeScreenshot}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfLog">Date Played</label>
            <input
            type="text"
            className="form-control log-input"
            id="dateOfLog"
            placeholder="Date Played"
            value={dateOfLog}
            onChange={this.changeDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Describe Events</label>
            <input
            type="text"
            className="form-control log-input"
            id="description"
            placeholder="Describe event"
            value={description}
            onChange={this.changeDescription}
            />
          </div>
          <button className="btn btn-primary log-form-btn" onClick={this.updateLog}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddLog;
