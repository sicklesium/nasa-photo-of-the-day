import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
`

export default function ImageList() {
    const [image, setImage] = useState([]);

useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-01`)
      .then(response => {
        console.log(response.data);
        setImage(response.data);
      })
      .catch(error => {
        console.log("Unfortunately, you received an error: ", error);
      });
  }, []);


  return (
    <Container>
        <ImageCard
            title = {image.title}
            explanation = {image.explanation}
            image = {image.hdurl}
            copyright = {image.copyright}
        />
    </Container>
  )


}
