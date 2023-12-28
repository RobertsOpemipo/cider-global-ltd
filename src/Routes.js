// src/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './components/contactpage/ContactPage';
// import Subpage1 from './components/pages/Subpage1';
// import Subpage2 from './components/pages/Subpage2';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      
      <Route path="/contact" element={<ContactPage />} /> {/* Add the ContactPage route */}
      {/* Add other routes for your pages */}
    </Routes>
  );
};

export default AppRoutes;
