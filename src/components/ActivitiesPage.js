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
    <div className="activities-carousel_">
      <h2>Activities</h2>
      <div className="carousel_">
        {activitiesData.map((activity, index) => (
          <div
            key={index}
            className={`slide_ ${index === activeIndex ? 'active_' : ''}`}
          >
            <div className="card_">
              <h3>{activity.title}</h3>
              <p>{activity.content}</p>
            </div>
          </div>
        ))}
        <button className="carousel-control_ prev_" onClick={prevSlide}>
          &lsaquo;
        </button>
        <button className="carousel-control_ next_" onClick={nextSlide}>
          &rsaquo;
        </button>
      </div>
    </div>
  );
};

export default ActivitiesCarousel;
