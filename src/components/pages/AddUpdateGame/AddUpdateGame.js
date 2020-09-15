import React from 'react';

class AddUpdateGame extends React.Component {
  render() {
    return (
      <div className="add-update">
        <form className="col-6 offset-3">
          <div class="form-group">
            <label htmlFor="gameName">Game Name</label>
            <input
            type="text"
            class="form-control"
            id="gameName"
            placeholder="Game Name Here"
            // value={}
            // onChange={}
            />
          </div>
          <div class="form-group">
            <label htmlFor="gameGenre">Game Genre</label>
            <input
            type="text"
            class="form-control"
            id="gameGenre"
            placeholder="Game Genre Here"
            // value={}
            // onChange={}
            />
          </div>
          <div class="form-group">
            <label htmlFor="dateStarted">Date Started</label>
            <input
            type="text"
            class="form-control"
            id="dateStarted"
            placeholder="Start Date Here"
            // value={}
            // onChange={}
            />
          </div>
          <div class="form-group">
            <label htmlFor="gameImage">Cover Art</label>
            <input
            type="text"
            class="form-control"
            id="gameImage"
            placeholder="Cover Art Here"
            // value={}
            // onChange={}
            />
          </div>
          <div class="form-check">
            <input
            type="checkbox"
            class="form-check-input"
            id="currentlyPlaying"
            />
            <label class="form-check-label" htmlFor="currentlyPlaying">Currently Playing</label>
          </div>
          <button class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUpdateGame;
