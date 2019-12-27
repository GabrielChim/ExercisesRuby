import React from "react";
 
const ImageCard = props => {
  const style = {
    margin: '10px',
  };
  return (
    <img style={style} src={props.url} />
  );
};
 
export default ImageCard;