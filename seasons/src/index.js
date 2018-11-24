import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";


class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("The component is rendered");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentWillUpdate() {
    console.log("The component was updated. It re-rendered itself");
  }

  renderContent() {
    //conditional rendering depending upon the state
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      //do not confuse state with props here.
      //We are passing a property of state as a props to SeasonDisplay
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
      return (
          <div>{this.renderContent()}</div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
