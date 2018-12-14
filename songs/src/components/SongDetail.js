import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) return <div>Select a song to view details.</div>;
  return (
    <div>
      <h3>Details For:</h3>
      <p>
        Title: {selectedSong.title}
        <br/>
        Duration: {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(
  mapStateToProps,
  null
)(SongDetail);
