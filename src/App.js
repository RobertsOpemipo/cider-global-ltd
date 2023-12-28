// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './Routes';
import './App.css';
import './index.css';
import './components/styles/index.css';

function App() {
  return (
    <Router basename="/">
      <div>
        {/* <Navbar /> */}
        <AppRoutes />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
