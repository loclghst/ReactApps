import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Stairway to Heaven", duration: "4:20" },
    { title: "Drive Home", duration: "5:20" },
    { title: "Killshot", duration: "3:42" },
    { title: "Humble", duration: "4:42" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
