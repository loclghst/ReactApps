import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  //we initialized images as an empty so that we can access the array helper functions
  state = { images: [] };

  //we are passing this callback down to the SearchBar
  onSearchSubmit = async term => {
    //axios takes two agruments: First is the endpoint, 2nd is options
    //we specified the options as per the api endpoint requirement

    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;
