import React from "react";

const ImageCard = props => {
return (


  <div className="image-list">
      <div>
          <h2><em>{props.title}</em></h2>
      </div>

      <img className = "imageContainer" src = {props.image} alt = {props.title}></img>
      <p className = "excerpt">{props.explanation}</p>
      <p className = "copyright">Copyright: {props.copyright}</p>
    </div>
);
};

export default ImageCard;
