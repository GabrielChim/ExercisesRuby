import React, { useContext } from "react";
import ImageCard from "./ImageCard";
import imagesContext from "./CreateContext"

const Gallery = () => {
  const images = useContext(imagesContext);
  const style = {
    width: '800px',
    margin: '40px auto 0',
    display: 'flex',
    justifyContent: 'center',
    alingItems: 'center',
    borderRadius: '5px'
  };
  return (
    <div style={style}>
      <ImageCard url={images.cat}/>
      <ImageCard url={images.transport}/>
      <ImageCard url={images.animal}/>
    </div>
  );
};
 
export default Gallery;