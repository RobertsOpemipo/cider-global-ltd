import React, { useState, useEffect } from 'react';
import { FaCloud, FaDatabase, FaChartBar, FaCog } from 'react-icons/fa';
import '../styles/WhatWeDo.css';


const WhatWeDo = () => {
    const [randomText, setRandomText] = useState('');
    const cardData = [
        { title: 'Enterprise Cloud Applications', icon: <FaCloud color="#3498db" /> },
        { title: 'Cloud Migration Companies', icon: <FaDatabase color="#3498db" /> },
        { title: 'Analytics & Business Intelligence', icon: <FaChartBar color="#3498db" /> },
        { title: 'Business Integration & Automation', icon: <FaCog color="#3498db" /> },
    ];

    useEffect(() => {
        // Generate random text from an array of options
        const textOptions = [
        'We provide cutting-edge solutions for enterprise cloud applications.',
        'Helping companies seamlessly migrate to the cloud for improved efficiency.',
        'Transforming data into insights with analytics and business intelligence.',
        'Integrating and automating business processes for increased productivity.',
        ];
        const randomIndex = Math.floor(Math.random() * textOptions.length);
        setRandomText(textOptions[randomIndex]);
    }, []);

    return (
        <div className="what-we-do-container">
        {/* Animated Header */}
        <h1 className="animated-header">What We Do</h1>

        {/* Random Text */}
        <p className="random-text">{randomText}</p>

        {/* Card Designs */}
        <div className="card-container">
            {cardData.map((card, index) => (
            <div key={index} className="card">
                <div className="card-icon">{card.icon}</div>
                <h2 className="card-title">{card.title}</h2>
            </div>
            ))}
        </div>
        </div>
    );
};

export default WhatWeDo;
