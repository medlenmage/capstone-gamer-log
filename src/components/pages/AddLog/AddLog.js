import React from 'react';
import logsData from '../../../helpers/data/logsData';

class AddLog extends React.Component {
  state = {
    screenshot: '',
    dateOfLog: '',
    description: '',
  }

  changeScreenshot = (e) => {
    e.preventDefault();
    this.setState({ screenshot: e.target.value });
  }

  changeDate = (e) => {
    e.preventDefault();
    this.setState({ dateOfLog: e.target.value });
  }

  changeDescription = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  addALog = (e) => {
    e.preventDefault();
    const { screenshot, dateOfLog, description } = this.state;

    const newLog = {
      screenshot,
      dateOfLog,
      description,
      gameId: this.props.match.params.gameId,
    };

    logsData.addNewLog(newLog)
      .then(() => {
        this.props.histoy.push(`/log/${this.props.match.params.gameId}`);
      })
      .catch((err) => console.error('could not add log', err));
  }

  render() {
    const { screenshot, dateOfLog, description } = this.state;

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
          <button class="btn btn-primary" onClick={this.addALog}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddLog;
