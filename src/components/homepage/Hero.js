// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';
import { FaGlobe, FaBuilding, FaClipboard, FaMoneyBill } from 'react-icons/fa';
import BackgroundImage from '../../assets/pexels-pixabay-258160.jpg';

const Hero = () => {
  return (
    <header className="hero-container with-padding" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="overlay"></div>
      <div className="hero-content text-white text-center">
        <h1 className="text-6xl font-extrabold mb-4">CIDER GLOBAL BUSINESS SOLUTIONS</h1>

        <div className="box-container">
          <div className="box">
            <p className="box-text">Global Technology</p>
            {/* <FaGlobe size={10} color="#fff" className='pl-4' /> */}
          </div>
          <div className="box">
            <p className="box-text">Capital Development</p>
            {/* <FaBuilding size={10} color="#fff" /> */}
          </div>
          <div className="box">
            <p className="box-text">Consulting</p>
            {/* <FaClipboard size={10} color="#fff" /> */}
          </div>
          <div className="box">
            <p className="box-text">Investment</p>
            {/* <FaMoneyBill size={10} color="#fff" /> */}
          </div>
        </div>

        
      </div>
    </header>
  );
};

export default Hero;
