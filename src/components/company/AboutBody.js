import React from 'react';
// import './AboutBody.css'; // Make sure to create a corresponding CSS file

const AboutBody = () => {
  return (
    <div className="about-hero-head bg-blue-100 h-[200px] w-full flex items-center justify-between mb-11">
      <div className="text-left pl-8">
        <div className="text-lg font-bold text-gray-700">OUR COMPANY</div>
      </div>
      <div className="flex items-center w-1/2">
        {/* SVG and Tailwind CSS for responsive and modern design */}
        <div className="w-1/2 bg-white p-8 ml-60 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <div className="our-mission-content">
            <div className="our-mission-content-heading-wrap">
              <h2 className="h2-title about-card-head-heading-text underline text-blue-800">
                Our <span className="gradient-heading">Mission</span>
              </h2>
            </div>
            <div className="our-mission-content-paragraph-wrap">
              <p className="paragraph large text-gray-800">
                At Cider, our mission is to help organizations develop their technology capital,
                in order to generate wealth, position for growth, and maximize return on investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
