import React from 'react';

class AddUpdateLog extends React.Component {
  render() {
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
            // value={}
            // onChange={}
            />
          </div>
          <div class="form-group">
            <label htmlFor="dateOfLog">Date Played</label>
            <input
            type="text"
            class="form-control"
            id="dateOfLog"
            placeholder="Date Played"
            // value={}
            // onChange={}
            />
          </div>
          <div class="form-group">
            <label htmlFor="description">Describe Events</label>
            <input
            type="text"
            class="form-control"
            id="description"
            placeholder="Describe event"
            // value={}
            // onChange={}
            />
          </div>
          <button class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUpdateLog;
