// src/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './components/contactpage/ContactPage';
import CompanyPage from './components/company/CompanyPage';
import Cloudhome from './components/cloudmigration/Cloudhome';
// Import your CloudMigrationSection component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<CompanyPage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* Add a route for Cloud Migration */}
      <Route path="/cloud" element={<Cloudhome />} />
      {/* Add other routes for your pages */}
    </Routes>
  );
};

export default AppRoutes;
