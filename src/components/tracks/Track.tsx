import React from "react";
import { ITrack } from "../../util";
import { Link } from "react-router-dom";
interface TrackProp {
  item: ITrack;
}
type FinalProp = TrackProp;
const Track: React.FC<FinalProp> = ({ item }) => {
  const { track } = item;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" />
              Track
            </strong>
            :{track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disk" />
              Album
            </strong>
            :{track.album_name}
          </p>
          <Link
            className="btn btn-dark btn-block"
            to={`lyrics/track/${track.track_id}`}
          >
            <i className="fas fa-chevron-right" /> View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
