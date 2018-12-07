// Making the image grid the way we wanted is difficult using just CSS.
// So we create an ImageCard Component that will render each image individually
// and set the CSS property for that image according to its height , so that
// correct css is applied to each image

import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

// How to make the grid as we want it?

// Let the ImageCard render itself and its image.
// Reach into the DOM and figure out the height of the image
// Set the image height on state to get the image to rerender
// When re rendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space
