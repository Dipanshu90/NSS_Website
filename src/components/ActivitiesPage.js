import React, { useState } from 'react';
import './ActivitiesCarousel.css';

const activitiesData = [
  {
    title: 'Regular Activities',
    content: 'Description for Regular Activities',
  },
  {
    title: 'Special Camp',
    content: 'Description for Special Camp',
  },
  {
    title: 'Other Activities',
    content: 'Description for Other Activities',
  },
  {
    title: 'Activities for CoS Course',
    content: 'Description for CoS Course Activities',
  },
];

const ActivitiesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % activitiesData.length);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? activitiesData.length - 1 : activeIndex - 1);
  };

  return (
    <div className="activities-carousel">
      <h2>Activities</h2>
      <div className="carousel">
        {activitiesData.map((activity, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="card">
              <h3>{activity.title}</h3>
              <p>{activity.content}</p>
            </div>
          </div>
        ))}
        <button className="carousel-control prev" onClick={prevSlide}>
          &lsaquo;
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          &rsaquo;
        </button>
      </div>
    </div>
  );
};

export default ActivitiesCarousel;
