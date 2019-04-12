import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from "axios";
import { key, dispatch } from "../../util";
interface State {
  trackTitle: string;
}
export class Search extends Component<any, State> {
  readonly state = {
    trackTitle: ""
  };
  handelSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  handelOnChange(
    dispatch: dispatch,
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    //@ts-ignore
    this.setState({ [e.target.name]: e.target.value });
    axios
      .get(
        ` https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc=1&apikey=${key}`
      )
      .then(res =>
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        })
      )
      .catch(e => console.error(e));
  }
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" />
                Search
              </h1>
              <p className="lead text-center"> get Songs</p>
              <form className="from-group" onSubmit={this.handelSubmit}>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Song...."
                  name="trackTitle"
                  value={this.state.trackTitle}
                  onChange={this.handelOnChange.bind(this, value.dispatch)}
                />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
