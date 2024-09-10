import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Atrial from './preds/atrial';
import Hattack from './preds/hattack';
import Strk from './preds/stroke';
import Stroke from './admin/stroke/Dashboard';
import Hfd from './admin/hf/Dashboard';
import Atriald from './admin/atrial/Dashboard';
import Hattackd from './admin/hattack/Dashboard';
import Hf from './preds/hf';
import { AfTable } from './components/AfTable';
import Signup from './auth/Signup';
import Login from './auth/Login';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from './components/PrivateRoute';



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setIsAuthenticated(false); // Set auth state to false
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <FeatureSection />
            <Workflow />
            <Pricing />
            <Testimonials />
            <AfTable />
          </>
        } />
        
        {/* Public Routes */}
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Routes */}
        <Route
          path="/atrial"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Atrial />
            </PrivateRoute>
          }
        />
        <Route
          path="/hattack"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Hattack />
            </PrivateRoute>
          }
        />
        <Route
          path="/stroke"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Strk />
            </PrivateRoute>
          }
        />
        <Route
          path="/hf"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Hf />
            </PrivateRoute>
          }
        />
        <Route path="/admin/stroke/dashboard" element={<Stroke />} />
        <Route path="/admin/hf/dashboard" element={<Hfd />} />
        <Route path="/admin/atrial/dashboard" element={<Atriald />} />
        <Route path="/admin/hattack/dashboard" element={<Hattackd />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
