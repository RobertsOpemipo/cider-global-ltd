// src/components/Home.js
import React from 'react';
import Hero from '../components/homepage/Hero';
import AboutUs from '../components/homepage/AboutUs';
import Services from '../components/homepage/Services';
import Together from '../components/homepage/Together';
import Text from '../components/homepage/Text';
import WhatWeDo from '../components/homepage/WhatWeDo' ;
import ContactUs from '../components/homepage/ContactUs';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar' // Update the path

const Home = () => {
    return (
        <div>
        <NavBar />
        <Hero />
        <WhatWeDo />
        <Together />
        <Text />
        <Services />
        <AboutUs />
        <ContactUs />
        <Footer />
        {/* Add other components as needed */}
        </div>
    );
};

export default Home;
