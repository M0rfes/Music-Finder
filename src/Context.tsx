import React, { Component } from "react";
import axios from "axios";
import { key, dispatch, action } from "./util";
import { ITrack } from "./util";

interface ProviderState {
  trackList: ITrack[];
  heading: string;
}

interface ProviderStore {
  state: ProviderState;
  dispatch: dispatch;
}

const Context = React.createContext({} as ProviderStore); // type assertion on empty object
const reducer = (action: action, state: ProviderState): ProviderState => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        trackList: action.payload,
        heading: "Results"
      };
    default:
      return state;
  }
};
export class Provider extends Component<{}, ProviderState> {
  public readonly state = {
    trackList: [],
    heading: "Top 10 track"
  };

  componentDidMount() {
    axios
      .get(
        ` https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${key}`
      )
      .then(res => {
        this.setState({ trackList: res.data.message.body.track_list });
      })
      .catch(err => console.error(err));
  }
  public render() {
    const store: ProviderStore = {
      state: this.state,
      dispatch: action => this.setState(state => reducer(action, state))
    };

    return (
      <Context.Provider value={store}>{this.props.children}</Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
