export const key = "1922ec717c33a1fd7d8fea69ffc3785e";

export interface ITrack {
  track: {
    album_id: number;
    album_name: string;
    artist_id: number;
    artist_name: string;
    commontrack_id: number;
    explicit: number;
    has_lyrics: number;
    has_richsync: number;
    has_subtitles: number;
    instrumental: number;
    num_favourite: number;
    primary_genres: { music_genre_list: musicGeneres[] };
    restricted: number;
    track_edit_url: string;
    track_id: number;
    track_name: string;
    track_name_translation_list: any[];
    track_rating: number;
    track_share_url: string;
    updated_time: string;
  };
}
type musicGeneres = {
  music_genre: {
    music_genre_id: number;
    music_genre_name: string;
    music_genre_name_extended: string;
    music_genre_parent_id: number;
    music_genre_vanity: string;
  };
};
export interface ILyrics {
  explicit: number;
  lyrics_body: string;
  lyrics_copyright: string;
  lyrics_id: number;
  pixel_tracking_url: string;
  script_tracking_url: string;
  updated_time: string;
}
export type action = { type: string; payload?: any };

export type dispatch = (action: action) => void;
