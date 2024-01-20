import React from 'react';
import Slider from 'react-slick';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/AboutCarousel.css';

const AboutCarousel = () => {
  const generateImageUrl = () => {
    // Implement a function to generate random image URLs
    // For example, using Lorem Picsum: https://picsum.photos/
    const randomWidth = Math.floor(Math.random() * 400) + 800;
    const randomHeight = Math.floor(Math.random() * 400) + 600;
    return `https://picsum.photos/${randomWidth}/${randomHeight}`;
  };

  const events = [
    { imageUrl: generateImageUrl(), description: 'Event 1 description' },
    { imageUrl: generateImageUrl(), description: 'Event 2 description' },
    // Add more events
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="about-carousel">
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="carousel-item" data-tip={event.description}>
            <img src={event.imageUrl} alt={`Event ${index + 1}`} />
            <ReactTooltip place="top" type="dark" effect="float" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutCarousel;
