import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);

//Note how we use connect: we define a function mapStateToProps which takes state as argument
//mapStateToProps is the first argument to connect
//mapStateToProps will return the part of the state we care about as an js object
//Whatever mapStateToProps returns will end up as props on the component(the one we pass to connect)
//here we are returning the songs part of state

//if we console.log(this.props) we will see that we also have a reference to dispatch() of redux
//but there is a better way for it
//Anytime the application state is upated the mapStateToProps() will run
//
//
//Notice we imported the action creator selectSong as well, an  passed it as 2nd argument to connect()
//inside an object, now this will also become available on the props, thats why we can use it
//in our component
//
//
//also note how we passed the action creator to the button , onClick as an arrow function---> why did
//we do so? cause we want to call the function with a song (ie with an argument), so we used arrow
//functions

//why did we pass the action creator to connect insted of directly passing it to button onClick?
//becuase redux is not magic, it doesnt autmatically detect action creators being called, and
//it doesn't automatically detect a function returning an object that is a 'action'

//so how does redux know of the action creator when we are passing it to connect(2nd arg)
//because connect internally calls the dispatch function of redux with the action creator
//that we gave it
