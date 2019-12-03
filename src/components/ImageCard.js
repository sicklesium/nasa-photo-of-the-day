import React from "react";
import styled from 'styled-components';

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header2 = styled.h2`
  font-family: 'Turret Road', 'Verdana', sans-serif;
  font-size: 2rem;
  font-weight: bold;
`

const ImageContainer = styled.img`
  width: 75%;
  border-radius: 1rem;
`

const Excerpt = styled.p`
  max-width: 80%;
  background: midnightblue;
  color: white;
  margin: 16px;
  border: 5px solid white;
  border-radius: 1rem;
  padding: 10px;
`

const Copyright = styled.p`
  margin-left: 17vw;
  margin-top: -0.5rem;
  font-size: 0.9rem;
  font-family: 'Turret Road', 'Verdana', sans-serif;
`

const ImageCard = props => {
return (

  <ImageList>
      <div>
          <Header2><em>{props.title}</em></Header2>
      </div>

      <ImageContainer src = {props.image} alt = {props.title}></ImageContainer>
      <Excerpt>{props.explanation}</Excerpt>
      <Copyright>Copyright: {props.copyright}</Copyright>
  </ImageList>
);
};

export default ImageCard;
