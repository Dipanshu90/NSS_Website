// src/components/ImageCarousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';
import '../styles.css';

const ImageCarousel = () => {
  const imgstyle = {
    height: "250px",
    width: "32%",
    overflow: "hidden",
    margin: "0.3%",
  }
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div className='slide'>
        <img src={img1} alt="im 1" style={imgstyle} />
        <img src={img2} alt="Im 2" style={imgstyle} />
        <img src={img3} alt="Im 3" style={imgstyle} />
      </div>
      <div className='slide'>
        <img src={img2} alt="Im 2" style={imgstyle} />
        <img src={img1} alt="Im 1" style={imgstyle} />
        <img src={img3} alt="Im 3" style={imgstyle} />
      </div>
      <div className='slide'>
        <img src={img3} alt="Im 3" style={imgstyle} />
        <img src={img1} alt="Im 1" style={imgstyle} />
        <img src={img2} alt="Im 2" style={imgstyle} />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
