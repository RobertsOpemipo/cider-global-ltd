// ContactPage.js
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="flex">
        <ContactForm className="w-12/" /> {/* Adjust the width as needed */}
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
