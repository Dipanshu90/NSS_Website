// src/components/ImageCarousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="image1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="image2.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="image3.jpg" alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
