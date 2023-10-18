// src/components/ImageCarousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';

const ImageCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src={img1} alt="Image 1" height={300} width={200} />
      </div>
      <div>
        <img src={img2} alt="Image 2" height={300} />
      </div>
      <div>
        <img src={img3} alt="Image 3" height={300} />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
