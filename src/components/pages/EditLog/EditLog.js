import React from 'react';
import logsData from '../../../helpers/data/logsData';

class AddLog extends React.Component {
  state = {
    log: {
      screenshot: '',
      dateOfLog: '',
      description: '',
    },
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
    const { logId } = this.props.match.params.logId;

    logsData.editALog(logId, this.state.log)
      .then(() => {
        this.props.history.push(`/log/${this.props.match.gameId}`);
      })
      .catch((err) => console.error('could not update log'));
  }

  render() {
    const { screenshot, dateOfLog, description } = this.state.log;

    return (
      <div className="add-update">
        <form className="col-6 offset-3">
          <div class="form-group">
            <label htmlFor="screenshot">Game Screenshot</label>
            <input
            type="text"
            class="form-control"
            id="screenshot"
            placeholder="Add a Screenshot"
            value={screenshot}
            onChange={this.changeScreenshot}
            />
          </div>
          <div class="form-group">
            <label htmlFor="dateOfLog">Date Played</label>
            <input
            type="text"
            class="form-control"
            id="dateOfLog"
            placeholder="Date Played"
            value={dateOfLog}
            onChange={this.changeDate}
            />
          </div>
          <div class="form-group">
            <label htmlFor="description">Describe Events</label>
            <input
            type="text"
            class="form-control"
            id="description"
            placeholder="Describe event"
            value={description}
            onChange={this.changeDescription}
            />
          </div>
          <button class="btn btn-primary" onClick={this.updateLog}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddLog;
