import React, { Component } from "react";
import { Consumer } from "../../Context";
import Track from "./Track";
interface TrackProps {
  title?: string;
}
type FinalTProp = TrackProps;
export class Tracks extends Component<FinalTProp, any> {
  render() {
    return (
      <Consumer>
        {value => {
          const { heading, trackList } = value.state;
          if (trackList.length > 0) {
            return (
              <>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {trackList.map(track => (
                    <Track key={track.track.track_id} item={track} />
                  ))}
                </div>
              </>
            );
          } else return <h1>loading</h1>;
        }}
      </Consumer>
    );
  }
}

export default Tracks;
