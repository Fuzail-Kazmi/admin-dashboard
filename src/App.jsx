import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Drivers from './pages/Drivers';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/users/user" element={<UserPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;