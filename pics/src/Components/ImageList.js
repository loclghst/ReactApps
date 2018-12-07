import React from "react";
import ImageCard from "./ImageCard"; //we are using ImageCard Component to display each image
import "./ImageList.css";

const ImageList = props => {
  const images = props.images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));
  //   const images = props.images.map(image => (
  //     <img key={image.id} alt={image.description} src={image.urls.regular} />
  //   ));

  //   we can destructur the id, description and urls property out of image
  //   const images = props.images.map(({id,description,urls}) => (
  //     <img key={id} alt={description} src={urls.regular} />
  //   ));



  return <div className="image-list">{images}</div>;
};

export default ImageList;

// We have to assign the key property only to the root element
// if we were returning say <div><img /></div> then key would go on outer <div>
