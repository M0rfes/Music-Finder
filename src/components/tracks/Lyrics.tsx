import React, { Component } from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import axios from "axios";
import { key, ILyrics, ITrack } from "../../util";
interface LyricsState {
  track: ITrack;
  lyrics: ILyrics;
}
export class Lyrics extends Component<RouteComponentProps, LyricsState> {
  readonly state = {
    track: {} as ITrack,
    lyrics: {} as ILyrics
  };
  private readonly id = (this.props.match.params as { id: string }).id;
  componentDidMount() {
    axios
      .get(
        ` https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.id
        }&apikey=${key}`
      )
      .then(res => {
        console.log(res);
        this.setState({ lyrics: res.data.message.body.lyrics });
        return axios.get(
          ` https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.id
          }&apikey=${key}`
        );
      })
      .then(res => {
        console.log(res);
        this.setState({ track: res.data.message.body });
      })
      .catch(err => console.error(err));
  }
  render() {
    const { track, lyrics } = this.state;
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <h1>Loading</h1>;
    } else {
      return (
        <>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track.track_name} By{" "}
              <span className="text-secondary">{track.track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Rating</strong>: {track.track.track_rating}
            </li>
            <li className="list-group-item">
              <strong>Full lyrics</strong>:{" "}
              <a href={track.track.track_share_url} target="_blank">
                {" "}
                Get full lyrics
              </a>
            </li>
            <li className="list-group-item">
              <strong>YouTube link</strong>:{" "}
              <a
                href={`https://www.youtube.com/results?search_query=${
                  track.track.track_name
                }`}
                target="_blank"
              >
                {" "}
                Get full lyrics
              </a>
            </li>
            <li className="list-group-item">
              <strong>Genres</strong>:{" "}
              {track.track.primary_genres.music_genre_list.map(music => (
                <span key={music.music_genre.music_genre_id}>
                  {music.music_genre.music_genre_name},
                </span>
              ))}
            </li>
          </ul>
        </>
      );
    }
  }
}

export default withRouter(Lyrics);
