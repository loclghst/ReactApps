import React from "react";
import ImageCard from "./ImageCard"; //we are using ImageCard Component to display each image
import "./ImageList.css";

const ImageList = props => {
  //we destructured the id, description and urls roperty out of image
  const images = props.images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));
  //   const images = props.images.map(image => (
  //     <img key={image.id} alt={image.description} src={image.urls.regular} />
  //   ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;

// We have to assign the key roperty only to the root element
// if we were returning say <div><img /></div> then key would go on outer <div>
