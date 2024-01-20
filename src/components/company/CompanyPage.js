import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import AboutHero from './AboutHero';
import AboutBody from './AboutBody';
import TeamPage from './TeamPage';
import AboutCarousel from './AboutCarousel';

const CompanyPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <AboutHero />
      <AboutBody />
      <AboutCarousel />
      {/* <TeamPage /> */}
      <Footer />
    </div>
  );
};

export default CompanyPage;
