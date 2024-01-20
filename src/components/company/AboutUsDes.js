import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Unsplash, { toJson } from 'unsplash-js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutUsDes = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const unsplash = new Unsplash({ accessKey: "YOUR_UNSPLASH_ACCESS_KEY" });

    unsplash.search.photos("technology", 1, 10, { orientation: "landscape" })
      .then(toJson)
      .then(json => {
        setImages(json.results);
      });
  }, []);

  return (
    <div className="about-us-des">
      {/* SVG Wave */}
      <div className="wave-container">
        {/* Your SVG here */}
      </div>

      {/* Carousel of Images */}
      <div className="carousel-container">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img.urls.regular} alt={img.alt_description} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUsDes;



//npm install unsplash-js
//npm install react-responsive-carousel
