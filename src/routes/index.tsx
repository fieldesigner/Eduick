import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>            
            <Route path="/" element={<LandingPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;